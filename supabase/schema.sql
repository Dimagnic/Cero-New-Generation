create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  whatsapp text not null,
  correo text not null,
  servicio text not null,
  presupuesto text,
  mensaje text,
  consentimiento boolean not null default false,
  estado text not null default 'nuevo'
);

-- RLS activo y sin políticas públicas: solo el backend (service role) escribe.
alter table public.leads enable row level security;
