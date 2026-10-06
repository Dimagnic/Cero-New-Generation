# Cero+ · Páginas web profesionales para negocios

React + Vite + TypeScript (front) · Función serverless Node/TS en `/api` · Supabase (leads) · Deploy en Vercel.

## Desarrollo local
```bash
npm install
cp .env.example .env.local     # llena las variables
npm run dev                    # solo front (el formulario necesita /api)
npx vercel dev                 # front + /api juntos (recomendado para probar el formulario)
```

## Supabase
1. Crea un proyecto en supabase.com.
2. En **SQL Editor** ejecuta `supabase/schema.sql`.
3. Copia `Project URL` y la `service_role key` (Settings → API).

## Variables de entorno (Vercel → Settings → Environment Variables)
| Variable | Dónde | Descripción |
|---|---|---|
| `VITE_WHATSAPP` | pública | Número con lada, ej. `5215512345678` |
| `VITE_EMAIL` | pública | Correo mostrado en el footer |
| `SUPABASE_URL` | servidor | URL del proyecto Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | servidor | **Secreta.** Nunca con prefijo `VITE_` |

## Deploy
Importa el repo en Vercel (framework Vite se detecta solo). Cada `git push` a `main` redespliega.

## Estructura
- `src/App.tsx` · página completa · `src/content.ts` · textos y precios (edita aquí los `X,XXX`)
- `src/components/ContactForm.tsx` · formulario → `POST /api/lead`
- `api/lead.ts` · valida, filtra bots (honeypot) y guarda en Supabase
- `supabase/schema.sql` · tabla `leads` con RLS activo
