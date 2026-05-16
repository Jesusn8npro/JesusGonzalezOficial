-- ============================================================
--  Esquema mínimo y sólido — Jesús González Oficial
--  Ejecutar en Supabase: SQL Editor -> pegar -> Run
--  (o vía la integración Supabase: apply_migration)
--
--  Solo lo necesario para un panel /admin con estadísticas
--  y control real:
--    - leads      : cada contacto/cotización del sitio (métricas)
--    - eventos    : agenda / disponibilidad (escasez honesta)
--    - novedades  : noticias publicables (crecer contenido)
--  El "admin" es un usuario de Supabase Auth (ADMIN_EMAIL).
-- ============================================================

create extension if not exists "pgcrypto";

-- Trigger genérico para mantener updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- ---------- LEADS (núcleo de estadísticas) ----------
create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  creado_at     timestamptz not null default now(),
  nombre        text,
  whatsapp      text,
  tipo_evento   text,
  ciudad        text,
  fecha_evento  date,
  mensaje       text,
  origen        text,                       -- cotizador_rapido | formulario_contacto | ...
  estado        text not null default 'nuevo'  -- nuevo | contactado | cotizado | cerrado | perdido
);
create index if not exists leads_creado_at_idx on public.leads (creado_at desc);
create index if not exists leads_estado_idx     on public.leads (estado);
create index if not exists leads_ciudad_idx     on public.leads (ciudad);

-- ---------- EVENTOS (agenda / disponibilidad) ----------
create table if not exists public.eventos (
  id          uuid primary key default gen_random_uuid(),
  titulo      text not null,
  ciudad      text,
  fecha       date not null,
  estado      text not null default 'confirmado', -- confirmado | tentativo | bloqueado
  notas       text,
  creado_at   timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists eventos_fecha_idx on public.eventos (fecha);
drop trigger if exists eventos_set_updated_at on public.eventos;
create trigger eventos_set_updated_at before update on public.eventos
  for each row execute function public.set_updated_at();

-- ---------- NOVEDADES (noticias publicables) ----------
create table if not exists public.novedades (
  id          uuid primary key default gen_random_uuid(),
  titulo      text not null,
  slug        text unique not null,
  contenido   text,
  imagen      text,
  publicado   boolean not null default false,
  fecha       date not null default current_date,
  creado_at   timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
drop trigger if exists novedades_set_updated_at on public.novedades;
create trigger novedades_set_updated_at before update on public.novedades
  for each row execute function public.set_updated_at();

-- ============================================================
--  RLS — seguridad por fila
-- ============================================================
alter table public.leads     enable row level security;
alter table public.eventos   enable row level security;
alter table public.novedades enable row level security;

-- LEADS: el sitio (anon) puede CREAR; solo usuarios autenticados (admin)
-- pueden leer/editar. (service_role salta RLS para el servidor.)
drop policy if exists leads_insert_anon on public.leads;
create policy leads_insert_anon on public.leads
  for insert to anon, authenticated with check (true);
drop policy if exists leads_admin_all on public.leads;
create policy leads_admin_all on public.leads
  for all to authenticated using (true) with check (true);

-- EVENTOS / NOVEDADES: público lee lo visible; admin controla todo.
drop policy if exists eventos_select_public on public.eventos;
create policy eventos_select_public on public.eventos
  for select to anon, authenticated using (true);
drop policy if exists eventos_admin_all on public.eventos;
create policy eventos_admin_all on public.eventos
  for all to authenticated using (true) with check (true);

drop policy if exists novedades_select_public on public.novedades;
create policy novedades_select_public on public.novedades
  for select to anon, authenticated using (publicado = true);
drop policy if exists novedades_admin_all on public.novedades;
create policy novedades_admin_all on public.novedades
  for all to authenticated using (true) with check (true);

-- ============================================================
--  NOTAS
--  - Admin: crea el usuario en Supabase Auth con el email de ADMIN_EMAIL.
--  - Triggers diarios: usar Supabase Scheduled Functions / pg_cron
--    (ej. marcar leads 'perdido' tras X días sin contacto). Se añade
--    cuando el proyecto Supabase esté conectado.
-- ============================================================
