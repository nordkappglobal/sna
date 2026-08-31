create extension if not exists pgcrypto;

do $$ begin
  create type public.lead_status as enum ('new', 'contacted', 'consulting', 'qualified', 'enrolled', 'not_interested', 'unreachable');
exception when duplicate_object then null;
end $$;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  display_name text not null default '',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  source text not null default 'SNA' check (source = 'SNA'),
  campaign text not null default 'sna_after_school_2026' check (campaign = 'sna_after_school_2026'),
  parent_name text not null check (char_length(parent_name) between 2 and 120),
  phone_raw text not null,
  phone_normalized text not null check (phone_normalized ~ '^0[0-9]{9,10}$'),
  student_name text not null check (char_length(student_name) between 2 and 120),
  grade text not null,
  activities text[] not null check (cardinality(activities) > 0),
  time_slots text[] not null check (cardinality(time_slots) > 0),
  locale text not null default 'vi' check (locale in ('vi', 'en')),
  status public.lead_status not null default 'new',
  notes text not null default '',
  assigned_to text not null default '',
  next_follow_up_at timestamptz,
  consent_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null,
  deleted_at timestamptz,
  sheet_sync_status text not null default 'pending' check (sheet_sync_status in ('pending', 'success', 'failed', 'skipped')),
  sheet_synced_at timestamptz,
  sheet_sync_error text,
  email_status text not null default 'pending' check (email_status in ('pending', 'success', 'failed', 'skipped')),
  email_sent_at timestamptz,
  email_error text
);

create table if not exists public.lead_events (
  id bigint generated always as identity primary key,
  lead_id uuid not null references public.leads(id) on delete cascade,
  event_type text not null,
  actor_id uuid references auth.users(id) on delete set null,
  changes jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.integration_jobs (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  channel text not null check (channel in ('google_sheet', 'email')),
  action text not null check (action in ('create', 'update', 'delete', 'restore', 'retry')),
  status text not null default 'pending' check (status in ('pending', 'success', 'failed')),
  attempts integer not null default 0,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_phone_normalized_idx on public.leads (phone_normalized);
create index if not exists leads_source_idx on public.leads (source);
create index if not exists leads_deleted_at_idx on public.leads (deleted_at);
create index if not exists lead_events_lead_id_idx on public.lead_events (lead_id, created_at desc);
create index if not exists integration_jobs_lead_id_idx on public.integration_jobs (lead_id, created_at desc);

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_touch_updated_at on public.leads;
create trigger leads_touch_updated_at before update on public.leads
for each row execute function public.touch_updated_at();

drop trigger if exists jobs_touch_updated_at on public.integration_jobs;
create trigger jobs_touch_updated_at before update on public.integration_jobs
for each row execute function public.touch_updated_at();

alter table public.admin_users enable row level security;
alter table public.leads enable row level security;
alter table public.lead_events enable row level security;
alter table public.integration_jobs enable row level security;

revoke all on table public.admin_users from anon, authenticated;
revoke all on table public.leads from anon, authenticated;
revoke all on table public.lead_events from anon, authenticated;
revoke all on table public.integration_jobs from anon, authenticated;
revoke all on sequence public.lead_events_id_seq from anon, authenticated;
