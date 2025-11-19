import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-10 md:pb-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl pt-32 md:pt-40">
            <p className="text-sm tracking-widest uppercase text-blue-300/80 mb-4">Portfolio • Developer • Designer</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Hi, I build playful, interactive products.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-200/90 leading-relaxed max-w-2xl">
              I blend creative coding, 3D, and delightful UX to craft memorable digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">View Projects</a>
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/10 hover:bg-white/15 transition-colors">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
