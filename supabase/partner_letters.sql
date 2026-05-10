create extension if not exists pgcrypto;

create table if not exists public.partner_letters (
  id uuid primary key default gen_random_uuid(),
  message text not null check (char_length(message) between 1 and 1000),
  sender text not null default 'Pink',
  created_at timestamptz not null default now()
);

alter table public.partner_letters enable row level security;

grant usage on schema public to anon;
grant select, insert on public.partner_letters to anon;

drop policy if exists "Anyone can read partner letters" on public.partner_letters;
create policy "Anyone can read partner letters"
on public.partner_letters
for select
to anon
using (true);

drop policy if exists "Anyone can create partner letters" on public.partner_letters;
create policy "Anyone can create partner letters"
on public.partner_letters
for insert
to anon
with check (true);
