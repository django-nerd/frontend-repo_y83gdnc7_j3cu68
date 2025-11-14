import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="absolute -inset-24 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Stay in the loop</h3>
              <p className="mt-2 text-white/70">Sign up for beta access, devlogs, and exclusive drops.</p>
              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.input whileFocus={{ boxShadow: '0 0 0 3px rgba(217,70,239,.35)' }} type="text" placeholder="Gamer Tag" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none" />
                <motion.input whileFocus={{ boxShadow: '0 0 0 3px rgba(34,211,238,.35)' }} type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none" />
                <motion.textarea whileFocus={{ boxShadow: '0 0 0 3px rgba(217,70,239,.35)' }} rows="4" placeholder="Message" className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none"></motion.textarea>
                <button type="submit" className="sm:col-span-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)] transition-transform hover:-translate-y-0.5">
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,0.15),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_35%)]">
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500 blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
