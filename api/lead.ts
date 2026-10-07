import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const SERVICIOS = [
  'Landing page', 'Menú digital', 'Sitio web empresarial',
  'Catálogo / citas / reservaciones', 'Tienda en línea', 'Sistema a la medida',
  'Imágenes o video con IA', 'No estoy seguro',
]

const clean = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })

  const b = (req.body ?? {}) as Record<string, unknown>

  // Honeypot: los bots llenan este campo oculto
  if (clean(b.website, 200)) return res.status(200).json({ ok: true })

  const lead = {
    nombre: clean(b.nombre, 120),
    whatsapp: clean(b.whatsapp, 30),
    correo: clean(b.correo, 160),
    ciudad: clean(b.ciudad, 80) || null,
    negocio: clean(b.negocio, 120) || null,
    giro: clean(b.giro, 120) || null,
    servicio: clean(b.servicio, 60),
    presupuesto: clean(b.presupuesto, 40) || null,
    mensaje: clean(b.mensaje, 2000) || null,
    consentimiento: b.consentimiento === true,
  }

  if (!lead.nombre || lead.whatsapp.replace(/\D/g, '').length < 10)
    return res.status(400).json({ error: 'Revisa tu nombre y tu WhatsApp (10 dígitos).' })
  if (!/^\S+@\S+\.\S+$/.test(lead.correo))
    return res.status(400).json({ error: 'Escribe un correo válido.' })
  if (!SERVICIOS.includes(lead.servicio))
    return res.status(400).json({ error: 'Elige el servicio que te interesa.' })
  if (!lead.consentimiento)
    return res.status(400).json({ error: 'Necesitamos tu autorización para contactarte.' })

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return res.status(500).json({ error: 'Servidor sin configurar.' })

  const { error } = await createClient(url, key).from('leads').insert(lead)
  if (error) {
    console.error('Supabase insert error:', error.message)
    return res.status(500).json({ error: 'No pudimos guardar tu solicitud. Escríbenos por WhatsApp.' })
  }
  return res.status(200).json({ ok: true })
}
