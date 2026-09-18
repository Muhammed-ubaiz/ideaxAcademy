import { useEffect, useRef } from 'react'
import useIsTouchDevice from '../hooks/useIsTouchDevice'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const isTouch = useIsTouchDevice()

  useEffect(() => {
    if (isTouch) return

    const dot = dotRef.current
    const ring = ringRef.current
    document.body.classList.add('custom-cursor-enabled')

    const isInteractive = (el) => el.closest('a, button, [role="button"], input, textarea, select, summary')

    const move = (e) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      ring.style.left = `${e.clientX}px`
      ring.style.top = `${e.clientY}px`

      const themedEl = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-cursor-theme]')
      const theme = themedEl?.getAttribute('data-cursor-theme') === 'dark' ? 'dark' : 'light'
      dot.dataset.theme = theme
      ring.dataset.theme = theme
    }

    const over = (e) => {
      if (isInteractive(e.target)) {
        dot.classList.add('cursor-hover')
        ring.classList.add('cursor-hover')
      }
    }
    const out = (e) => {
      if (isInteractive(e.target)) {
        dot.classList.remove('cursor-hover')
        ring.classList.remove('cursor-hover')
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden lg:block" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot hidden lg:block" aria-hidden="true" />
    </>
  )
}
