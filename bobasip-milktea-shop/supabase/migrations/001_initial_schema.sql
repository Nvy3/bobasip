-- BobaSip Milk Tea Shop - Initial Supabase schema/migration
-- File: supabase/migrations/001_initial_schema.sql
-- Safe to run on a NEW Supabase project (uses IF NOT EXISTS / guarded drops where needed).
-- Based on the existing BobaSip application structure (static HTML/vanilla JS, localStorage-compatible fields).
--
-- Notes:
--   * No secrets/service-role keys are included.
--   * Order statuses are preserved to match the existing app:
--       Pending Approval -> Accepted -> Preparing -> Out for Delivery -> Delivered
--       Pending Approval -> Rejected | Cancelled
--   * Admins must be promoted securely (SQL/service context), never by client self-assignment.

begin;

-- Extensions
create extension if not exists "pgcrypto";

-- =====================
-- Utility functions (no table dependencies)
-- =====================
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- =====================
-- Profiles (mapped 1:1 to Supabase Auth users)
-- Must exist before any function/policy/trigger that references public.profiles.
-- =====================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text unique,
  phone text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  avatar text,
  -- compatibility with existing app naming
  name text generated always as (full_name) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Auto-create profile when a Supabase Auth user is created (default role = customer)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email, role)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name',
      split_part(coalesce(new.email, ''), '@', 1),
      ''
    ),
    new.email,
    'customer'
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = case
      when coalesce(public.profiles.full_name, '') = '' then excluded.full_name
      else public.profiles.full_name
    end,
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Prevent customers (or any authenticated client) from changing their own role
create or replace function public.prevent_profile_role_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'UPDATE' then
    if auth.role() = 'authenticated' and new.role is distinct from old.role then
      raise exception 'Changing role is not allowed';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_prevent_role_escalation on public.profiles;
create trigger profiles_prevent_role_escalation
before update on public.profiles
for each row execute function public.prevent_profile_role_escalation();

-- Admin helper (SECURITY DEFINER avoids recursive RLS lookups). Defined after profiles table exists.
create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid and p.role = 'admin'
  );
$$;

grant execute on function public.is_admin(uuid) to anon, authenticated;

-- =====================
-- Products (matches existing catalog/custom product structure)
-- =====================
create table if not exists public.products (
  id text primary key,
  name text not null,
  description text,
  -- existing app uses medium/large pricing; price kept for generic compatibility
  price numeric(10,2),
  medium_price numeric(10,2),
  large_price numeric(10,2),
  image_url text,
  icon text,
  category text,
  available boolean not null default true,
  sort_order int,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

-- =====================
-- Orders (matches existing checkout/order structure)
-- =====================
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  order_number text not null unique, -- existing ref, e.g. BS123456
  status text not null default 'Pending Approval'
    check (status in (
      'Pending Approval',
      'Accepted',
      'Preparing',
      'Out for Delivery',
      'Delivered',
      'Rejected',
      'Cancelled'
    )),
  subtotal numeric(10,2) not null default 0,
  delivery_fee numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  payment_method text,
  customer_name text,
  customer_phone text,
  customer_email text,
  delivery_address text,
  notes text,
  rejection_reason text,
  -- snapshot of items for compatibility with existing app/offline-safe reads
  items jsonb not null default '[]'::jsonb,
  -- compatibility timestamps used by existing app logic/UI
  placed_at timestamptz not null default now(),
  accepted_at timestamptz,
  rejected_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status_updated_at timestamptz not null default now()
);

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

-- Enforce valid status transitions and keep status timestamps in sync
create or replace function public.validate_order_transition()
returns trigger
language plpgsql
as $$
declare
  old_s text := old.status;
  new_s text := new.status;
begin
  if new_s is distinct from old_s then
    new.status_updated_at = now();

    if old_s = 'Pending Approval' and new_s in ('Accepted', 'Rejected', 'Cancelled') then
      if new_s = 'Accepted' and new.accepted_at is null then new.accepted_at = now(); end if;
      if new_s = 'Rejected' and new.rejected_at is null then new.rejected_at = now(); end if;
      return new;
    elsif old_s = 'Accepted' and new_s = 'Preparing' then
      return new;
    elsif old_s = 'Preparing' and new_s = 'Out for Delivery' then
      return new;
    elsif old_s = 'Out for Delivery' and new_s = 'Delivered' then
      return new;
    else
      raise exception 'Invalid status transition from % to %', old_s, new_s;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists order_transition_check on public.orders;
create trigger order_transition_check
before update of status on public.orders
for each row execute function public.validate_order_transition();

-- =====================
-- Order items (normalized; preserves existing customizations)
-- Existing item shape: {id, name, price, icon, image, size, qty, sugar, addons[]}
-- =====================
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id text,
  product_name text not null,
  quantity integer not null default 1 check (quantity > 0),
  unit_price numeric(10,2) not null default 0,
  line_total numeric(10,2) not null default 0,
  size text,                 -- e.g. Medium / Large
  sugar_level text,          -- e.g. 0%, 25%, 50%, 75%, 100%
  ice_level text,
  addons jsonb not null default '[]'::jsonb, -- e.g. [{name, price}]
  icon text,
  image_url text,
  customizations jsonb not null default '{}'::jsonb, -- extensible (notes/options)
  created_at timestamptz not null default now()
);

-- Keep line_total consistent when inserted/updated
create or replace function public.set_order_item_line_total()
returns trigger
language plpgsql
as $$
begin
  new.line_total = coalesce(new.unit_price, 0) * coalesce(new.quantity, 1);
  return new;
end;
$$;

drop trigger if exists order_items_set_line_total on public.order_items;
create trigger order_items_set_line_total
before insert or update of unit_price, quantity on public.order_items
for each row execute function public.set_order_item_line_total();

-- =====================
-- Notifications (linked to user and optionally order; realtime)
-- Existing app fields: title, msg/message, ref, read, eventKey, customerName,
-- totalAmount, orderDateTime, notificationType, createdAt
-- =====================
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  type text, -- e.g. order_update
  title text not null,
  message text not null,
  order_id uuid references public.orders(id) on delete set null,
  order_number text, -- existing ref/order number compatibility
  read boolean not null default false,
  -- compatibility/structured fields used by existing app/server fanout
  event_key text,
  customer_name text,
  total_amount numeric(10,2),
  order_date_time text,
  notification_type text,
  user_email text,
  created_at timestamptz not null default now()
);

-- One notification per user per event (prevents duplicates/retries across devices)
create unique index if not exists notifications_user_event_key_uidx
  on public.notifications(user_id, event_key)
  where event_key is not null;

-- =====================
-- Indexes (all referenced tables exist)
-- =====================
create index if not exists profiles_role_idx on public.profiles(role);
create index if not exists profiles_email_idx on public.profiles(email);

create index if not exists products_category_idx on public.products(category);
create index if not exists products_available_idx on public.products(available);

create index if not exists orders_user_id_idx on public.orders(user_id);
create index if not exists orders_status_idx on public.orders(status);
create index if not exists orders_created_at_idx on public.orders(created_at desc);
create index if not exists orders_order_number_idx on public.orders(order_number);

create index if not exists order_items_order_id_idx on public.order_items(order_id);
create index if not exists order_items_product_id_idx on public.order_items(product_id);

create index if not exists notifications_user_id_idx on public.notifications(user_id, created_at desc);
create index if not exists notifications_unread_user_idx on public.notifications(user_id, read, created_at desc);
create index if not exists notifications_order_id_idx on public.notifications(order_id);
create index if not exists notifications_order_number_idx on public.notifications(order_number);

-- =====================
-- Row Level Security (RLS)
-- Enabled after tables and helper functions (e.g. public.is_admin) exist.
-- =====================
alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.notifications enable row level security;

-- PROFILES: users read/update own; admins read all; no client role escalation
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;

create policy "profiles_select_own_or_admin" on public.profiles
for select
using (auth.uid() = id or public.is_admin());

create policy "profiles_insert_own" on public.profiles
for insert
with check (auth.uid() = id and role = 'customer'); -- fallback; trigger also creates profile

create policy "profiles_update_own" on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id); -- role change blocked by trigger

-- PRODUCTS: public/storefront readable; only admins can manage
drop policy if exists "products_select_all" on public.products;
drop policy if exists "products_admin_insert" on public.products;
drop policy if exists "products_admin_update" on public.products;
drop policy if exists "products_admin_delete" on public.products;

create policy "products_select_all" on public.products
for select
using (true);

create policy "products_admin_insert" on public.products
for insert
with check (public.is_admin());

create policy "products_admin_update" on public.products
for update
using (public.is_admin())
with check (public.is_admin());

create policy "products_admin_delete" on public.products
for delete
using (public.is_admin());

-- ORDERS: customers access only their own; admins can view/manage all
drop policy if exists "orders_select_own_or_admin" on public.orders;
drop policy if exists "orders_insert_own" on public.orders;
drop policy if exists "orders_update_admin" on public.orders;
drop policy if exists "orders_delete_admin" on public.orders;

create policy "orders_select_own_or_admin" on public.orders
for select
using (user_id = auth.uid() or public.is_admin());

create policy "orders_insert_own" on public.orders
for insert
with check (user_id = auth.uid());

create policy "orders_update_admin" on public.orders
for update
using (public.is_admin())
with check (public.is_admin());

create policy "orders_delete_admin" on public.orders
for delete
using (public.is_admin());

-- ORDER ITEMS: accessible only via own orders (or admin)
drop policy if exists "order_items_select_own_or_admin" on public.order_items;
drop policy if exists "order_items_insert_own" on public.order_items;
drop policy if exists "order_items_update_admin" on public.order_items;
drop policy if exists "order_items_delete_admin" on public.order_items;

create policy "order_items_select_own_or_admin" on public.order_items
for select
using (
  public.is_admin()
  or exists (
    select 1 from public.orders o
    where o.id = order_items.order_id
      and o.user_id = auth.uid()
  )
);

create policy "order_items_insert_own" on public.order_items
for insert
with check (
  exists (
    select 1 from public.orders o
    where o.id = order_items.order_id
      and o.user_id = auth.uid()
  )
);

create policy "order_items_update_admin" on public.order_items
for update
using (public.is_admin())
with check (public.is_admin());

create policy "order_items_delete_admin" on public.order_items
for delete
using (public.is_admin());

-- NOTIFICATIONS: customers access only their own; admins can read/support and create customer notifications
-- Server-side fanout (e.g. api/notify.js) should use SUPABASE_SERVICE_ROLE_KEY (bypasses RLS, never exposed to frontend)
drop policy if exists "notifications_select_own_or_admin" on public.notifications;
drop policy if exists "notifications_insert_own" on public.notifications;
drop policy if exists "notifications_insert_admin" on public.notifications;
drop policy if exists "notifications_update_own" on public.notifications;
drop policy if exists "notifications_delete_own" on public.notifications;

create policy "notifications_select_own_or_admin" on public.notifications
for select
using (user_id = auth.uid() or public.is_admin());

create policy "notifications_insert_own" on public.notifications
for insert
with check (user_id = auth.uid());

create policy "notifications_insert_admin" on public.notifications
for insert
with check (public.is_admin());

create policy "notifications_update_own" on public.notifications
for update
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "notifications_delete_own" on public.notifications
for delete
using (user_id = auth.uid());

-- =====================
-- Realtime configuration (orders + notifications)
-- Required for live order status updates and notification delivery.
-- =====================
do $$
begin
  alter publication supabase_realtime add table public.orders;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.notifications;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;

-- =====================
-- Grants
-- =====================
grant usage on schema public to anon, authenticated;
grant select on public.products to anon, authenticated;

commit;

-- =====================
-- Post-migration manual step (run separately in SQL Editor, service context):
-- Promote an admin AFTER that user signs up in Supabase Auth:
--   update public.profiles set role = 'admin' where email = 'admin@yourdomain.com';
-- Do NOT allow clients to set admin role. Do NOT put service-role keys in frontend/SQL.
-- =====================
