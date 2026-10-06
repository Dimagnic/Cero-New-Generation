export const WHATSAPP = import.meta.env.VITE_WHATSAPP || '520000000000'
export const EMAIL = import.meta.env.VITE_EMAIL || 'ventas@tudominio.com'
export const wa = (text = 'Hola, quiero cotizar una página web con Cero+') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export const nav = [
  ['Inicio', '#inicio'], ['Precios', '#precios'], ['Proyectos', '#proyectos'],
  ['Cómo funciona', '#proceso'], ['Preguntas frecuentes', '#faq'], ['Contacto', '#contacto'],
] as const

export const marquee = [
  'Catálogos, citas y reservaciones', 'Tiendas en línea', 'Landing pages',
  'Sitios empresariales', 'Sistemas a la medida', 'Menús digitales',
]

export const stats = [
  ['100%', 'Adaptada a celular'], ['24 h', 'Respuesta a tu solicitud'], ['7 días', 'Para una landing page'],
]

export const problems = [
  ['Información dispersa', 'Servicios, precios y contacto repartidos entre redes sociales.'],
  ['Imagen menos profesional', 'Sin página propia cuesta más transmitir seriedad.'],
  ['Dificultad para cotizar o vender', 'Sin formularios ni catálogo, cada cotización es manual.'],
  ['Clientes que preguntan lo mismo', 'Respondes una y otra vez lo que una página explicaría.'],
]

export const icons = ['PRO','INFO','WA','RESP','SEO','FORM','PLUS','ESC']
export const solutions = [
  ['Presentación profesional', 'Para que tu negocio genere confianza desde el primer vistazo.'],
  ['Información clara', 'Servicios, precios de referencia y datos de contacto sin vueltas.'],
  ['Contacto directo', 'Botones de WhatsApp y formulario para captar oportunidades.'],
  ['Diseño responsive', 'Se ve bien en celular, tablet y computadora.'],
  ['SEO técnico básico', 'Estructura, metadatos y velocidad para que te encuentren.'],
  ['Formularios', 'Para recibir solicitudes de cotización directamente en tu correo.'],
  ['Funciones adicionales', 'Catálogo, agenda, pagos u otras funciones según lo necesite tu negocio.'],
  ['Escalabilidad', 'Tu página puede crecer conforme crecen tus necesidades.'],
]

export const plans: { hot?: boolean; tag: string; name: string; time: string; cta: string; price: string; text: string }[] = [
  { tag: 'Para empezar', name: 'Landing page', time: 'Aprox. 7 días hábiles', cta: 'Cotizar landing page', price: 'X,XXX',
    text: 'Para presentar un negocio, servicio, producto, campaña o promoción en una sola página.' },
  { tag: 'Carta con QR', name: 'Menú digital', time: 'Aprox. 7 a 10 días hábiles', cta: 'Cotizar menú digital', price: 'X,XXX',
    text: 'Para restaurantes, cafeterías y bares que muestran su menú desde el celular con enlace o QR.' },
  { hot: true, tag: 'Más completo', name: 'Sitio web empresarial', time: 'Tiempo estimado según alcance', cta: 'Cotizar sitio empresarial', price: 'X,XXX',
    text: 'Para empresas que presentan servicios, historia, experiencia, instalaciones, galería y contacto.' },
  { tag: 'Interactivo', name: 'Catálogos, citas y reservaciones', time: 'Tiempo estimado según alcance', cta: 'Ver qué opción necesito', price: 'X,XXX',
    text: 'Para mostrar productos o servicios, recibir solicitudes y gestionar citas o pedidos.' },
  { tag: 'E-commerce', name: 'Tienda en línea', time: 'Tiempo estimado según alcance', cta: 'Cotizar tienda en línea', price: 'X,XXX',
    text: 'Catálogo, carrito, checkout, pagos en línea y administración de pedidos.' },
  { tag: 'A medida', name: 'Proyecto especial', time: '', cta: 'Consultar proyecto especial', price: '',
    text: 'Sistemas web, portales de clientes, dashboards, áreas privadas e integraciones. Requiere análisis y cotización personalizada.' },
]

export const examples = [
  ['Gimnasios', 'Landing conversión', 'Landing premium con enfoque en conversión y WhatsApp directo.', 'linear-gradient(135deg,#1a0508,#7a0f16 60%,#07111F)'],
  ['Salones de belleza y spas', 'Landing page', 'Sitio claro y moderno para presentar servicios y facilitar el contacto.', 'linear-gradient(135deg,#3a2a1a,#b98a5a 70%,#e9d3b4)'],
  ['Venta de servicios', 'Landing captación', 'Landing enfocada en membresías, promociones y captación de prospectos.', 'linear-gradient(135deg,#0b1626,#26466e 70%,#6f8db3)'],
  ['Catering y eventos', 'Landing + panel admin', 'Landing con panel administrativo a la medida para cotizaciones y control de eventos.', 'linear-gradient(135deg,#2a0d05,#b5410f 60%,#f0a04b)'],
  ['Menú digital', 'Landing conversión', 'Menú con enlace o código QR para restaurantes y cafeterías.', 'linear-gradient(135deg,#16322e,#3f7d6e 70%,#d9e8d2)'],
]

export const preview = [
  ['Nos cuentas de tu negocio', 'Qué vendes, a quién y qué quieres lograr.'],
  ['Revisamos qué necesitas', 'Vemos si tu proyecto es elegible para propuesta visual.'],
  ['Preparamos tu propuesta', 'Una idea visual inicial para que la evalúes.'],
  ['Si te convence, avanzamos', 'Sin compromiso si el enfoque no es lo que buscabas.'],
]

export const process = [
  ['Confirmamos y arrancamos', 'Con tu aprobación iniciamos el desarrollo.'],
  ['Diseñamos y desarrollamos', 'Construimos tu página con la información que compartiste.'],
  ['Ajustamos contigo', 'Aplicamos la ronda de ajustes incluida antes de publicar.'],
  ['Publicamos', 'Tu página queda en línea y lista para recibir visitas.'],
]

export const includes = [
  'Diseño adaptado a tu identidad', 'Presentación principal y de servicios',
  'WhatsApp directo y formulario de contacto', 'Información de contacto y FAQ',
  'SEO técnico básico', 'Optimización móvil, tablet y escritorio',
  'Ronda de ajustes inicial', 'Capacitación cuando corresponda',
]
export const excludes = [
  'Base de datos', 'Login de usuarios', 'Panel administrativo', 'Carrito de compras',
  'Pagos en línea', 'Reservaciones automáticas', 'Integraciones avanzadas', 'Desarrollo a la medida',
]
export const systems = [
  'Sistemas web', 'Portales de clientes', 'Paneles administrativos / dashboards',
  'Usuarios y roles', 'Integraciones / APIs', 'Automatizaciones',
]

export const servicios = [
  'Landing page', 'Menú digital', 'Sitio web empresarial',
  'Catálogo / citas / reservaciones', 'Tienda en línea', 'Sistema a la medida', 'No estoy seguro',
]
export const presupuestos = ['No estoy seguro', 'Menos de $5,000', '$5,000 a $15,000', 'Más de $15,000']

export const faq = [
  ['¿Cuánto cuesta una página web?', 'Depende del tipo de página y del alcance. Te damos un precio de partida y el final se confirma al revisar tu proyecto.'],
  ['¿Qué tipo de página necesito?', 'Te orientamos según tu negocio: landing, sitio empresarial, catálogo, reservaciones o tienda en línea.'],
  ['¿Puedo ver una propuesta antes de contratar?', 'Sí, en landing pages y sitios sencillos preparamos una propuesta visual inicial.'],
  ['¿Qué significa que una página sea administrable?', 'Que puedes cambiar ciertos textos, precios o imágenes sin tocar código. Depende del producto contratado.'],
  ['¿Dominio y hosting están incluidos?', 'No, salvo que la propuesta indique lo contrario. Se cotizan por separado.'],
  ['¿Cuánto tarda el desarrollo?', 'Una landing sencilla se entrega en aproximadamente 7 días hábiles; otros proyectos dependen del alcance.'],
  ['¿Puedo solicitar cambios?', 'Sí. Incluimos una ronda de ajustes antes de publicar y ofrecemos planes de mantenimiento.'],
  ['¿Pueden hacer una tienda en línea?', 'Sí, con catálogo, carrito, pagos en línea y administración de pedidos.'],
  ['¿Pueden hacer citas o reservaciones?', 'Sí, con formularios o un sistema de agenda según lo que necesite tu negocio.'],
  ['¿Desarrollan sistemas a la medida?', 'Sí: paneles, usuarios y roles, integraciones y automatizaciones, con cotización personalizada.'],
  ['¿La página aparecerá en Google?', 'Incluimos SEO técnico básico. El posicionamiento depende de varios factores y no se garantiza una posición.'],
  ['¿Me garantizan ventas?', 'No. Tu página presenta tu negocio de forma profesional y facilita el contacto; las ventas dependen de muchos factores.'],
  ['¿Trabajan con negocios de cualquier giro?', 'Sí. Adaptamos el diseño al giro, colores y estilo de cada negocio.'],
]

export const changes = [
  ['Cambio pequeño', 'XXX', 'Textos, horarios, teléfonos y precios simples.'],
  ['Cambio mediano', 'XXX', 'Secciones, imágenes o promociones.'],
  ['Cambio grande', 'XXX', 'Nuevas secciones o ajustes de mayor alcance.'],
]
export const planComercial = [
  'Cambios pequeños o medianos cada mes', 'Cambios de promociones e imágenes',
  'Actualización de precios y servicios', 'Revisión básica mensual',
]
