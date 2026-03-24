import { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Heart, Search, Star, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Il Metodo Arcobaleno: Eccellenza Senza Glutine',
  description: 'Scopri come selezioniamo i migliori prodotti senza glutine. Empatia, ascolto e una selezione rigorosa per garantire solo il meglio a chi vive la celiachia.',
  alternates: {
    canonical: 'https://www.arcobalenosenzaglutine.it/metodo-arcobaleno',
  },
}

export default function MetodoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="bg-emerald-900 text-white py-16 md:py-24 mb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
                Il Nostro Approccio
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
                L'Esperienza Arcobaleno
              </h1>
              <p className="text-lg md:text-xl text-emerald-50/90 font-light max-w-2xl mx-auto leading-relaxed">
                Non semplici rivenditori, ma guide esperte per la tua dieta senza glutine a Imola e dintorni.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
              <div className="bg-gray-50 rounded-[2rem] p-10 text-center border border-transparent hover:border-emerald-100 hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 group">
                <div className="mx-auto bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-8 text-amber-500 group-hover:scale-110 transition-transform">
                  <Heart size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Empatia e Ascolto</h3>
                <p className="text-gray-600 font-light leading-relaxed">Ogni diagnosi è diversa. Ti accompagniamo passo passo nella tua nuova dieta, basandoci sulla nostra esperienza diretta.</p>
              </div>
              <div className="bg-gray-50 rounded-[2rem] p-10 text-center border border-transparent hover:border-emerald-100 hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 group">
                <div className="mx-auto bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-8 text-emerald-500 group-hover:scale-110 transition-transform">
                  <Search size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Il Prodotto Perfetto</h3>
                <p className="text-gray-600 font-light leading-relaxed">Cerchi un sapore che ti manca? Se un prodotto non c'è nel nostro catalogo, lo troviamo per te attivando i nostri migliori canali.</p>
              </div>
              <div className="bg-gray-50 rounded-[2rem] p-10 text-center border border-transparent hover:border-emerald-100 hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 group">
                <div className="mx-auto bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-8 text-amber-500 group-hover:scale-110 transition-transform">
                  <Star size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Eccellenza del Gusto</h3>
                <p className="text-gray-600 font-light leading-relaxed">Assaggiamo personalmente ogni singolo prodotto. Selezioniamo solo ciò che supera i nostri standard di sapore e qualità artigianale.</p>
              </div>
            </div>

            <div className="py-20 border-t border-gray-100">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">I Pilastri di Arcobaleno</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Selezione Rigorosa",
                    desc: "Scegliamo solo brand certificati e prodotti che garantiscono la massima sicurezza.",
                    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
                  },
                  {
                    title: "Novità Fresche",
                    desc: "Aggiorniamo costantemente il nostro catalogo con le ultime release dei migliori produttori.",
                    icon: <Star className="w-8 h-8 text-amber-500" />
                  },
                  {
                    title: "Competenza",
                    desc: "Conosciamo le differenze tra amidi e farine in purezza per consigliarti al meglio.",
                    icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  },
                  {
                    title: "Reperibilità",
                    desc: "Cerchiamo di garantirti scorte costanti dei tuoi prodotti preferiti senza interruzioni.",
                    icon: <ShoppingBag className="w-8 h-8 text-amber-500" />
                  }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-emerald-50 border border-transparent hover:shadow-md transition-all duration-300"
                  >
                    <div className="mx-auto bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6">
                      {card.icon}
                    </div>
                    <h4 className="font-serif text-lg font-bold mb-2 text-foreground">{card.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
