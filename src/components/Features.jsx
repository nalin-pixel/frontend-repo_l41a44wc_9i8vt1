import { Workflow, Zap, Shield, Gauge, Sparkles, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "SOPs that stick",
    desc: "Documented, searchable playbooks that teammates actually use.",
  },
  {
    icon: Workflow,
    title: "Automation first",
    desc: "Eliminate repetitive work across tools with lightweight automations.",
  },
  {
    icon: Shield,
    title: "Quality by default",
    desc: "Tight review loops and guardrails keep outcomes consistent.",
  },
  {
    icon: Gauge,
    title: "Speed without stress",
    desc: "Shorten cycle times while keeping your team calm and focused.",
  },
  {
    icon: Layers,
    title: "Systems thinking",
    desc: "From intake to delivery, every step is designed to flow.",
  },
  {
    icon: Sparkles,
    title: "Modern stack",
    desc: "We work inside your tools—Notion, Slack, Linear, Make/Zapier and more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">What we bring</h2>
          <p className="mt-3 text-white/70">Practical systems work designed for momentum, not bureaucracy.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/7.5 transition">
              <div className="h-10 w-10 rounded-xl bg-white text-slate-900 flex items-center justify-center shadow-sm ring-1 ring-black/5">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
