export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-white text-3xl font-semibold tracking-tight">Ready to scale with less chaos?</h3>
            <p className="mt-3 text-white/70">Tell us where you are today and where you want to go. We’ll share a clear plan within a week.</p>
          </div>

          <form className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-3">
              <input className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email" />
              <input className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Company / team size" />
              <button type="button" className="w-full bg-white text-slate-900 font-medium rounded-lg px-4 py-2 hover:shadow">
                Request intro
              </button>
              <p className="text-[11px] text-white/50">We reply within 24 hours. No spam.</p>
            </div>
          </form>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 flex items-center justify-between text-white/50 text-sm">
          <p>© {new Date().getFullYear()} ScaleOS. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
