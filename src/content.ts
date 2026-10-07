export const WHATSAPP = import.meta.env.VITE_WHATSAPP || '522219663226'
export const WHATSAPP_PRETTY = '+52 221 966 3226'
export const EMAIL = import.meta.env.VITE_EMAIL || 'ventas@tudominio.com'
export const LEGAL_NAME = import.meta.env.VITE_LEGAL_NAME || 'Cero+'
export const wa = (text = 'Hola, quiero cotizar una página web con Cero+') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export const nav = [
  ['Inicio', '/#inicio'], ['Precios', '/#precios'], ['Proyectos', '/#proyectos'],
  ['Cómo funciona', '/#proceso'], ['Preguntas frecuentes', '/#faq'],
] as const

export const marquee = [
  'Catálogos, citas y reservaciones', 'Tiendas en línea', 'Landing pages',
  'Sitios empresariales', 'Sistemas a la medida', 'Menús digitales',
]

export const ticker = [
  'Landing pages profesionales', 'Sitios web empresariales', 'Catálogos, citas y reservaciones', 'Tiendas en línea',
  'Desarrollo web a la medida', 'Contacto directo por WhatsApp', 'Optimización móvil', 'Formularios de contacto',
  'Mantenimiento web', 'Cotización personalizada', 'Diseño de páginas web',
]

export const stats = [
  ['100%', 'Adaptada a celular'], ['24 h', 'Respuesta a tu solicitud'], ['7 días', 'Para una landing page'],
]

export const problems = [
  ['Información dispersa', 'Servicios, precios y contacto repartidos entre redes sociales.'],
  ['Imagen menos profesional', 'Sin una página propia, cuesta más transmitir seriedad frente a otros negocios de tu giro.'],
  ['Dificultad para cotizar o vender', 'Sin formularios ni catálogo, cada cotización, cita o pedido depende de un mensaje directo.'],
  ['Clientes que preguntan lo mismo', 'Respondes una y otra vez lo que una página explicaría.'],
]

export const icons = ['PRO', 'INFO', 'WA', 'RESP', 'SEO', 'FORM', 'PLUS', 'ESC']
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

export const plans = [
  { tag: 'Para empezar', name: 'Landing page', price: '3,990', time: 'Aprox. 7 días hábiles', cta: 'Cotizar landing page',
    text: 'Para presentar un negocio, servicio, producto, campaña o promoción en una sola página.' },
  { tag: 'Carta digital con QR', name: 'Menú digital', price: '4,990', time: 'Aprox. 7 a 10 días hábiles', cta: 'Cotizar menú digital',
    text: 'Para restaurantes, cafeterías, bares y negocios de alimentos que necesitan mostrar su menú desde el celular con enlace o código QR.' },
  { hot: true, tag: 'Más completo', name: 'Sitio web empresarial', price: '6,490', time: 'Tiempo estimado según alcance', cta: 'Cotizar sitio empresarial',
    text: 'Para empresas que necesitan presentar con mayor amplitud servicios, historia, experiencia, instalaciones, galería y contacto.' },
  { tag: 'Citas y pedidos', name: 'Catálogos, citas y reservaciones', price: '6,990', time: 'Tiempo estimado según alcance', cta: 'Ver qué opción necesito',
    text: 'Para negocios que necesitan mostrar productos o servicios, recibir solicitudes, gestionar citas o facilitar pedidos.' },
  { tag: 'E-commerce', name: 'Tienda en línea', price: '14,990', time: 'Tiempo estimado según alcance', cta: 'Cotizar tienda en línea',
    text: 'Para negocios que necesitan catálogo, carrito, checkout, pagos en línea y administración de pedidos.' },
] as { hot?: boolean; tag: string; name: string; price: string; time: string; cta: string; text: string }[]

/** Para usar tus propias fotos: guarda el archivo en /public/media y escribe su ruta en `img`. */
export const examples = [
  { t: 'Gimnasios', k: 'Landing conversión', d: 'Landing premium con enfoque de conversión y WhatsApp directo.', img: '/media/proyecto-gimnasios.jpg', url: '', bg: 'linear-gradient(135deg,#1a0508,#7a0f16 60%,#07111F)' },
  { t: 'Salones de belleza y spas', k: 'Landing page', d: 'Sitio corporativo claro y moderno para presentar servicios y facilitar el contacto.', img: '/media/proyecto-salones.jpg', url: '', bg: 'linear-gradient(135deg,#3a2a1a,#b98a5a 70%,#e9d3b4)' },
  { t: 'Venta de servicios', k: 'Landing captación', d: 'Landing enfocada en membresías, promociones y captación de prospectos.', img: '/media/proyecto-servicios.jpg', url: '', bg: 'linear-gradient(135deg,#0b1626,#26466e 70%,#6f8db3)' },
  { t: 'Catering y eventos', k: 'Landing + panel admin', d: 'Landing con panel administrativo a la medida para cotizaciones y control de eventos.', img: '/media/proyecto-catering.jpg', url: '', bg: 'linear-gradient(135deg,#2a0d05,#b5410f 60%,#f0a04b)' },
  { t: 'Menú digital', k: 'Landing conversión', d: 'Menú con enlace o código QR para restaurantes y cafeterías.', img: '/media/proyecto-menu.jpg', url: '', bg: 'linear-gradient(135deg,#16322e,#3f7d6e 60%,#d9e8d2)' },
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
  'Sistemas web a la medida', 'Portales de clientes', 'Paneles administrativos / dashboards',
  'Usuarios y roles', 'Integraciones / APIs', 'Automatizaciones',
]

export const servicios = [
  'Landing page', 'Menú digital', 'Sitio web empresarial',
  'Catálogo / citas / reservaciones', 'Tienda en línea', 'Sistema a la medida',
  'Imágenes o video con IA', 'No estoy seguro',
]
export const presupuestos = ['No estoy seguro', 'Menos de $5,000', '$5,000 a $15,000', 'Más de $15,000']

export const faq = [
  ['¿Cuánto cuesta una página web?', 'Depende del tipo de página. Manejamos precios de partida: landing page desde $3,990 MXN + IVA, sitio empresarial desde $6,490, catálogo/citas/reservaciones desde $6,990 y tienda en línea desde $14,990. El precio final depende del alcance y las funciones requeridas.'],
  ['¿Qué tipo de página necesito?', 'Te orientamos según tu negocio: landing, sitio empresarial, catálogo, reservaciones o tienda en línea.'],
  ['¿Puedo ver una propuesta antes de contratar?', 'Sí, en landing pages y sitios sencillos preparamos una propuesta visual inicial.'],
  ['¿Qué significa que una página sea administrable?', 'Que puedes cambiar ciertos textos, precios o imágenes sin tocar código. Depende del producto contratado.'],
  ['¿Dominio y hosting están incluidos?', 'No, salvo que la propuesta indique lo contrario. Se cotizan por separado.'],
  ['¿Cuánto tarda el desarrollo?', 'Una landing sencilla se entrega en aproximadamente 7 días hábiles; otros proyectos dependen del alcance.'],
  ['¿Puedo solicitar cambios?', 'Sí. Cada proyecto incluye una ronda de ajustes inicial. Cambios adicionales o mantenimiento continuo pueden tener costo extra según el tabulador de mantenimiento web.'],
  ['¿Pueden hacer una tienda en línea?', 'Sí, con catálogo, carrito, pagos en línea y administración de pedidos.'],
  ['¿Pueden hacer citas o reservaciones?', 'Sí, con formularios o un sistema de agenda según lo que necesite tu negocio.'],
  ['¿Desarrollan sistemas a la medida?', 'Sí. Además de páginas web, desarrollamos sistemas web, portales de clientes, paneles administrativos, integraciones y automatizaciones. Requiere análisis y cotización personalizada.'],
  ['¿La página aparecerá en Google?', 'Incluimos SEO técnico básico. El posicionamiento depende de varios factores y no se garantiza una posición.'],
  ['¿Me garantizan ventas?', 'No. Tu página presenta tu negocio de forma profesional y facilita el contacto; las ventas dependen de muchos factores.'],
  ['¿Puedo contratar solo imágenes o videos?', 'Sí. Consulta la sección de otros servicios creativos con precios por imagen, pack y video.'],
  ['¿Trabajan con negocios de cualquier giro?', 'Sí, siempre que el proyecto sea viable y el negocio pueda proporcionar la información necesaria para construir la página.'],
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

/* ---------- Otros servicios creativos ---------- */
export const separados = [
  { t: 'Imágenes publicitarias', d: 'Para promociones, mensualidades, inscripciones, retos y campañas.', rows: [['Imagen individual', '$220'], ['Pack de 5', '$990'], ['Pack de 10', '$1,890']], days: '5 días hábiles', cta: 'Quiero imágenes', msg: 'Hola, quiero cotizar imágenes publicitarias.' },
  { t: 'Video publicitario con IA', d: 'Video corto para reels, historias, estados de WhatsApp o anuncios.', rows: [['1 video', '$1,249']], days: '3 días hábiles por video', cta: 'Quiero un video', msg: 'Hola, quiero cotizar un video publicitario con IA.' },
  { t: 'Imágenes tipo fotografía con IA', d: 'Visuales realistas para representar servicios, productos o escenas.', rows: [['Imagen individual', '$150'], ['Pack de 5', '$690'], ['Pack de 10', '$1,290']], days: '4 días hábiles', note: 'No sustituye una sesión fotográfica real cuando se requiere exactitud total.', cta: 'Quiero imágenes IA', msg: 'Hola, quiero cotizar imágenes tipo fotografía con IA.' },
]
export const paquetes = [
  { tag: 'Para empezar', name: 'Arranque', price: '1,490', d: 'Para empezar a publicar contenido más profesional sin invertir demasiado.',
    items: ['10 imágenes publicitarias', 'Diseños para Facebook, Instagram y WhatsApp', 'Copy persuasivo incluido', 'Una ronda de ajustes'], days: '5 días hábiles', cta: 'Quiero Arranque' },
  { tag: 'Más recomendado', hot: true, name: 'Impulso', price: '2,990', d: 'Contenido visual completo para promocionar servicios y campañas durante el mes.',
    items: ['10 imágenes publicitarias', '2 videos publicitarios con IA', '10 imágenes tipo fotografía con IA', 'Copy persuasivo incluido', 'Una ronda de ajustes'], days: '7 días hábiles', cta: 'Quiero Impulso' },
  { tag: 'Web + contenido', dark: true, name: 'Despegue', price: '5,990', d: 'Presencia digital completa: landing page más material visual para promocionarte mejor.',
    items: ['Landing page profesional', 'Dominio .com por 1er año*', 'WhatsApp directo', '10 imágenes publicitarias', '2 videos publicitarios con IA', '10 imágenes tipo fotografía con IA', 'Optimización móvil y escritorio'], days: '10 días hábiles',
    note: '*Sujeto a disponibilidad. Con dominio/hosting del cliente: $5,490 MXN.', cta: 'Quiero Despegue' },
] as { tag: string; hot?: boolean; dark?: boolean; name: string; price: string; d: string; items: string[]; days: string; note?: string; cta: string }[]

/** Videos: guarda el .mp4 en /public/media y escribe aquí la ruta. */
export const videos = [
  { label: 'Reel · YouTube Shorts', src: '/media/video-1.mp4', poster: '/media/video-1.jpg', bg: 'linear-gradient(160deg,#3a0a10,#07111F)' },
  { label: 'Reel · YouTube Shorts', src: '/media/video-2.mp4', poster: '/media/video-2.jpg', bg: 'linear-gradient(160deg,#26466e,#07111F)' },
]
