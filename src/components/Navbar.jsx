import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30" />
              <span className="text-white/90 text-lg font-semibold tracking-tight">
                My Portfolio
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <button onClick={() => handleNav("about")} className="hover:text-white transition-colors">About</button>
              <button onClick={() => handleNav("projects")} className="hover:text-white transition-colors">Projects</button>
              <button onClick={() => handleNav("contact")} className="hover:text-white transition-colors">Contact</button>
              <a href="#" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">Resume</a>
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2 text-white/80">
              <button onClick={() => handleNav("about")} className="block w-full text-left py-2">About</button>
              <button onClick={() => handleNav("projects")} className="block w-full text-left py-2">Projects</button>
              <button onClick={() => handleNav("contact")} className="block w-full text-left py-2">Contact</button>
              <a href="#" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">Resume</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
