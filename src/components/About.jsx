export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-blue-200/90 leading-relaxed">
              I’m a creative developer focused on building interactive, accessible, and visually-rich web experiences. My toolkit spans JavaScript, React, and 3D on the web. I love shipping products that feel fast, polished, and fun to use.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-semibold">Core Stack</p>
                <p className="text-blue-200/80 mt-1 text-sm">React, TypeScript, Tailwind, Framer Motion</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-semibold">Creative Tech</p>
                <p className="text-blue-200/80 mt-1 text-sm">WebGL, Three.js, Spline, shaders</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-semibold">Backend</p>
                <p className="text-blue-200/80 mt-1 text-sm">FastAPI, Node, MongoDB</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-semibold">Soft Skills</p>
                <p className="text-blue-200/80 mt-1 text-sm">Prototyping, UX thinking, teamwork</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white font-semibold mb-2">Currently</p>
              <p className="text-blue-200/90 text-sm">
                Exploring generative UI patterns and playful interactions using modern web tooling.
              </p>
              <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-6 text-white font-semibold mb-2">Open to</p>
              <p className="text-blue-200/90 text-sm">Freelance work, full-time roles, and collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
