const Section = ({ id, title, text, invert }) => (
  <section id={id} className={`${invert ? 'bg-black text-white' : 'bg-[#fdf6ee] text-[#1d1d1d]'} py-24`}> 
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            {title}
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-lg opacity-80">
            {text}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      <Section id="servizi" title="Rendo il tuo brand chiaro, riconoscibile e desiderabile." text="Costruisco la tua presenza online — dal branding al sito, fino ai contenuti." />
      <Section invert title="Semplice, diretto, efficace." text="Ascolto, analizzo e progetto con te una strategia chiara. Niente paroloni." />
      <Section title="Cosa posso fare per te." text="Branding, siti web e contenuti pensati per far crescere la tua immagine." />
      <Section invert title="Un brand che parla da solo." text="Ogni progetto nasce per farti sembrare, e sentire, più professionale." />
      <Section id="chi-sono" title="Ciao, sono Roberto." text="Unisco marketing e design per aiutarti a costruire una presenza online solida." />
      <Section invert id="contatti" title="Pronto a fare il primo passo?" text="Parliamone in una call senza impegno." />
    </div>
  );
}
