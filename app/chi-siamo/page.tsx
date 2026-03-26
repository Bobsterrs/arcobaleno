import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chi Siamo: La Nostra Storia e Passione',
  description: 'Scopri chi c\'è dietro Arcobaleno Senza Glutine. Una storia di passione per il gusto autentico, nata dall\'esperienza diretta con la celiachia a Casalfiumanese.',
  alternates: {
    canonical: 'https://www.arcobalenosenzaglutine.it/chi-siamo',
  },
}

export default function ChiSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* standardized Hero Section */}
        <section className="bg-emerald-50 py-16 md:py-24 border-b border-emerald-100 mb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
                Il Nostro Cuore
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Chi Siamo: Passione per il Senza Glutine
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Arcobaleno non è solo un negozio, è il risultato di una ricerca personale verso il gusto che non accetta compromessi.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                <Image
                  src="/img/chi-siamo-v2.jpg"
                  alt="I fondatori di Arcobaleno Senza Glutine"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">La Nostra Storia</h2>
              <p>
                Dietro Arcobaleno ci siamo noi, che viviamo la celiachia non come un limite, ma come un'opportunità per <strong>alzare l'asticella della qualità</strong>.
              </p>
              <p>
                A casa nostra la celiachia è arrivata come un fulmine a ciel sereno, sappiamo perfettamente come ci si sente. Noi vogliamo che i nostri clienti vivano Arcobaleno come se fosse una casa, un posto sicuro in cui chiedere e scambiare consigli.
              </p>
              <p className="font-medium text-emerald-800">
                Il nostro obiettivo? Farti innamorare di nuovo del cibo, garantendo la massima sicurezza e il miglior sapore artigianale.
              </p>
            </div>
          </div>
        </section>

        {/* Nuova Sezione: Come Nasce il Nostro Negozio */}
        <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop"
                    alt="Placeholder storia negozio"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Come Nasce il Nostro Negozio</h2>
                <p>
                  [TESTO DA SOSTITUIRE: Inserisci qui il racconto di come e quando avete deciso di aprire fisicamente il negozio a Casalfiumanese. Puoi parlare delle difficoltà iniziali, del supporto della comunità locale o del ricordo del primo giorno di apertura.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuova Sezione: Street Food */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop"
                    alt="Placeholder street food senza glutine"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Street Food Senza Glutine</h2>
                <p>
                  [TESTO DA SOSTITUIRE: Descrivi qui il nuovo angolo/servizio dedicato allo street food gluten-free. Menziona quali sfiziosità offrite "da passeggio" (fritti, panini speciali, focacce) e perché avete voluto portare lo street food nel mondo della celiachia.]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
