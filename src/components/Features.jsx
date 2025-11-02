import { Shield, Zap, Rocket, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast launch',
    desc: 'Ready-to-ship layouts and utilities that help you go from idea to live in hours.'
  },
  {
    icon: Shield,
    title: 'Secure foundation',
    desc: 'Built with best practices so you can focus on product, not plumbing.'
  },
  {
    icon: Zap,
    title: 'Snappy performance',
    desc: 'Optimized assets and smart defaults keep things smooth on any device.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What you get</h2>
          <p className="mt-3 text-slate-300">
            A thoughtfully curated set of tools and patterns that feel great out of the box and scale with you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>

        <div id="pricing" className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Simple pricing</h3>
              <p className="text-slate-300 mt-1">One plan with everything you need. No surprises.</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Unlimited projects</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Commercial license</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Priority support</li>
              </ul>
            </div>
            <div className="shrink-0 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 text-center">
              <div className="text-4xl font-bold">$29</div>
              <div className="text-slate-300 text-sm">one-time</div>
              <button className="mt-4 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-200 transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
