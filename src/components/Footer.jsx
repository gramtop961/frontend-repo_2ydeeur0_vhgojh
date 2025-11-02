export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} VibeLaunch. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#faq">FAQ</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
