import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const SERVICIOS = [
  'Landing page', 'Menú digital', 'Sitio web empresarial',
  'Catálogo / citas / reservaciones', 'Tienda en línea', 'Sistema a la medida',
  'Imágenes o video con IA', 'No estoy seguro',
]

const clean = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max)
const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

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

  const dbUrl = process.env.SUPABASE_URL
  const dbKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const mailKey = process.env.RESEND_API_KEY
  const mailTo = process.env.LEAD_TO_EMAIL
  const useDb = Boolean(dbUrl && dbKey)
  const useMail = Boolean(mailKey && mailTo)

  if (!useDb && !useMail) return res.status(500).json({ error: 'Servidor sin configurar.' })

  let saved = false
  let mailed = false

  if (useDb) {
    const { error } = await createClient(dbUrl!, dbKey!).from('leads').insert(lead)
    if (error) console.error('Supabase insert error:', error.message)
    else saved = true
  }

  if (useMail) {
    const rows: [string, string | null][] = [
      ['Nombre', lead.nombre], ['WhatsApp', lead.whatsapp], ['Correo', lead.correo],
      ['Ciudad', lead.ciudad], ['Negocio', lead.negocio], ['Giro', lead.giro],
      ['Servicio', lead.servicio], ['Presupuesto', lead.presupuesto], ['Mensaje', lead.mensaje],
    ]
    const filled = rows.filter(([, v]) => v)
    const text = filled.map(([k, v]) => `${k}: ${v}`).join('\n')
    const html = `<h2 style="margin:0 0 12px">Nuevo lead desde Cero+</h2>` +
      `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">` +
      filled.map(([k, v]) => `<tr><td style="color:#555;vertical-align:top"><b>${k}</b></td><td>${esc(v!).replace(/\n/g, '<br>')}</td></tr>`).join('') +
      `</table>`
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${mailKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || 'Cero+ <onboarding@resend.dev>',
          to: [mailTo],
          reply_to: lead.correo,
          subject: `Nuevo lead: ${lead.nombre} · ${lead.servicio}`,
          text,
          html,
        }),
      })
      if (r.ok) mailed = true
      else console.error('Resend error:', r.status, await r.text())
    } catch (e) {
      console.error('Resend fetch error:', e)
    }
  }

  if (!saved && !mailed)
    return res.status(500).json({ error: 'No pudimos guardar tu solicitud. Escríbenos por WhatsApp.' })
  return res.status(200).json({ ok: true })
}
