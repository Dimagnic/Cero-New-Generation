import { useEffect, useState } from 'react'
import { A } from '../router'
import { nav, wa } from '../content'

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const home = path === '/'

  useEffect(() => { setOpen(false) }, [path])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width:901px)')
    const onMq = (e: MediaQueryListEvent) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    let tick = false
    const spy = () => {
      tick = false
      if (!home) return setActive('')
      let cur = ''
      nav.forEach(([, h]) => {
        const id = h.split('#')[1]
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) cur = id
      })
      setActive(cur)
    }
    const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(spy) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    spy()
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
      window.removeEventListener('scroll', onScroll)
    }
  }, [home, path])

  const Logo = <A href="/"><img style={{ height: 34 }} src="/logo.png" alt="Cero+" /></A>

  if (path === '/otros-servicios')
    return (
      <header><div className="wrap nav">{Logo}
        <A className="back" href="/">← ¿Necesitas una página web? <b>Volver al inicio</b></A>
      </div></header>
    )
  if (path === '/aviso-de-privacidad' || path === '/terminos-y-condiciones')
    return <header><div className="wrap nav"><A className="back" href="/">← Volver a la página principal</A></div></header>

  return (
    <header className={open ? 'open' : ''}>
      <div className="wrap nav">
        {Logo}
        <nav id="menu" aria-label="Principal">
          {nav.map(([t, h]) => {
            const id = h.split('#')[1]
            return <A key={h} href={h} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined}>{t}</A>
          })}
          <A href="/otros-servicios" className="muted">Otros servicios</A>
          <div className="menu-cta">
            <A className="btn b1" href="/#contacto">Solicitar propuesta</A>
            <a className="btn wa-btn" href={wa()} target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </nav>
        <A className="btn b1 cot" href="/#contacto">Solicitar propuesta</A>
        <button className="burger" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
