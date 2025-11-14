import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0114] via-[#05020c] to-[#03060e]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,204,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,255,255,0.18),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(147,51,234,0.2),transparent_35%)]"></div>

      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NkcnsJpx2b5y-eA7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 bg-fuchsia-500/10 blur-3xl rounded-full"></div>
        <div className="absolute inset-10 bg-cyan-500/5 blur-3xl rounded-full mix-blend-screen"></div>
      </div>

      {/* Content */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-300 via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.35)]">
          Ignite Your Play
        </motion.h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          A next‑gen arena where neon dreams and reflexes collide. Power up, dive in, and own the leaderboard.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#cta" className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)] transition-transform hover:-translate-y-0.5">
            <span className="relative z-10">Play Now</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
          </a>
          <a href="#gallery" className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white/90 border border-white/20 hover:border-white/40 transition backdrop-blur-md">
            Watch Trailer
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition pointer-events-none"></span>
          </a>
        </div>
      </motion.div>

      {/* Loading spinner overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 grid place-items-center bg-black/60 backdrop-blur-sm z-20">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-fuchsia-500/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-fuchsia-400 animate-spin"></div>
            <div className="absolute inset-3 rounded-full border-4 border-cyan-500/30"></div>
            <div className="absolute inset-3 rounded-full border-4 border-t-transparent border-cyan-400 animate-spin [animation-duration:1.2s]"></div>
          </div>
        </div>
      )}
    </section>
  )
}
