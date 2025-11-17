export default function Contact() {
  return (
    <section id="contatti" className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">Parliamone</h2>
          <p className="mt-3 text-lg text-white/80 max-w-2xl">Raccontami in breve di cosa hai bisogno. Ti risponderò entro 24 ore.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <form action="mailto:ciao@robertoruggiero.design" method="post" encType="text/plain" className="grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Nome</label>
                <input required type="text" name="Nome" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input required type="email" name="Email" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="nome@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Messaggio</label>
              <textarea required name="Messaggio" rows="5" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Raccontami del tuo progetto..." />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button type="submit" className="btn-primary">Invia richiesta</button>
              <a href="mailto:ciao@robertoruggiero.design" className="btn-ghost">Scrivimi via email</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
