import { A } from '../router'
import { EMAIL, LEGAL_NAME, WHATSAPP_PRETTY, wa } from '../content'

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

export default function Footer() {
  return (
    <footer>
      <div className="wrap ft">
        <div>
          <img src="/logo.png" alt="Cero+" />
          <b style={{ color: '#fff' }}>{LEGAL_NAME}</b><br />Páginas web profesionales para negocios.<br /><br />
          {EMAIL}<br /><a className="wagreen" href={wa()} target="_blank" rel="noopener">WhatsApp: {WHATSAPP_PRETTY}</a>
        </div>
        <div><h4>Navegación</h4>
          <A href="/#precios">Páginas web</A><A href="/#proyectos">Proyectos</A><A href="/#proceso">Cómo funciona</A>
          <A href="/#faq">Preguntas frecuentes</A><A href="/#contacto">Contacto</A></div>
        <div><h4>Servicios</h4>
          <A href="/#precios">Landing page</A><A href="/#precios">Sitio web empresarial</A>
          <A href="/#precios">Catálogo / citas / tienda en línea</A><A href="/#precios">Desarrollo a la medida</A>
          <A href="/#faq">Mantenimiento web</A><A href="/otros-servicios">Otros servicios creativos</A></div>
        <div><h4>Legal</h4>
          <A href="/aviso-de-privacidad">Aviso de privacidad</A><A href="/terminos-y-condiciones">Términos y condiciones</A>
          <p className="note">Precios en pesos mexicanos, sujetos a cambio sin previo aviso. No se garantizan ventas ni posicionamientos específicos.</p></div>
        <div className="qr"><h4>Asistente virtual</h4>
          <img src="/qr-asistente.png" alt="Código QR para chatear con el asistente virtual de Cero+" width={190} loading="lazy" />
          <p className="note">Escanea el código y chatea con nuestro asistente.</p></div>
      </div>
      <div className="wrap" style={{ marginTop: 24 }}>© {new Date().getFullYear()} {LEGAL_NAME}. Todos los derechos reservados.</div>
    </footer>
  )
}
