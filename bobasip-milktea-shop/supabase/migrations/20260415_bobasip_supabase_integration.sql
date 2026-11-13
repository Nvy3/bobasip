-- BobaSip Milk Tea Shop - Supabase schema (safe for a fresh project)
-- Run in Supabase SQL Editor (or as a migration). Uses additive/IF NOT EXISTS patterns where possible.

create extension if not exists "pgcrypto";

-- =====================
-- Profiles (1:1 with auth.users)
-- =====================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text unique,
  phone text,
  role text not null default 'customer' check (role in ('customer','admin')),
  avatar text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Auto-create profile on signup (never trust client for role; default customer)
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
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', split_part(coalesce(new.email,''),'@',1), ''),
    new.email,
    'customer'
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = case when public.profiles.full_name = '' then excluded.full_name else public.profiles.full_name end,
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Prevent role escalation from client updates
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

-- Admin helper (SECURITY DEFINER to avoid recursive RLS issues)
create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p where p.id = uid and p.role = 'admin'
  );
$$;

grant execute on function public.is_admin(uuid) to anon, authenticated;

-- =====================
-- Products
-- =====================
create table if not exists public.products (
  id text primary key,
  name text not null,
  description text,
  price numeric,
  medium_price numeric,
  large_price numeric,
  image_url text,
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
-- Orders (status flow preserved for app compatibility)
-- =====================
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  order_number text unique not null, -- existing ref e.g. BS123456
  status text not null default 'Pending Approval'
    check (status in ('Pending Approval','Accepted','Preparing','Out for Delivery','Delivered','Rejected','Cancelled')),
  subtotal numeric not null default 0,
  delivery_fee numeric not null default 0,
  total numeric not null default 0,
  payment_method text,
  customer_name text,
  customer_phone text,
  customer_email text,
  delivery_address text,
  notes text,
  rejection_reason text,
  items jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status_updated_at timestamptz not null default now()
);

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

create or replace function public.validate_order_transition()
returns trigger language plpgsql as $$
declare
  old_s text := old.status;
  new_s text := new.status;
begin
  if new_s = old_s then return new; end if;
  new.status_updated_at = now();
  if old_s = 'Pending Approval' and new_s in ('Accepted','Rejected','Cancelled') then return new; end if;
  if old_s = 'Accepted' and new_s = 'Preparing' then return new; end if;
  if old_s = 'Preparing' and new_s = 'Out for Delivery' then return new; end if;
  if old_s = 'Out for Delivery' and new_s = 'Delivered' then return new; end if;
  raise exception 'Invalid status transition from % to %', old_s, new_s;
end;
$$;

drop trigger if exists order_transition_check on public.orders;
create trigger order_transition_check
before update of status on public.orders
for each row execute function public.validate_order_transition();

-- =====================
-- Order items
-- =====================
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id text,
  product_name text not null,
  quantity integer not null default 1 check (quantity > 0),
  price numeric not null default 0,
  size text,
  sugar_level text,
  ice_level text,
  toppings jsonb not null default '[]'::jsonb,
  subtotal numeric not null default 0,
  created_at timestamptz not null default now()
);

-- =====================
-- Notifications
-- =====================
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  type text,
  title text not null,
  message text not null,
  order_id uuid references public.orders(id) on delete set null,
  order_number text, -- compatibility with app ref
  read boolean not null default false,
  created_at timestamptz not null default now(),
  event_key text,
  customer_name text,
  total_amount numeric,
  order_date_time text,
  notification_type text,
  user_email text
);

create unique index if not exists notifications_user_event_key_uidx
  on public.notifications(user_id, event_key)
  where event_key is not null;

-- =====================
-- Indexes
-- =====================
create index if not exists profiles_role_idx on public.profiles(role);
create index if not exists orders_user_id_idx on public.orders(user_id);
create index if not exists orders_status_idx on public.orders(status);
create index if not exists orders_created_at_idx on public.orders(created_at desc);
create index if not exists orders_order_number_idx on public.orders(order_number);
create index if not exists order_items_order_id_idx on public.order_items(order_id);
create index if not exists notifications_user_id_idx on public.notifications(user_id, created_at desc);
create index if not exists notifications_unread_user_idx on public.notifications(user_id, read, created_at desc);
create index if not exists notifications_order_id_idx on public.notifications(order_id);

-- =====================
-- RLS
-- =====================
alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.notifications enable row level security;

-- Profiles
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;

create policy "profiles_select_own_or_admin" on public.profiles
for select using (auth.uid() = id or public.is_admin());

create policy "profiles_update_own" on public.profiles
for update using (auth.uid() = id)
with check (auth.uid() = id);

create policy "profiles_insert_own" on public.profiles
for insert with check (auth.uid() = id);

-- Products
drop policy if exists "products_select_all" on public.products;
drop policy if exists "products_admin_write" on public.products;

create policy "products_select_all" on public.products
for select using (true);

create policy "products_admin_write" on public.products
for all using (public.is_admin())
with check (public.is_admin());

-- Orders
drop policy if exists "orders_select_own_or_admin" on public.orders;
drop policy if exists "orders_insert_own" on public.orders;
drop policy if exists "orders_admin_update" on public.orders;

create policy "orders_select_own_or_admin" on public.orders
for select using (user_id = auth.uid() or public.is_admin());

create policy "orders_insert_own" on public.orders
for insert with check (user_id = auth.uid());

create policy "orders_admin_update" on public.orders
for update using (public.is_admin())
with check (public.is_admin());

-- Order items
drop policy if exists "order_items_select_own_or_admin" on public.order_items;
drop policy if exists "order_items_insert_own" on public.order_items;

create policy "order_items_select_own_or_admin" on public.order_items
for select using (
  public.is_admin() or exists (
    select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid()
  )
);

create policy "order_items_insert_own" on public.order_items
for insert with check (
  exists (
    select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid()
  )
);

-- Notifications
drop policy if exists "notifications_select_own" on public.notifications;
drop policy if exists "notifications_update_own" on public.notifications;
drop policy if exists "notifications_delete_own" on public.notifications;
drop policy if exists "notifications_insert_own" on public.notifications;
drop policy if exists "notifications_admin_insert" on public.notifications;

create policy "notifications_select_own" on public.notifications
for select using (user_id = auth.uid() or public.is_admin());

create policy "notifications_update_own" on public.notifications
for update using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "notifications_delete_own" on public.notifications
for delete using (user_id = auth.uid());

create policy "notifications_insert_own" on public.notifications
for insert with check (user_id = auth.uid());

-- Allow admins to create notifications for customers (status updates)
create policy "notifications_admin_insert" on public.notifications
for insert with check (public.is_admin());

-- =====================
-- Realtime publication
-- =====================
do $$
begin
  alter publication supabase_realtime add table public.orders;
exception when duplicate_object then null; when undefined_object then null;
end $$;
do $$
begin
  alter publication supabase_realtime add table public.notifications;
exception when duplicate_object then null; when undefined_object then null;
end $$;

grant usage on schema public to anon, authenticated;
grant select on public.products to anon, authenticated;

-- NOTES:
-- 1) Create first admin securely in Supabase SQL Editor after signup:
--    update public.profiles set role='admin' where email='admin@yourdomain.com';
-- 2) Ensure Realtime is enabled for orders/notifications in Supabase Dashboard (Database > Replication) if needed.
-- 3) Server-side endpoints using SUPABASE_SERVICE_ROLE_KEY (e.g. api/notify.js) bypass RLS for admin fanout.
