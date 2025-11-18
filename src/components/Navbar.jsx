import { Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex items-center justify-between px-6 py-5 max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-white/90 shadow-sm ring-1 ring-black/5 flex items-center justify-center">
            <span className="text-slate-900 font-bold">S</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">ScaleOS</span>
        </div>

        <div className="hidden sm:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Capabilities</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#work" className="hover:text-white transition">Work</a>
        </div>

        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow transition">
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>

        <button className="sm:hidden text-white/80" aria-label="Open Menu">
          <Menu />
        </button>
      </nav>
    </header>
  );
}
