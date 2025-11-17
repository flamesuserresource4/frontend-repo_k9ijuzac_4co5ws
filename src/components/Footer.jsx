export default function Footer() {
  return (
    <footer className="bg-[#fdf6ee] text-[#1d1d1d] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl">Roberto Ruggiero — Marketing Designer</p>
          <p className="text-sm opacity-70 mt-1">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:ciao@robertoruggiero.design" className="text-sm font-medium hover:underline">ciao@robertoruggiero.design</a>
          <span className="opacity-30">•</span>
          <a href="#" className="text-sm font-medium hover:underline">Instagram</a>
          <a href="#" className="text-sm font-medium hover:underline">LinkedIn</a>
          <a href="#" className="text-sm font-medium hover:underline">Behance</a>
        </div>
      </div>
    </footer>
  );
}
