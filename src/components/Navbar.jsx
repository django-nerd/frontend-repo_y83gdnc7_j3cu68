import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#cta', label: 'Play' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'backdrop-blur-xl bg-black/40 shadow-lg shadow-fuchsia-500/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="relative group inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
            <span className="text-white font-bold tracking-widest">NEONCORE</span>
            <span className="absolute -inset-2 rounded-lg bg-fuchsia-500/20 blur-md opacity-0 group-hover:opacity-100 transition pointer-events-none"></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="relative text-sm text-white/80 hover:text-white transition">
                <span className="relative z-10">{n.label}</span>
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-fuchsia-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20 transition transform hover:-translate-y-0.5">
              Play Now
            </a>
          </nav>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-medium text-center">
              Play Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
