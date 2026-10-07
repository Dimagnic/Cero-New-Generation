import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react'

export const go = (to: string) => {
  history.pushState({}, '', to)
  window.dispatchEvent(new Event('navigate'))
}

export function useLocation() {
  const read = () => ({ path: location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/', hash: location.hash })
  const [loc, setLoc] = useState(read)
  useEffect(() => {
    const f = () => setLoc(read())
    window.addEventListener('popstate', f)
    window.addEventListener('navigate', f)
    return () => { window.removeEventListener('popstate', f); window.removeEventListener('navigate', f) }
  }, [])
  return loc
}

/** Enlace interno sin recargar; los externos y mailto se dejan nativos. */
export function A({ href = '', onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const internal = href.startsWith('/') || href.startsWith('#')
  const click = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (!internal || e.defaultPrevented || e.metaKey || e.ctrlKey || e.button !== 0) return
    e.preventDefault()
    go(href.startsWith('#') ? location.pathname + href : href)
  }
  return <a href={href} onClick={click} {...rest} />
}
