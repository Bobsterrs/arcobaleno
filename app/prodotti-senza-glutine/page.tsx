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

        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl grayscale hover:grayscale-0 transition-all duration-300 h-32 relative">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
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
