export default function Process() {
  const steps = [
    {
      k: '01',
      title: 'Ops audit',
      desc: 'We map how work really happens today across tools, teams and timelines.',
    },
    {
      k: '02',
      title: 'System design',
      desc: 'We define your operating model, roles, SOPs and the measurement plan.',
    },
    {
      k: '03',
      title: 'Build + automate',
      desc: 'We implement, connect tools, and automate repeatable workflows.',
    },
    {
      k: '04',
      title: 'Enable + iterate',
      desc: 'We train, ship enablement, and refine based on real usage.',
    },
  ];

  return (
    <section id="process" className="bg-slate-950/95 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">A calm, clear process</h2>
          <p className="mt-3 text-white/70">Tight loops, high leverage. Built to show progress every week.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <li key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
              <span className="text-white/50 text-sm">{s.k}</span>
              <h3 className="mt-2 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
