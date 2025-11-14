import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  { img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop', title: 'Neon City Rush' },
  { img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop', title: 'Zero‑G Arena' },
  { img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop', title: 'Cyber Rift' },
  { img: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop', title: 'Quantum Drift' },
]

function TiltCard({ img, title, i }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl aspect-[4/3]"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 rounded-2xl will-change-transform transition-transform duration-300 group-hover:-translate-y-1" style={{ transformStyle: 'preserve-3d' }}>
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white font-semibold drop-shadow">{title}</h4>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,0,204,.25),transparent_30%)]"></div>
      </div>
    </motion.a>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="gallery" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">Gameplay Gallery</h2>
          <p className="text-white/70 max-w-xl">A peek into the arenas, biomes, and high‑octane showdowns that await.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <TiltCard key={c.title} {...c} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
