import { useEffect, useState } from 'react'
import { A } from '../router'
import ContactForm from '../components/ContactForm'
import * as c from '../content'

const num = (i: number) => String(i + 1).padStart(2, '0')
const ext = { target: '_blank', rel: 'noopener' } as const

/** Escena de respaldo (se ve si no hay /media/hero.jpg): escritorio oscuro, monitor y vidrio rojo. */
function HeroScene() {
  return (
    <svg className="scene" viewBox="0 0 900 600" preserveAspectRatio="xMaxYMid slice" role="presentation">
      <defs>
        <linearGradient id="gw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff2a35" /><stop offset="1" stopColor="#8a0b13" /></linearGradient>
        <linearGradient id="gs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a1f29" /><stop offset="1" stopColor="#0b0f16" /></linearGradient>
        <linearGradient id="gd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1b1410" /><stop offset="1" stopColor="#060708" /></linearGradient>
      </defs>
      <rect width="900" height="600" fill="#0d1117" />
      <rect x="620" y="0" width="200" height="380" fill="url(#gw)" opacity=".9" />
      <rect x="820" y="0" width="80" height="380" fill="#1c2430" />
      <g fill="#171c24" stroke="#2a313c" strokeWidth="3">
        <rect x="270" y="40" width="90" height="120" /><rect x="380" y="20" width="120" height="150" /><rect x="300" y="190" width="100" height="90" />
      </g>
      <rect x="395" y="40" width="90" height="60" fill="#8a0b13" opacity=".8" />
      <rect x="0" y="420" width="900" height="180" fill="url(#gd)" />
      <rect x="560" y="150" width="280" height="190" rx="6" fill="#06080c" stroke="#2a313c" strokeWidth="4" />
      <rect x="570" y="160" width="260" height="170" fill="url(#gs)" />
      <text x="585" y="195" fontFamily="Barlow Condensed,Impact,sans-serif" fontWeight="800" fontSize="26" fill="#fff">DISEÑO QUE</text>
      <text x="585" y="222" fontFamily="Barlow Condensed,Impact,sans-serif" fontWeight="800" fontSize="26" fill="#fff">IMPULSA</text>
      <text x="585" y="249" fontFamily="Barlow Condensed,Impact,sans-serif" fontWeight="800" fontSize="26" fill="#E61923">MARCAS</text>
      <rect x="585" y="262" width="60" height="14" rx="2" fill="#E61923" />
      <g fill="#10151d" stroke="#232a35"><rect x="680" y="200" width="140" height="56" rx="4" /><rect x="585" y="288" width="66" height="34" rx="4" /><rect x="660" y="288" width="66" height="34" rx="4" /><rect x="735" y="288" width="85" height="34" rx="4" /></g>
      <rect x="690" y="340" width="12" height="55" fill="#10151d" /><rect x="640" y="392" width="112" height="9" rx="3" fill="#10151d" />
      <path d="M420 420 L470 330 L520 322" stroke="#2a313c" strokeWidth="5" fill="none" />
      <rect x="400" y="418" width="70" height="8" rx="3" fill="#232a35" />
      <rect x="360" y="470" width="190" height="26" rx="4" fill="#0b0e13" stroke="#1d232d" />
      <ellipse cx="590" cy="520" rx="22" ry="14" fill="#0b0e13" />
      <g><rect x="690" y="500" width="62" height="60" rx="6" fill="#0a0c10" /><rect x="690" y="500" width="62" height="14" rx="6" fill="#E61923" /></g>
    </svg>
  )
}

function Emblem() {
  return (
    <svg className="emblem" viewBox="0 0 320 300" role="img" aria-label="Cero+ desarrollo web">
      <defs><linearGradient id="er" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff2a35" /><stop offset="1" stopColor="#7a0f16" /></linearGradient></defs>
      <circle cx="160" cy="130" r="92" fill="none" stroke="url(#er)" strokeWidth="26" />
      <path d="M262 28v84M220 70h84" stroke="#07111F" strokeWidth="26" strokeLinecap="round" />
      <path d="M262 28v84M220 70h84" stroke="#E61923" strokeWidth="14" strokeLinecap="round" />
      <path d="M30 228 Q160 252 290 228 L284 272 Q160 296 36 272 Z" fill="#07111F" stroke="#9AA6B8" strokeWidth="2" />
      <text x="160" y="266" textAnchor="middle" fontFamily="Barlow Condensed,Impact,sans-serif" fontWeight="800" fontSize="24" fill="#fff" letterSpacing="2">CERO+ · DESARROLLO WEB</text>
    </svg>
  )
}

export default function Home() {
  const [photo, setPhoto] = useState(false)
  useEffect(() => {
    const i = new Image()
    i.onload = () => setPhoto(true)
    i.src = '/media/hero.jpg'
  }, [])
  return (
    <>
      <section className="hero hero2" id="inicio">
        <div className="hero-bg" style={{ backgroundImage: 'url(/media/hero.jpg)' }} aria-hidden="true">
          {!photo && <HeroScene />}
        </div>
        <div className="wrap hero-in">
          <div className="tag">Diseño y desarrollo web</div>
          <h1>Páginas web profesionales para <span className="red">que tu negocio se vea, se entienda y se venda mejor.</span></h1>
          <div className="promise sm"><i>◆</i> Primero ves tu página. <span className="red">Si te gusta, hacemos trato.</span></div>
          <p className="lead">Diseñamos y desarrollamos páginas para presentar tus servicios, generar confianza y facilitar que tus clientes te contacten, coticen, reserven o compren.</p>
          <div className="row">
            <A className="btn b1" href="#contacto">Quiero cotizar mi página</A>
            <a className="btn b2" href={c.wa()} {...ext}>Hablar por WhatsApp</a>
          </div>
          <p className="note">Páginas desde $3,990 MXN + IVA.</p>
          <div className="since">Por <b>Cero<span className="red">+</span></b><small>Tu negocio, desde cero hasta arriba.</small></div>
        </div>
      </section>

      <div className="band tick" aria-hidden="true"><div>{[...c.ticker, ...c.ticker].map((m, i) => <span key={i}>{m}</span>)}</div></div>

      <section className="light resp"><div className="wrap split">
        <div className="badge-wrap"><Emblem /></div>
        <div>
          <div className="tag">Respaldo real</div>
          <h2>Desarrollo web respaldado por Cero+.</h2>
          <p className="lead">Somos un negocio establecido, no una agencia improvisada. Cuéntanos qué necesitas y te acompañamos hasta publicar.</p>
          <div className="statrow">
            {c.stats.map(([n, l]) => <div key={n} className="stat" style={{ color: '#fff' }}><div className="num">{n}</div><small>{l}</small></div>)}
          </div>
          <div className="row"><A className="btn b1" href="#contacto">Solicitar mi propuesta</A></div>
        </div>
      </div></section>

      <section className="light prob"><div className="wrap split">
        <div>
          <div className="tag">El problema</div>
          <h2>Si no explicas qué haces, qué vendes y cómo contactarte, <span className="red">pierdes oportunidades.</span></h2>
          <p className="lead">Depender solo de Facebook, Instagram o WhatsApp deja tu información dispersa y sin un lugar propio para presentar tu negocio.</p>
          <p className="lead">Sin una página clara, muchos clientes te preguntan lo mismo una y otra vez, y se complica cotizar, reservar o vender.</p>
        </div>
        <div className="stack">
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
          <div className="grid g5" style={{ textAlign: 'left' }}>
            {c.plans.map((p) => (
              <div key={p.name} className={`card${p.hot ? ' hot' : ''}`}>
                <span className="badge">{p.tag}</span>
                <h3>{p.name}</h3>
                <small className="from">Desde</small>
                <div className="price"><sup>$</sup><b>{p.price}</b> <small>MXN</small></div>
                <p>{p.text}</p>
                <small style={{ color: 'var(--mut)' }}>{p.time}</small>
                <A className={`btn ${p.hot ? 'b1' : 'b2'}`} href="#contacto">{p.cta}</A>
              </div>
            ))}
          </div>
          <p className="note" style={{ maxWidth: 640, marginInline: 'auto' }}>
            Los precios están en pesos mexicanos, más IVA, y pueden cambiar sin previo aviso. El precio final depende del alcance y las funciones requeridas. Dominio y hosting se cotizan por separado.
          </p>
          <div className="row" style={{ justifyContent: 'center' }}><A className="btn b2" href="#contacto">No sé cuál necesito</A></div>
        </div>
      </section>

      <section className="light" id="proyectos"><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>Ejemplos reales</div>
        <h2>Así podría verse la página de tu negocio.</h2>
        <p className="lead" style={{ marginInline: 'auto' }}>Estos son sitios reales diseñados por Cero+. Tu página se adapta a tu giro, colores y estilo de negocio.</p>
        <div className="grid g3" style={{ textAlign: 'left' }}>
          {c.examples.map((e) => (
            <div key={e.t} className="demo">
              <div className="shot" style={{ backgroundImage: `linear-gradient(180deg,transparent 35%,#07111Fcc),url(${e.img}),${e.bg}` }}>
                <span className="chip">{e.k}</span><h3>{e.t}</h3>
              </div>
              <p>{e.d}{e.url && <a className="ext" href={e.url} {...ext} aria-label={`Ver ${e.t}`}>↗</a>}</p>
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
        <div className="row"><A className="btn b1" href="#contacto">Solicitar mi propuesta</A></div>
      </div></section>

      <section className="light"><div className="wrap">
        <div style={{ textAlign: 'center' }}>
          <div className="tag" style={{ justifyContent: 'center' }}>Cómo trabajamos</div>
          <h2>Así convertimos tu idea en una página profesional.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>Los tiempos dependen del tipo de proyecto y comienzan a contar cuando nos entregas la información requerida. Una landing page sencilla se entrega en aproximadamente 7 días hábiles.</p>
        </div>
        <div className="grid g4">
          {c.process.map(([t, d], i) => <div key={t} className="step"><div className="num">{num(i)}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="grid g2" style={{ marginTop: 44 }}>
          <div className="fc">
            <div className="tag">Sí incluye</div>
            <h2>Qué incluye un proyecto web</h2>
            <ul className="ticks">{c.includes.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="note">Dominio y hosting se cotizan por separado salvo que la propuesta indique lo contrario. Funcionalidades adicionales pueden modificar la cotización. Qué tan “administrable” es la página depende del producto contratado.</p>
          </div>
          <div className="dk">
            <div className="tag">No incluye</div>
            <h2>Una landing no es un sistema web</h2>
            <p style={{ marginTop: 10 }}>Si necesitas funciones especiales, se cotiza como proyecto personalizado.</p>
            <ul className="xl two">{c.excludes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
        <div className="split adv">
          <div>
            <div className="tag">¿Necesitas algo más avanzado?</div>
            <h2>Además de páginas web, también desarrollamos <span className="red">sistemas a la medida.</span></h2>
            <p className="lead">Sistemas web, portales de clientes, paneles administrativos, integraciones y automatizaciones. Requiere análisis y cotización personalizada.</p>
          </div>
          <div className="grid g2">
            {c.systems.map((s, i) => <div key={s} className="pb"><div className="num">{num(i)}</div><h3>{s}</h3></div>)}
          </div>
        </div>
      </div></section>

      <section id="contacto" className="light"><div className="wrap split contact">
        <div className="dk big">
          <div className="tag">Solicita tu propuesta</div>
          <h2>Cuéntanos de tu negocio y te orientamos.</h2>
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
      </div></section>

      <section className="light diag" id="faq"><div className="wrap">
        <div style={{ textAlign: 'center' }}>
          <div className="tag" style={{ justifyContent: 'center' }}>Preguntas frecuentes</div>
          <h2>Dudas comunes, respuestas claras.</h2>
        </div>
        <div className="faqbox">
          {c.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </div></section>
    </>
  )
}
