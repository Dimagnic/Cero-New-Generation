/** Ilustración de "Respaldo real": ventana de navegador + celular + sello Cero+. Todo en SVG, escala sin cortarse. */
export default function Emblem() {
  return (
    <svg className="emblem" viewBox="0 0 480 420" role="img" aria-label="Cero+ desarrollo web: sitio web en computadora y celular">
      <defs>
        <linearGradient id="em-r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff2a35" /><stop offset="1" stopColor="#8a0b13" /></linearGradient>
        <linearGradient id="em-n" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#13213a" /><stop offset="1" stopColor="#07111F" /></linearGradient>
        <filter id="em-s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dy="16" stdDeviation="14" floodColor="#07111F" floodOpacity=".3" /></filter>
        <clipPath id="em-c"><rect x="30" y="50" width="340" height="250" rx="16" /></clipPath>
      </defs>

      <circle cx="240" cy="200" r="186" fill="#E61923" opacity=".07" />

      {/* Ventana de navegador */}
      <g filter="url(#em-s)">
        <rect x="30" y="50" width="340" height="250" rx="16" fill="url(#em-n)" stroke="#22314b" />
        <g clipPath="url(#em-c)">
          <rect x="30" y="50" width="340" height="34" fill="#0a1424" />
          <circle cx="50" cy="67" r="4.5" fill="#E61923" /><circle cx="66" cy="67" r="4.5" fill="#9AA6B8" /><circle cx="82" cy="67" r="4.5" fill="#3a4a63" />
          <rect x="106" y="58" width="190" height="18" rx="9" fill="#14233a" />
          <text x="201" y="71" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#9AA6B8">tunegocio.com</text>

          <rect x="52" y="106" width="150" height="12" rx="6" fill="#fff" />
          <rect x="52" y="126" width="110" height="12" rx="6" fill="#E61923" />
          <rect x="52" y="152" width="170" height="6" rx="3" fill="#2a3a54" />
          <rect x="52" y="164" width="140" height="6" rx="3" fill="#2a3a54" />
          <rect x="52" y="186" width="96" height="28" rx="14" fill="url(#em-r)" />
          <rect x="72" y="197" width="56" height="6" rx="3" fill="#fff" opacity=".9" />
          <rect x="158" y="186" width="70" height="28" rx="14" fill="none" stroke="#3a4a63" />

          {/* Sello Cero+ */}
          <circle cx="276" cy="152" r="30" fill="none" stroke="url(#em-r)" strokeWidth="14" />
          <path d="M314 112v28M300 126h28" stroke="#07111F" strokeWidth="14" strokeLinecap="round" />
          <path d="M314 112v28M300 126h28" stroke="#E61923" strokeWidth="8" strokeLinecap="round" />

          {[52, 144, 236].map((x) => (
            <g key={x}>
              <rect x={x} y="236" width="84" height="48" rx="10" fill="#0f1f35" stroke="#22314b" />
              <circle cx={x + 16} cy="252" r="5" fill="#E61923" />
              <rect x={x + 28} y="249" width="40" height="6" rx="3" fill="#fff" opacity=".85" />
              <rect x={x + 12} y="266" width="58" height="5" rx="2.5" fill="#2a3a54" />
            </g>
          ))}
        </g>
      </g>

      {/* Celular */}
      <g filter="url(#em-s)">
        <rect x="340" y="140" width="100" height="190" rx="20" fill="#0a1424" stroke="#2a3a54" strokeWidth="3" />
        <rect x="376" y="150" width="28" height="5" rx="2.5" fill="#2a3a54" />
        <rect x="352" y="168" width="76" height="60" rx="8" fill="url(#em-r)" />
        <rect x="362" y="182" width="40" height="7" rx="3.5" fill="#fff" />
        <rect x="362" y="196" width="28" height="7" rx="3.5" fill="#fff" opacity=".7" />
        <rect x="352" y="240" width="76" height="8" rx="4" fill="#22314b" />
        <rect x="352" y="256" width="58" height="8" rx="4" fill="#22314b" />
        <rect x="352" y="276" width="76" height="26" rx="13" fill="#1DB954" />
        <rect x="372" y="286" width="36" height="6" rx="3" fill="#fff" />
        <rect x="378" y="318" width="24" height="3" rx="1.5" fill="#3a4a63" />
      </g>

      {/* Chip "En línea" */}
      <g filter="url(#em-s)">
        <rect x="14" y="28" width="104" height="30" rx="15" fill="#fff" />
        <circle cx="34" cy="43" r="5" fill="#1DB954" />
        <text x="46" y="48" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="12" fill="#07111F">Sitio en línea</text>
      </g>

      {/* Etiqueta */}
      <rect x="84" y="352" width="312" height="44" rx="22" fill="#07111F" stroke="#E61923" strokeWidth="1.5" />
      <circle cx="114" cy="374" r="8" fill="none" stroke="#E61923" strokeWidth="4" />
      <text x="262" y="381" textAnchor="middle" textLength="236" lengthAdjust="spacingAndGlyphs" fontFamily="Barlow Condensed,Impact,sans-serif" fontWeight="800" fontSize="21" fill="#fff">CERO+ · DESARROLLO WEB</text>
    </svg>
  )
}
