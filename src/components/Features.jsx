import { motion } from 'framer-motion'
import { Sparkles, Rocket, Gamepad2, ShieldHalf, Cpu, Zap } from 'lucide-react'

const features = [
  { icon: Gamepad2, title: 'Controller-First', desc: 'Ultra-low latency inputs tuned for eSports precision.' },
  { icon: Rocket, title: 'Hyper Boost', desc: 'Next-gen engine delivering 240Hz buttery smooth frames.' },
  { icon: ShieldHalf, title: 'Anti‑Cheat Core', desc: 'Server-side validation and ML-powered anomaly detection.' },
  { icon: Cpu, title: 'AI Rivals', desc: 'Adaptive opponents that learn and evolve with you.' },
  { icon: Zap, title: 'Neon FX', desc: 'Dynamic lighting, volumetrics, and particle magic.' },
  { icon: Sparkles, title: 'Cosmetic Forge', desc: 'Endless skins with real-time previews.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-300 via-white to-cyan-200 bg-clip-text text-transparent">Engineered to Thrill</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Every pixel, every frame, every hit scan—dialed for competitive glory.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-600/30 to-cyan-500/30 text-white shadow-inner shadow-black/30">
                    {f.icon && <f.icon className="w-6 h-6" />}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="mt-3 text-white/70 text-sm">{f.desc}</p>
              </div>
              <div className="absolute -bottom-10 right-0 w-40 h-40 rounded-full bg-fuchsia-500/10 blur-2xl group-hover:bg-cyan-500/10 transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
