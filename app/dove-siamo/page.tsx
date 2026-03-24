import { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dove Siamo e Contatti: Vicino a Imola',
  description: 'Contatta Arcobaleno Senza Glutine. Siamo a Casalfiumanese, in via Montanara 13/g, a soli 10 minuti da Imola. Orari e mappa del negozio.',
  alternates: {
    canonical: 'https://www.arcobalenosenzaglutine.it/dove-siamo',
  },
}

export default function DoveSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="bg-emerald-50 py-16 md:py-24 mb-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Contatti
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Come Raggiungerci
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Il tuo punto di riferimento per il senza glutine nella Vallata del Santerno, a due passi da Imola.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Indirizzo</h4>
                  <p className="text-gray-600 font-light">Via Montanara 13/g,<br />40020 Casalfiumanese (BO)</p>
                  <p className="text-emerald-700 font-medium italic mt-1">A soli 10 minuti di auto da Imola</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-4 rounded-2xl text-amber-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Orari di Apertura</h4>
                  <p className="text-gray-600 font-light">Lunedì - Sabato: 09:30 – 13:00, 15:30 – 19:30</p>
                  <p className="text-amber-600 font-medium mt-1">Giorno di chiusura: Martedì</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefono & WhatsApp</h4>
                  <a href="tel:+393884043388" className="text-gray-600 font-light hover:text-emerald-600 transition-colors">388 4043388</a>
                </div>
              </div>

              <div className="mt-10">
                <Button variant="primary" className="w-full sm:w-auto py-6 rounded-full" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Arcobaleno+Senza+Glutine+Via+Montanara+13g+Casalfiumanese', '_blank')}>
                  Ottieni Indicazioni Stradali
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full h-[450px]">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.3444!2d11.60!3d44.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b496734e560f3%3A0x67db43ee4746f33d!2sVia%20Montanara%2C%2013g%2C%2040050%20Casalfiumanese%20BO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[40px] shadow-2xl"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
