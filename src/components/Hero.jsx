import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast; pointer-events disabled to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">Boutique Scale Agency</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Operational systems that help you scale without the chaos
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            ScaleOS partners with high-growth teams to design clear SOPs, automate repeatable work, and build a calm, efficient operating system.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow">
              Start a project
            </a>
            <a href="#process" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              See how we work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
