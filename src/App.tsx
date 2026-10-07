import { useEffect } from 'react'
import { useLocation } from './router'
import Header from './components/Header'
import Footer, { FinalCta } from './components/Footer'
import Floating from './components/Floating'
import Home from './pages/Home'
import Otros from './pages/Otros'
import Legal from './pages/Legal'

const TITLES: Record<string, string> = {
  '/': 'Cero+ | Páginas web profesionales para negocios',
  '/otros-servicios': 'Imágenes y video con IA | Cero+',
  '/aviso-de-privacidad': 'Aviso de privacidad | Cero+',
  '/terminos-y-condiciones': 'Términos y condiciones | Cero+',
}

export default function App() {
  const { path, hash } = useLocation()

  useEffect(() => {
    document.title = TITLES[path] ?? TITLES['/']
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60)
    else window.scrollTo(0, 0)
  }, [path, hash])

  const legal = path === '/aviso-de-privacidad' || path === '/terminos-y-condiciones'
  return (
    <>
      <Header path={path} />
      <main>
        {path === '/otros-servicios' ? <Otros />
          : path === '/aviso-de-privacidad' ? <Legal kind="privacy" />
          : path === '/terminos-y-condiciones' ? <Legal kind="terms" />
          : <Home />}
      </main>
      {!legal && <FinalCta />}
      <Footer />
      <Floating />
    </>
  )
}
