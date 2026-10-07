import { useState } from 'react'
import { A } from '../router'
import * as c from '../content'

const ext = { target: '_blank', rel: 'noopener' } as const

function VideoCard({ v }: { v: (typeof c.videos)[number] }) {
  const [play, setPlay] = useState(false)
  return (
    <div className="vcard">
      {play ? (
        <video src={v.src} controls autoPlay playsInline />
      ) : (
        <button type="button" className="vposter" onClick={() => setPlay(true)}
          style={{ backgroundImage: `url(${v.poster}),${v.bg}` }} aria-label="Reproducir video">
          <span className="play">▶</span>
        </button>
      )}
      <small>{v.label}</small><b>Reproducir video</b>
    </div>
  )
}

export default function Otros() {
  return (
    <>
      <section className="light diag"><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>Otros servicios creativos</div>
        <h1 className="h1d">Imágenes y video publicitario con IA para tu negocio.</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>Contenido visual profesional para redes sociales, WhatsApp y anuncios, con o sin página web.</p>
      </div></section>

      <section className="light"><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>Ejemplos de imágenes</div>
        <h2>Imágenes publicitarias para tu negocio.</h2>
        <p className="lead" style={{ marginInline: 'auto' }}>Estas imágenes demo muestran diferentes estilos de publicidad visual que podemos desarrollar para promociones, campañas, publicaciones, historias o anuncios digitales.</p>
        <div className="gallery">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="gimg" style={{ backgroundImage: `url(/media/imagen-${n}.jpg),linear-gradient(135deg,#1a0508,#7a0f16 60%,#07111F)` }} />
          ))}
        </div>
      </div></section>

      <section style={{ background: 'linear-gradient(180deg,#07111F,#1a0a12)' }}><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>Contenido creativo</div>
        <h2>Videos promocionales con IA para tu negocio.</h2>
        <p className="lead" style={{ marginInline: 'auto' }}>Creamos videos cortos verticales para historias, reels, estados de WhatsApp o anuncios digitales.</p>
        <div className="vrow">{c.videos.map((v) => <VideoCard key={v.src} v={v} />)}</div>
      </div></section>

      <section className="light diag"><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>Servicios individuales</div>
        <h2>También puedes contratar servicios por separado.</h2>
        <div className="grid g3" style={{ textAlign: 'left' }}>
          {c.separados.map((s) => (
            <div key={s.t} className="sv">
              <h3>{s.t}</h3><p>{s.d}</p>
              <ul className="rows">{s.rows.map(([a, b]) => <li key={a}><span>{a}</span><b>{b}</b></li>)}</ul>
              <span className="days">{s.days}</span>
              {s.note && <p className="note">{s.note}</p>}
              <a className="btn dark" href={c.wa(s.msg)} {...ext}>{s.cta}</a>
            </div>
          ))}
        </div>
      </div></section>

      <section className="light"><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>Paquetes de contenido</div>
        <h2>Paquetes de imágenes y video.</h2>
        <div className="grid g3" style={{ textAlign: 'left' }}>
          {c.paquetes.map((p) => (
            <div key={p.name} className={`pk${p.hot ? ' hot' : ''}${p.dark ? ' darkc' : ''}`}>
              <span className="badge">{p.tag}</span>
              <h3>{p.name}</h3>
              <div className="price"><sup>$</sup><b>{p.price}</b> <small>MXN</small></div>
              <p>{p.d}</p>
              <ul className="ticks">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <small className="entrega">Entrega: {p.days}</small>
              {p.note && <small className="entrega">{p.note}</small>}
              <a className={`btn ${p.hot ? 'b1' : p.dark ? 'b2' : 'ghd'}`} href={c.wa(`Hola, quiero el paquete ${p.name}.`)} {...ext}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="note" style={{ maxWidth: 640, marginInline: 'auto' }}>Todos los precios están en pesos mexicanos y pueden cambiar sin previo aviso. Servicios menores a $2,000 MXN se pagan al 100%. Paquetes mayores inician con 50% de anticipo.</p>
        <div className="row" style={{ justifyContent: 'center' }}><A className="btn ghd" href="/">← Volver al inicio</A></div>
      </div></section>
    </>
  )
}
