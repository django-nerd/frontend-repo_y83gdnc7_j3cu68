import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      el.style.setProperty('--x', x + 'px')
      el.style.setProperty('--y', y + 'px')
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background:
          'radial-gradient(600px 600px at var(--x) var(--y), rgba(217,70,239,.15), transparent 40%), radial-gradient(200px 200px at var(--x) var(--y), rgba(34,211,238,.2), transparent 40%)',
      }}
    />
  )
}
