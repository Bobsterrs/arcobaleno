import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ShoppingBag, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prodotti Senza Glutine: Freschi e Selezionati',
  description: 'Scopri il vasto assortimento di prodotti senza glutine a Casalfiumanese. Pane fresco artigianale, dolci, farine e i migliori marchi partner.',
  alternates: {
    canonical: 'https://www.arcobalenosenzaglutine.it/prodotti-senza-glutine',
  },
}

const brands = [
  { name: "Belli Freschi", logo: "/logocarousel/bellifreschi.png" },
  { name: "Caputo", logo: "/logocarousel/caputo.png" },
  { name: "Farabella", logo: "/logocarousel/farabella.png" },
  { name: "Felicia", logo: "/logocarousel/felicia.jpg" },
  { name: "Fiorentini", logo: "/logocarousel/fiorentini.png" },
  { name: "Giusto", logo: "/logocarousel/giusto.png" },
  { name: "Maidea", logo: "/logocarousel/maidea.png" },
  { name: "Massimo Zero", logo: "/logocarousel/massimozero.png" },
  { name: "Molino di Ferro", logo: "/logocarousel/molinodiferro.jpg" },
  { name: "Naturà", logo: "/logocarousel/nat4.jpeg" },
  { name: "Natisani", logo: "/logocarousel/natisani.png" },
  { name: "Nutrifree", logo: "/logocarousel/nutrifree-logo.svg" },
  { name: "Ori di Sicilia", logo: "/logocarousel/oridisicilia.png" },
  { name: "Piaceri Mediterranei", logo: "/logocarousel/piaceri.png" },
  { name: "Probios", logo: "/logocarousel/probios.jpg" },
  { name: "Revolution Food", logo: "/logocarousel/revolution.jpeg" },
  { name: "Sapori di Casa", logo: "/logocarousel/saporidicasa.jpg" },
  { name: "Sarchio", logo: "/logocarousel/sarchio.png" },
  { name: "Schar", logo: "/logocarousel/schar.jpg" },
]

const bentoImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&q=80",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  "https://images.unsplash.com/photo-1469307670224-eed118ec1cb1?w=800&q=80",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
  "https://images.unsplash.com/photo-1484723091791-0fee59ca0c28?w=800&q=80",
  "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=800&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80",
  "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&q=80",
  "https://images.unsplash.com/photo-1481070555726-e2fe83477d4a?w=800&q=80",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a5a?w=800&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=800&q=80",
  "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
  "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&q=80",
  "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=800&q=80",
  "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=800&q=80",
]

const getBentoSpan = (index: number) => {
  const patterns = [
    "md:col-span-2 md:row-span-2 col-span-2 row-span-2", // 0: large square
    "md:col-span-1 md:row-span-1 col-span-1 row-span-1", // 1: small
    "md:col-span-1 md:row-span-1 col-span-1 row-span-1", // 2: small
    "md:col-span-2 md:row-span-1 col-span-2 row-span-1", // 3: wide
    "md:col-span-1 md:row-span-2 col-span-1 row-span-2", // 4: tall
    "md:col-span-1 md:row-span-1 col-span-1 row-span-1", // 5: small
    "md:col-span-2 md:row-span-2 col-span-2 row-span-2", // 6: large square
    "md:col-span-1 md:row-span-1 col-span-1 row-span-1", // 7: small
    "md:col-span-1 md:row-span-1 col-span-1 row-span-1", // 8: small
    "md:col-span-2 md:row-span-1 col-span-2 row-span-1", // 9: wide
  ]
  return patterns[index % patterns.length];
}

export default function ProdottiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="bg-amber-50 py-16 md:py-24 mb-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
              La Nostra Selezione
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Prodotti per Celiaci a Casalfiumanese
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Dal pane fresco artigianale alle migliori marche industriali, ogni prodotto è scelto per garantirti un gusto 100% autentico.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 mb-24 mt-8">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">La Nostra Vetrina</h2>
             <p className="text-gray-600 font-light max-w-2xl mx-auto">
               Una piccola anteprima delle delizie senza glutine che puoi trovare nella nostra bottega a Casalfiumanese.
             </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[250px] grid-flow-row-dense">
            {bentoImages.map((src, i) => (
              <div key={i} className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer ${getBentoSpan(i)}`}>
                <Image
                  src={src}
                  alt={`Prodotto Arcobaleno senza glutine ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32 overflow-hidden bg-gray-50/50 py-16 md:py-24 relative border-y border-gray-100">
          <style>{`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              animation: marquee-left 60s linear infinite;
            }
            .animate-marquee-right {
              animation: marquee-right 60s linear infinite;
            }
            .pause-on-hover:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="container mx-auto px-4 md:px-6 mb-16 relative z-20">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
                Eccellenza Assicurata
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                I Nostri Marchi Partner
              </h2>
              <p className="text-lg text-gray-500 font-light">
                Collaboriamo direttamente con le migliori aziende del senza glutine per garantirti una selezione vasta, sicura e in continuo aggiornamento.
              </p>
            </div>
          </div>
          
          <div className="relative w-full before:absolute before:inset-y-0 before:left-0 before:w-16 md:before:w-48 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-16 md:after:w-48 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:z-10 flex flex-col gap-6 md:gap-10">
            
            {/* Prima riga - Scorrevole a sinistra */}
            <div className="flex animate-marquee-left pause-on-hover items-center w-max">
              {[...brands.slice(0, 10), ...brands.slice(0, 10), ...brands.slice(0, 10), ...brands.slice(0, 10)].map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-24 md:w-56 md:h-32 mx-3 md:mx-5 bg-white shadow-sm border border-gray-100 rounded-[2rem] flex items-center justify-center p-6 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-100 transition-all duration-300 cursor-pointer group">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 768px) 160px, 224px"
                      className="object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Seconda riga - Scorrevole a destra */}
            <div className="flex animate-marquee-right pause-on-hover items-center w-max">
              {[...brands.slice(10), ...brands.slice(10), ...brands.slice(10), ...brands.slice(10)].map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-24 md:w-56 md:h-32 mx-3 md:mx-5 bg-white shadow-sm border border-gray-100 rounded-[2rem] flex items-center justify-center p-6 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-100 transition-all duration-300 cursor-pointer group">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 768px) 160px, 224px"
                      className="object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="bg-emerald-900 text-white py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-16">Perché scegliere la nostra bottega?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-emerald-800/40 p-8 rounded-2xl border border-emerald-700/50">
                  <CheckCircle2 className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Fresco di Giornata</h3>
                  <p className="text-emerald-100/80 font-light">Pane, croissant e dolci artigianali sfornati in laboratori specializzati e certificati.</p>
                </div>
                <div className="bg-emerald-800/40 p-8 rounded-2xl border border-emerald-700/50">
                  <ShieldCheck className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Sicurezza Totale</h3>
                  <p className="text-emerald-100/80 font-light">Solo prodotti inseriti nel Registro Nazionale degli Alimenti senza glutine erogabili.</p>
                </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
