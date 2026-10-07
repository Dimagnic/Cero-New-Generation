import { A } from '../router'
import { EMAIL, LEGAL_NAME, WHATSAPP_PRETTY, wa } from '../content'

const UPDATED = '6 de octubre de 2026'
type Sec = [string, string[]]

const privacy: Sec[] = [
  ['Responsable del tratamiento', [`${LEGAL_NAME} (en adelante, “Cero+”) es responsable del tratamiento de los datos personales que usted proporcione a través de este sitio web, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás normatividad aplicable.`, `Contacto para temas de privacidad: ${EMAIL} · WhatsApp ${WHATSAPP_PRETTY}.`]],
  ['Datos personales que recabamos', ['A través del formulario de contacto y de WhatsApp podemos recabar: nombre completo, número de teléfono / WhatsApp, correo electrónico, ciudad, nombre y giro del negocio, así como la información que usted decida compartir en su mensaje. No recabamos datos personales sensibles.']],
  ['Finalidades del tratamiento', ['Utilizamos sus datos para: (i) responder su solicitud y elaborar cotizaciones o propuestas; (ii) dar seguimiento comercial por WhatsApp, correo o llamada; (iii) prestar el servicio contratado; y (iv) fines estadísticos y de mejora del sitio.']],
  ['Transferencias', ['Sus datos no se venden ni se ceden a terceros. Pueden ser tratados por proveedores tecnológicos que nos prestan servicios de alojamiento, base de datos y mensajería, bajo obligaciones de confidencialidad, o cuando lo exija una autoridad competente.']],
  ['Derechos ARCO y revocación del consentimiento', [`Usted tiene derecho a Acceder, Rectificar y Cancelar sus datos personales, así como a Oponerse a su tratamiento (derechos ARCO) y a revocar el consentimiento otorgado. Para ejercerlos, envíe una solicitud a ${EMAIL} indicando: (i) su nombre completo y medio de contacto, (ii) los datos respecto de los cuales ejerce sus derechos y (iii) una descripción clara de su solicitud.`]],
  ['Cookies y tecnologías de seguimiento', ['Este sitio puede utilizar cookies y tecnologías similares con fines de seguridad, medición y funcionamiento del asistente virtual. Puede deshabilitarlas desde la configuración de su navegador; el sitio seguirá funcionando, aunque algunas funciones podrían dejar de operar.']],
  ['Conservación y seguridad', ['Los datos enviados por los formularios se transmiten de forma cifrada y se almacenan en un sistema de gestión con acceso restringido, durante el tiempo necesario para las finalidades descritas y las obligaciones legales aplicables.']],
  ['Cambios al aviso', ['Cualquier modificación a este aviso se publicará en esta misma página, indicando la fecha de última actualización.']],
]

const terms: Sec[] = [
  ['Objeto', ['Estos términos regulan la contratación de servicios de diseño y desarrollo web, mantenimiento, imágenes y videos publicitarios ofrecidos por Cero+. Al solicitar una cotización o contratar un servicio, usted acepta estos términos.']],
  ['Cotizaciones y precios', ['Los precios publicados son precios de partida en pesos mexicanos, más IVA, y pueden cambiar sin previo aviso. El precio final se confirma por escrito tras revisar el alcance del proyecto. Dominio y hosting se cotizan por separado salvo que la propuesta indique lo contrario.']],
  ['Pagos y anticipos', ['Los servicios menores a $2,000 MXN se pagan al 100% antes de iniciar. En proyectos mayores se requiere un anticipo del 50% para comenzar, y el saldo se liquida antes de la publicación o entrega final.']],
  ['Tiempos de entrega', ['Los tiempos son estimados y comienzan a contar cuando el cliente entrega la información y materiales requeridos. Retrasos en la entrega de contenido, aprobaciones o pagos pueden extender los plazos.']],
  ['Ajustes y cambios', ['Cada proyecto incluye una ronda de ajustes inicial. Cambios adicionales o mantenimiento continuo pueden tener costo extra según el tabulador de mantenimiento vigente publicado en el sitio.', 'Los planes de mantenimiento cubren únicamente cambios de contenido; no incluyen dominio, hosting, correos empresariales ni soporte de servidores.']],
  ['Materiales e información del cliente', ['El cliente es responsable de la veracidad y titularidad de los textos, logotipos, imágenes, marcas y demás materiales que proporcione, y libera a Cero+ de cualquier reclamación de terceros derivada de su uso. Cero+ podrá declinar proyectos con contenidos ilícitos o contrarios a la moral y al orden público.']],
  ['Propiedad de los entregables', ['Una vez liquidado el costo total del servicio, el cliente adquiere el derecho de uso de los entregables finales (página publicada, imágenes y videos) para los fines de su negocio. Cero+ podrá incluir los trabajos realizados en su portafolio comercial, salvo solicitud expresa en contrario del cliente.']],
  ['Contenido generado con IA', ['Las imágenes tipo fotografía y los videos generados con inteligencia artificial son representaciones ilustrativas. No sustituyen una sesión fotográfica real cuando se requiere exactitud total de productos, instalaciones o personas.']],
  ['Alcance y limitaciones', ['Cero+ no garantiza ventas, posicionamiento en buscadores ni resultados comerciales específicos. La disponibilidad del sitio depende también de proveedores de terceros.']],
  ['Legislación aplicable', ['Para la interpretación y cumplimiento de estos términos, las partes se someten a las leyes aplicables de los Estados Unidos Mexicanos y a la jurisdicción de los tribunales competentes.']],
]

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const isP = kind === 'privacy'
  const secs = isP ? privacy : terms
  return (
    <section className="light legal"><div className="wrap">
      <div className="tag">Legal</div>
      <h1 className="h1d" style={{ fontSize: 'clamp(2.2rem,7vw,3.6rem)' }}>{isP ? 'Aviso de privacidad' : 'Términos y condiciones'}</h1>
      <p className="note">Última actualización: {UPDATED}</p>
      {secs.map(([h, ps], i) => (
        <div key={h}>
          <h2>{i + 1}. {h}</h2>
          {ps.map((p) => <p key={p}>{p}</p>)}
        </div>
      ))}
      <div className="row"><A className="btn b1" href="/">Volver al inicio</A>
        <a className="btn dark" href={wa()} target="_blank" rel="noopener">Contactar por WhatsApp</a></div>
    </div></section>
  )
}
