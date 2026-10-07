import { useState, type ChangeEvent, type FormEvent } from 'react'
import { servicios, presupuestos, wa } from '../content'

type Status = 'idle' | 'sending' | 'ok' | 'error'
const empty = {
  nombre: '', whatsapp: '', correo: '', ciudad: '', negocio: '', giro: '',
  servicio: servicios[0], presupuesto: presupuestos[0], mensaje: '', consentimiento: false, website: '',
}

export default function ContactForm() {
  const [f, setF] = useState(empty)
  const [status, setStatus] = useState<Status>('idle')
  const [msg, setMsg] = useState('')

  const on = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const t = e.target
    setF((p) => ({ ...p, [t.name]: t instanceof HTMLInputElement && t.type === 'checkbox' ? t.checked : t.value }))
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      const data = (await r.json().catch(() => ({}))) as { error?: string }
      if (!r.ok) throw new Error(data.error || 'No pudimos enviar tu solicitud.')
      setStatus('ok'); setF(empty)
    } catch (err) {
      setMsg(err instanceof Error ? err.message : 'Error inesperado.'); setStatus('error')
    }
  }

  if (status === 'ok')
    return (
      <div className="form-done" role="status">
        <h3>Solicitud enviada</h3>
        <p>Te respondemos por WhatsApp o correo en menos de 24 horas hábiles.</p>
        <button type="button" className="btn b1" onClick={() => setStatus('idle')}>Enviar otra solicitud</button>
      </div>
    )

  return (
    <form className="fgrid" onSubmit={submit}>
      <label>Nombre completo *<input name="nombre" value={f.nombre} onChange={on} placeholder="Tu nombre" required autoComplete="name" /></label>
      <label>WhatsApp *<input name="whatsapp" type="tel" value={f.whatsapp} onChange={on} placeholder="+52 55 1234 5678" required autoComplete="tel" /></label>
      <label>Correo electrónico *<input name="correo" type="email" value={f.correo} onChange={on} placeholder="tucorreo@ejemplo.com" required autoComplete="email" /></label>
      <label>Ciudad (opcional)<input name="ciudad" value={f.ciudad} onChange={on} placeholder="Ciudad, estado" /></label>
      <label>Nombre del negocio (opcional)<input name="negocio" value={f.negocio} onChange={on} placeholder="Ej. Cafetería El Roble" /></label>
      <label>Giro del negocio (opcional)<input name="giro" value={f.giro} onChange={on} placeholder="Ej. Restaurante, gimnasio..." /></label>
      <label>Servicio que te interesa *
        <select name="servicio" value={f.servicio} onChange={on}>{servicios.map((s) => <option key={s}>{s}</option>)}</select>
      </label>
      <label>Presupuesto aproximado (opcional)
        <select name="presupuesto" value={f.presupuesto} onChange={on}>{presupuestos.map((s) => <option key={s}>{s}</option>)}</select>
      </label>
      <label className="full">¿Qué necesitas lograr? (opcional)
        <textarea name="mensaje" value={f.mensaje} onChange={on} placeholder="Cuéntanos qué esperas de la página, tu meta principal o cualquier detalle extra..." />
      </label>
      <input className="hp" name="website" value={f.website} onChange={on} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="chk full">
        <input type="checkbox" name="consentimiento" checked={f.consentimiento} onChange={on} required />
        Autorizo a Cero+ a contactarme por WhatsApp o correo para dar seguimiento a esta solicitud.
      </label>
      {status === 'error' && <p className="err full" role="alert">{msg} <a href={wa()} target="_blank" rel="noopener">Escríbenos por WhatsApp</a></p>}
      <button className="btn b1 full" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}</button>
      <p className="note full" style={{ textAlign: 'center' }}>Respuesta en menos de 24h hábiles.</p>
    </form>
  )
}
