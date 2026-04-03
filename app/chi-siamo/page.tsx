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
                    src="/img/inaugurazione.jpg"
                    alt="Inaugurazione di Arcobaleno Senza Glutine"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Come Nasce il Nostro Negozio</h2>
                <p>
                  Il 3 maggio 2025 abbiamo aperto a Casalfiumanese il nostro piccolo sogno. 70mq di negozio in cui proporre il meglio del senza glutine per la Vallata del Santerno, Imola e dintorni.
                </p>
                <p>
                  Un poco per volta stiamo ampliando la nostra offerta per darvi un'offerta sempre maggiore e di qualità.
                </p>
                <p className="font-medium text-emerald-800">
                  Cerchiamo di essere un negozio in cui sentirsi a casa, dove puoi trovare di tutto col un sorriso.
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
                  <video
                    src="/img/hamburger.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Street Food Senza Glutine</h2>
                <p>
                  Forti della nostra esperienza ventennale nel mondo della ristorazione e dell'horeca, e vista l'assenza di alternative senza glutine, abbiamo deciso di metterci in gioco.
                </p>
                <p>
                  Col nostro gazebo cuciniamo hamburger, hot dog, piadine, wrap, pasta...quello che serve per rendere una festa tale anche per chi non può mangiare glutine.
                </p>
                <p>
                  Siamo fieri di quello che facciamo, perchè in tutto ci mettiamo l'impegno e il cuore.
                </p>
                <p className="font-medium text-emerald-800">
                  Organizzi feste, sagre, catering? Contattaci per sapere le date o lavorare assieme!
                </p>
                <div className="pt-4">
                  <a
                    href="https://wa.me/393884043388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-[#128C7E] hover:scale-105 shadow-md no-underline"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
