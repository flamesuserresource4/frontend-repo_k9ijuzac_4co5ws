import { Menu } from "lucide-react";

const navItems = [
  { label: "Servizi", href: "#servizi" },
  { label: "Progetti", href: "#progetti" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-[#fdf6ee]/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#ff7f50]" aria-hidden />
          <span className="font-display text-lg tracking-tight text-[#1d1d1d]">
            Roberto Ruggiero
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#1d1d1d] hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#contatti"
            className="inline-flex items-center rounded-full bg-[#ff7f50] text-black px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-95 transition"
          >
            Prenota una call
          </a>
        </div>
        <button className="md:hidden inline-flex items-center p-2 rounded-md border border-black/10">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
