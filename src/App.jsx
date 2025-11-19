import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <a href="#contact" className="mt-3 md:mt-0 inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow">
              Get in touch
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
