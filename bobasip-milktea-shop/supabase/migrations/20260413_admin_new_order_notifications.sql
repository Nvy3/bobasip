-- Admin new-order notifications (BobaSip)
-- Apply in Supabase SQL Editor after base schema.sql.
-- Purpose: durable, deduplicated, admin-only notifications with realtime support.

-- 1) Extend notifications for structured order info and idempotency
alter table public.notifications
  add column if not exists event_key text,
  add column if not exists customer_name text,
  add column if not exists total_amount numeric,
  add column if not exists order_date_time text,
  add column if not exists notification_type text;

-- One notification per admin per event (prevents duplicates across retries/devices)
create unique index if not exists notifications_user_event_key_uidx
  on public.notifications(user_id, event_key)
  where event_key is not null;

-- Helpful indexes
create index if not exists notifications_unread_user_idx
  on public.notifications(user_id, read, created_at desc);

-- 2) RLS: only the authenticated owner can read/update/delete their notifications
drop policy if exists "notifications_select_own" on public.notifications;
drop policy if exists "notifications_admin_write" on public.notifications;

create policy "notifications_select_own" on public.notifications
  for select using (user_id = auth.uid());

create policy "notifications_update_own" on public.notifications
  for update using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "notifications_delete_own" on public.notifications
  for delete using (user_id = auth.uid());

-- Inserts must be performed server-side with the service role key
-- (Edge Function / server endpoint) so that:
--   - service role is never exposed to browsers
--   - all admin recipients can be resolved securely
--   - one row per admin per order is enforced by the unique index
-- Do NOT grant anon/authenticated insert on public.notifications.

-- 3) Enable realtime (run once; ignore error if already added)
do $$
begin
  alter publication supabase_realtime add table public.notifications;
exception when duplicate_object then null;
end $$;

-- Verification
-- select event_key, user_id, title, ref, read from public.notifications order by created_at desc;
