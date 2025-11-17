import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4">Marketing Designer</p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight">
            Strategia. Design. Risultati.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Costruisco brand chiari, riconoscibili e umani.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contatti" className="inline-flex items-center rounded-full bg-[#ff7f50] text-black px-6 py-3 text-base font-semibold shadow-sm hover:brightness-95 transition">
              Prenota una call
            </a>
            <a href="#progetti" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/15 text-white px-6 py-3 text-base font-semibold transition">
              Guarda i miei lavori
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
