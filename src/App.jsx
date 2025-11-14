import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Particles from './components/Particles'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Navbar />
      <main className="relative">
        <Particles />
        <Hero />
        <Features />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <CursorGlow />
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Neoncore. All rights reserved.
      </footer>
    </div>
  )
}

export default App
