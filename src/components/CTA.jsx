import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 to-cyan-500/20 p-10 text-center backdrop-blur-xl">
          <div className="absolute -inset-20 bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.25),transparent_40%)] blur-2xl"></div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 text-3xl sm:text-5xl font-extrabold text-white">
            Ready to Enter the Arena?
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="relative z-10 mt-4 text-white/80 max-w-2xl mx-auto">
            Squad up or solo queue—claim your drops, fire up your rig, and dominate the meta.
          </motion.p>
          <div className="relative z-10 mt-8 flex justify-center gap-4">
            <a href="#" className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)] transition-transform hover:-translate-y-0.5">
              Play Now
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl font-semibold text-white/90 border border-white/20 hover:border-white/40 transition backdrop-blur-md">
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
