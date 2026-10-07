import { A } from '../router'
import { EMAIL, LEGAL_NAME, SOCIAL, WHATSAPP_PRETTY, wa } from '../content'

export function FinalCta() {
  return (
    <section className="final"><div className="wrap">
      <img src="/logo.png" alt="Cero+" />
      <h2>Dinos qué necesitas y te ayudamos a elegir tu página.</h2>
      <p>Solicita tu propuesta y descubre cómo podría lucir tu página antes de tomar una decisión.</p>
      <div className="row" style={{ justifyContent: 'center' }}>
        <A className="btn b1" href="/#contacto">Cotizar mi página web</A>
        <a className="btn b2" href={wa()} target="_blank" rel="noopener">Hablar por WhatsApp</a>
      </div>
    </div></section>
  )
}

const icon = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

function Social() {
  const items = [
    { name: 'Facebook', href: SOCIAL.facebook, svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
    { name: 'Instagram', href: SOCIAL.instagram, svg: <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></> },
    { name: 'YouTube', href: SOCIAL.youtube, svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><path d="M9.75 15.02 15.5 11.75 9.75 8.48z" /></> },
  ].filter((s) => s.href)
  if (!items.length) return null
  return (
    <div className="soc">
      {items.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
          <svg viewBox="0 0 24 24" {...icon}>{s.svg}</svg>
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap ft">
        <div className="ft-brand">
          <img src="/logo.png" alt="Cero+" />
          <strong>{LEGAL_NAME}</strong>
          <p>Páginas web profesionales para negocios.</p>
          <ul className="ft-contact">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a className="wagreen" href={wa()} target="_blank" rel="noopener">WhatsApp: {WHATSAPP_PRETTY}</a></li>
          </ul>
          <Social />
        </div>
        <div><h4>Navegación</h4>
          <A href="/#precios">Páginas web</A><A href="/#proyectos">Proyectos</A><A href="/#proceso">Cómo funciona</A>
          <A href="/#faq">Preguntas frecuentes</A><A href="/#contacto">Contacto</A></div>
        <div><h4>Servicios</h4>
          <A href="/#precios">Landing page</A><A href="/#precios">Sitio web empresarial</A>
          <A href="/#precios">Catálogo / citas / tienda en línea</A><A href="/#precios">Desarrollo a la medida</A>
          <A href="/#faq">Mantenimiento web</A><A href="/otros-servicios">Otros servicios creativos →</A></div>
        <div><h4>Legal</h4>
          <A href="/aviso-de-privacidad">Aviso de privacidad</A><A href="/terminos-y-condiciones">Términos y condiciones</A>
          <p className="note">Precios en pesos mexicanos, sujetos a cambio sin previo aviso. No se garantizan ventas ni posicionamientos específicos.</p></div>
        <div className="qr"><h4>Asistente virtual</h4>
          <img src="/qr-asistente.png" alt="Código QR para chatear con el asistente virtual de Cero+" width={190} loading="lazy" />
          <p className="note">Escanea el código y chatea con nuestro asistente.</p></div>
      </div>
      <div className="wrap ft-bottom">
        <span>© {new Date().getFullYear()} {LEGAL_NAME}. Todos los derechos reservados.</span>
        <span className="ft-by">Diseñado por {LEGAL_NAME}</span>
      </div>
    </footer>
  )
}
