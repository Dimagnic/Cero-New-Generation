import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm'
import * as c from './content'

const num = (i: number) => String(i + 1).padStart(2, '0')
const ext = { target: '_blank', rel: 'noopener' } as const

export default function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = (e: MediaQueryListEvent) => e.matches && setOpen(false)
    const mq = window.matchMedia('(min-width:901px)')
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    const ids = c.nav.map(([, h]) => h.slice(1))
    let tick = false
    const spy = () => {
      tick = false
      let cur = ''
      ids.forEach((id) => {
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
      mq.removeEventListener('change', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={open ? 'open' : ''}>
        <div className="wrap nav">
          <a href="#inicio"><img style={{ height: 34 }} src="/logo.png" alt="Cero+" /></a>
          <nav id="menu" aria-label="Principal" onClick={(e) => (e.target as HTMLElement).closest('a') && close()}>
            {c.nav.map(([t, h]) => (
              <a key={h} href={h} className={`${h === '#contacto' ? 'muted ' : ''}${active === h.slice(1) ? 'active' : ''}`}
                aria-current={active === h.slice(1) ? 'true' : undefined}>{t}</a>
            ))}
            <div className="menu-cta">
              <a className="btn b1" href="#contacto">Solicitar propuesta</a>
              <a className="btn wa-btn" href={c.wa()} {...ext}>WhatsApp</a>
            </div>
          </nav>
          <a className="btn b1" style={{ padding: '10px 16px', fontSize: '.8rem' }} href="#contacto">Cotizar</a>
          <button className="burger" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="inicio"><div className="wrap">
        <div className="tag">Cero+ · Diseño y desarrollo web</div>
        <h1>Páginas web profesionales para que tu negocio se vea, se entienda y <span className="red">se venda mejor.</span></h1>
        <div className="promise">Primero ves tu página. <span className="red">Si te gusta, hacemos trato.</span></div>
        <p className="lead">Diseñamos páginas que presentan tus servicios, generan confianza y hacen que tus clientes te contacten, coticen, reserven o compren.</p>
        <div className="row">
          <a className="btn b1" href="#contacto">Quiero cotizar mi página</a>
          <a className="btn b2" href={c.wa()} {...ext}>Hablar por WhatsApp</a>
        </div>
        <p className="note">Páginas desde $X,XXX MXN + IVA.</p>
        <div className="since">Por <b className="red">Cero+</b> · Tu negocio, desde cero hasta arriba</div>
      </div></section>

      <div className="band"><span>{c.marquee.join(' ◆ ')} ◆&nbsp;</span></div>

      <section className="light"><div className="wrap">
        <div className="tag">Respaldo real</div>
        <h2>Desarrollo web respaldado por <span className="red">Cero+</span>.</h2>
        <p className="lead">Somos un negocio establecido, no una agencia improvisada. Cuéntanos qué necesitas y te acompañamos hasta publicar.</p>
        <div className="grid g3">
          {c.stats.map(([n, l]) => <div key={n} className="stat" style={{ color: '#fff' }}><div className="num">{n}</div><small>{l}</small></div>)}
        </div>
        <div className="row"><a className="btn b1" href="#contacto">Solicitar mi propuesta</a></div>
      </div></section>

      <section><div className="wrap">
        <div className="tag">El problema</div>
        <h2>Si no explicas qué haces, qué vendes y cómo contactarte, <span className="red">pierdes oportunidades.</span></h2>
        <p className="lead">Depender solo de Facebook, Instagram o WhatsApp deja tu información dispersa y sin un lugar propio para presentar tu negocio.</p>
        <div className="grid g4" style={{ color: 'var(--ink)' }}>
          {c.problems.map(([t, d], i) => <div key={t} className="pb"><div className="num">{num(i)}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div></section>

      <section className="light"><div className="wrap">
        <div className="tag">La solución</div>
        <h2>Una página web que haga más que verse bonita.</h2>
        <p className="lead">La diseñamos alrededor del objetivo de tu negocio: que explique lo que vendes, genere confianza y facilite que te contacten.</p>
        <div className="grid g4">
          {c.solutions.map(([t, d], i) => <div key={t} className="fc"><span className="ic">{c.icons[i]}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div></section>

      <section id="precios" style={{ background: 'linear-gradient(180deg,#0b1626,#1a0a12)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="tag" style={{ justifyContent: 'center' }}>Tipos de páginas web</div>
          <h2>Elige el tipo de página que necesita tu negocio.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>Precios de partida claros. El alcance final se revisa contigo antes de cotizar.</p>
          <div className="grid g3" style={{ textAlign: 'left' }}>
            {c.plans.map((p) => (
              <div key={p.name} className={`card${p.hot ? ' hot' : ''}`}>
                <span className="badge">{p.tag}</span>
                <h3>{p.name}</h3>
                {p.price && <div className="price">Desde $<b>{p.price}</b> <small>MXN</small></div>}
                <p>{p.text}</p>
                {p.time && <small style={{ color: 'var(--mut)' }}>{p.time}</small>}
                <a className={`btn ${p.hot ? 'b1' : 'b2'}`} href="#contacto">{p.cta}</a>
              </div>
            ))}
          </div>
          <p className="note" style={{ maxWidth: 640, marginInline: 'auto' }}>
            Los precios están en pesos mexicanos, más IVA, y pueden cambiar sin previo aviso. El precio final depende del alcance y las funciones requeridas. Dominio y hosting se cotizan por separado.
          </p>
          <div className="row" style={{ justifyContent: 'center' }}><a className="btn b2" href="#contacto">No sé cuál necesito</a></div>
        </div>
      </section>

      <section className="light" id="proyectos"><div className="wrap">
        <div className="tag">Ejemplos de estilo</div>
        <h2>Así podría verse la página de tu negocio.</h2>
        <p className="lead">Tu página se adapta a tu giro, colores y estilo. Reemplaza estas muestras con tus proyectos reales.</p>
        <div className="grid g3">
          {c.examples.map(([t, k, d, bg]) => (
            <div key={t} className="demo">
              <div className="dots"><i /><i /><i />&nbsp;tu-demo.com</div>
              <div className="shot" style={{ background: bg }}><span className="chip">{k}</span><h3>{t}</h3></div>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section id="proceso"><div className="wrap">
        <div className="tag">Diferenciador</div>
        <h2>Primero la ves. Luego decides.</h2>
        <p className="lead">Para landing pages y páginas sencillas preparamos una propuesta visual inicial antes de cerrar trato.</p>
        <div className="quote">Ves una idea de cómo podría lucir tu página. Si te gusta el estilo y el enfoque, avanzamos. Si no, no hay compromiso.</div>
        <p className="note">Importante: aplica únicamente para landing pages y sitios informativos sencillos. No aplica para sistemas web, e-commerce, bases de datos ni paneles administrativos.</p>
        <div className="grid g4" style={{ color: 'var(--ink)' }}>
          {c.preview.map(([t, d], i) => <div key={t} className="pb"><div className="num">{num(i)}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div></section>

      <section className="light"><div className="wrap">
        <div className="tag">Cómo trabajamos</div>
        <h2>Así convertimos tu idea en una página profesional.</h2>
        <p className="lead">Los tiempos comienzan a contar cuando nos entregas la información requerida. Una landing sencilla se entrega en aproximadamente 7 días hábiles.</p>
        <div className="grid g4">
          {c.process.map(([t, d], i) => <div key={t} className="step"><div className="num">{num(i)}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="grid g2" style={{ marginTop: 44 }}>
          <div className="fc">
            <div className="tag">Sí incluye</div>
            <h2>Qué incluye un proyecto web</h2>
            <ul className="ticks">{c.includes.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="note">Dominio y hosting se cotizan por separado salvo que la propuesta indique lo contrario.</p>
          </div>
          <div className="dk">
            <div className="tag">No incluye</div>
            <h2>Una landing no es un sistema web</h2>
            <p style={{ marginTop: 10 }}>Si necesitas funciones especiales, se cotiza como proyecto personalizado.</p>
            <ul className="xl two">{c.excludes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="tag">¿Necesitas algo más avanzado?</div>
          <h2>Además de páginas web, también desarrollamos <span className="red">sistemas a la medida.</span></h2>
          <div className="grid g3" style={{ marginTop: 24 }}>
            {c.systems.map((s, i) => <div key={s} className="pb"><div className="num">{num(i)}</div><h3>{s}</h3></div>)}
          </div>
        </div>
      </div></section>

      <section id="contacto"><div className="wrap"><div className="grid g2" style={{ alignItems: 'start' }}>
        <div>
          <div className="tag">Solicita tu propuesta</div>
          <h2>Cuéntanos de tu negocio y en Cero+ te orientamos.</h2>
          <ul className="ticks">
            <li>Revisamos tu negocio antes de proponer nada.</li>
            <li>Te orientamos sobre qué tipo de página te conviene.</li>
            <li>Puedes ver una propuesta visual inicial si aplica.</li>
            <li>Atención por WhatsApp.</li>
            <li>Respuesta en menos de 24 horas hábiles.</li>
          </ul>
          <div className="quote"><b>No necesitas contratar de inmediato.</b> Primero revisamos tu caso y te decimos qué opción conviene para tu negocio.</div>
          <div className="row"><a className="btn" style={{ background: '#1DB954', color: '#fff' }} href={c.wa()} {...ext}>Prefiero WhatsApp</a></div>
        </div>
        <ContactForm />
      </div></div></section>

      <section className="light" id="faq"><div className="wrap">
        <div className="tag">Preguntas frecuentes</div>
        <h2>Dudas comunes, respuestas claras.</h2>
        <div style={{ marginTop: 28, maxWidth: 760 }}>
          {c.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </div></section>

      <section><div className="wrap">
        <div className="tag">Mantenimiento</div>
        <h2>Después de publicada, también podemos ayudarte con cambios.</h2>
        <div className="grid g3" style={{ color: 'var(--ink)' }}>
          {c.changes.map(([t, p, d]) => (
            <div key={t} className="pb">
              <small style={{ color: 'var(--mut2)' }}>{t.toUpperCase()}</small>
              <div className="price" style={{ color: 'var(--ink)' }}>$<b>{p}</b> <small>MXN</small></div>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="grid g2">
          <div className="card hot">
            <span className="badge">Recomendado</span>
            <h3>Plan comercial</h3>
            <div className="price">$<b>XXX</b> <small>MXN / mes</small></div>
            <ul className="ticks">{c.planComercial.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="card">
            <h3>Plan anual de mantenimiento</h3>
            <div className="price">$<b>X,XXX</b> <small>MXN</small></div>
            <p>Hasta 12 cambios pequeños al año, revisión básica trimestral y precios preferentes para cambios adicionales.</p>
            <a className="btn b1" href="#contacto">Contratar plan anual</a>
          </div>
        </div>
        <p className="note">Los planes de mantenimiento son únicamente para cambios de contenido. No incluyen dominio, hosting, correos empresariales ni soporte técnico de servidores.</p>
      </div></section>

      <section className="final"><div className="wrap">
        <img src="/logo.png" alt="Cero+" />
        <h2>Dinos qué necesitas y Cero+ te ayuda a elegir tu página.</h2>
        <p>Solicita tu propuesta y descubre cómo podría lucir tu página antes de decidir.</p>
        <div className="row" style={{ justifyContent: 'center' }}>
          <a className="btn b1" href="#contacto">Cotizar mi página web</a>
          <a className="btn b2" href={c.wa()} {...ext}>Hablar por WhatsApp</a>
        </div>
      </div></section>

      <footer>
        <div className="wrap ft">
          <div>
            <img src="/logo.png" alt="Cero+" />
            <b style={{ color: '#fff' }}>Cero+</b><br />Páginas web profesionales para negocios.<br /><br />
            {c.EMAIL}<br />WhatsApp: +{c.WHATSAPP}
          </div>
          <div><h4>Navegación</h4><a href="#precios">Páginas web</a><a href="#proyectos">Proyectos</a><a href="#proceso">Cómo funciona</a><a href="#faq">Preguntas frecuentes</a><a href="#contacto">Contacto</a></div>
          <div><h4>Servicios</h4><a href="#precios">Landing page</a><a href="#precios">Sitio web empresarial</a><a href="#precios">Catálogo / citas / tienda</a><a href="#precios">Desarrollo a la medida</a><a href="#faq">Mantenimiento web</a></div>
          <div><h4>Legal</h4><a href="#">Aviso de privacidad</a><a href="#">Términos y condiciones</a><p className="note">Precios en pesos mexicanos, sujetos a cambio sin previo aviso.</p></div>
        </div>
        <div className="wrap" style={{ marginTop: 24 }}>© 2026 Cero+. Todos los derechos reservados.</div>
      </footer>

      <a className="wa" href={c.wa()} {...ext} aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-3.7-1-2.8-1.2-4.5-4.1-4.7-4.3-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.5z" /></svg>
      </a>
    </>
  )
}
