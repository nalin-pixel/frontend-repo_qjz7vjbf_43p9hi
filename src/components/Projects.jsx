export default function Projects() {
  const projects = [
    {
      title: "Interactive 3D Showcase",
      desc: "A playful, WebGL-powered gallery with smooth physics and depth-of-field.",
      tags: ["React", "Three.js", "Spline"],
      link: "#"
    },
    {
      title: "Motion Design System",
      desc: "Reusable animation primitives and transitions for product teams.",
      tags: ["Framer Motion", "React", "Design"],
      link: "#"
    },
    {
      title: "Realtime Collab Notes",
      desc: "Low-latency sync, presence cursors, and offline support.",
      tags: ["FastAPI", "MongoDB", "WebSockets"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#" className="hidden md:inline-flex items-center text-white/80 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-400/20 to-violet-500/20 border border-white/10" />
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-200/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 text-sm text-white/70 group-hover:text-white">Learn more →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
