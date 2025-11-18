import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Neo-brutal header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="container mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black" />
            <span className="font-extrabold text-xl text-black">NeoGrid</span>
          </div>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#features" className="px-4 py-2 bg-amber-300 border-4 border-black text-black font-extrabold shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">Features</a>
            <a href="#get-started" className="px-4 py-2 bg-lime-400 border-4 border-black text-black font-extrabold shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">Get Started</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Call to action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
