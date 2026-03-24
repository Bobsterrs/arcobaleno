import { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Heart, Search, Star } from 'lucide-react'

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
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 text-amber-500">
                  <Heart size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Empatia e Ascolto</h3>
                <p className="text-gray-600 font-light leading-relaxed">Ogni diagnosi è diversa. Ti accompagniamo passo passo nella tua nuova dieta, condividendo la nostra esperienza.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 text-emerald-500">
                  <Search size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Il Prodotto Perfetto</h3>
                <p className="text-gray-600 font-light leading-relaxed">Cerchi un sapore che ti manca? Se un prodotto non c'è, attiviamo la nostra rete per trovarlo per te.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 text-amber-500">
                  <Star size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Eccellenza del Gusto</h3>
                <p className="text-gray-600 font-light leading-relaxed">Assaggiamo personalmente tutto. Selezioniamo solo ciò che supera i nostri standard di sapore e qualità.</p>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
