import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">VibeLaunch</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 rounded-md border border-white/15 text-sm text-slate-200 hover:bg-white/10 transition">Sign in</button>
          <button className="inline-flex px-4 py-2 rounded-md bg-white text-slate-900 text-sm font-semibold hover:bg-slate-200 transition">Get started</button>
        </div>
      </div>
    </header>
  );
}
