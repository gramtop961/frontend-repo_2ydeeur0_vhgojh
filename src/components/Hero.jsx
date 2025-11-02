import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            <span className="tracking-tight">New</span>
            <span className="text-white/70">— Experience a sleeker way to launch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Build modern experiences with a bold aesthetic
          </h1>
          <p className="mt-5 text-slate-300 text-lg md:text-xl leading-relaxed">
            A refined starter that blends beautiful visuals, accessible components, and clean
            motion to help you ship your next big idea faster.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-200 transition">
              Explore features
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-slate-200 hover:bg-white/10 transition">
              Live demo
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <PreviewCard title="Elegant UI" subtitle="Polished components and layouts" />
          <PreviewCard title="Performance" subtitle="Optimized for speed" />
          <PreviewCard title="Dark mode" subtitle="Designed dark-first" />
        </div>
      </div>
    </section>
  );
}

function PreviewCard({ title, subtitle }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
      <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-slate-300 mt-1">{subtitle}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
      </div>
      <div className="mt-6 h-28 rounded-xl bg-slate-800/40 border border-white/10" />
    </div>
  );
}
