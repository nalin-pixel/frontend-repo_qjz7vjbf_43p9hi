import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // No backend send for now; demo UX only
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s connect</h2>
            <p className="mt-3 text-blue-200/90">Have a project in mind or want to say hi? Drop a note and I’ll reach out.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:hello@yourdomain.com" className="text-blue-200/90 hover:text-white">hello@yourdomain.com</a>
              <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-white font-semibold">Social</p>
              <div className="mt-2 flex gap-3 text-blue-200/90">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Name</label>
              <input required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Message</label>
              <textarea required rows="5" className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">Send Message</button>
            {status && <p className="text-sm text-blue-200/90">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
