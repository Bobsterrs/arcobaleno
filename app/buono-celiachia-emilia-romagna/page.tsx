import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { VoucherCalculator } from '@/components/VoucherCalculator'
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buono Celiachia Emilia-Romagna: Importi 2026 e Come Usarlo',
  description: 'Scopri gli importi 2026 del buono celiachia in Emilia-Romagna. Calcola il tuo budget mensile per fascia d\'età. Spendibile da Arcobaleno Senza Glutine a Casalfiumanese, vicino a Imola.',
  alternates: { canonical: 'https://www.arcobalenosenzaglutine.it/buono-celiachia-emilia-romagna' },
}

export default function BuonoCeliachiaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Header Section */}
        <section className="bg-amber-50 py-16 md:py-24 border-b border-amber-100 mb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
                Guida Pratica 2026
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Buono Celiachia Emilia-Romagna: <br className="hidden md:block"/> importi e come usarlo
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Dal 2026 i tetti di spesa per i prodotti senza glutine erogabili in Emilia Romagna sono stati aggiornati. 
                Scopri esattamente a quanto ammonta il tuo budget mensile e come semplificare la tua spesa.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Calculator */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Calculator Integration */}
            <div className="mb-20">
               <h2 className="font-serif text-3xl font-bold text-center mb-10">Calcola il tuo importo mensile</h2>
               <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-xl border border-gray-100">
                 <VoucherCalculator />
                 <p className="text-center text-sm text-gray-400 mt-6 mt-md-0">
                   *I dati sono calcolati secondo le tabelle ministeriali e regionali valide per l'Emilia Romagna.
                 </p>
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="md:col-span-2 space-y-8 text-gray-600 font-light leading-relaxed text-lg">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Come funziona il Buono Asl?</h2>
                <p>
                  In Emilia Romagna, i pazienti con diagnosi accertata di celiachia hanno diritto all'erogazione gratuita 
                  di prodotti dietetici senza glutine (SNC). Questo budget, o "buono", viene caricato direttamente sulla 
                  nostra amata <strong>Tessera Sanitaria (Fascicolo Sanitario Elettronico)</strong>.
                </p>
                <p>
                  L'importo, come visto nel calcolatore, varia in base a due parametri stabiliti dal Ministero della Salute: 
                  il sesso e la fascia d'età del paziente, in quanto il fabbisogno calorico giornaliero varia.
                </p>
                
                <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Regole fondamentali da ricordare</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Scadenza mensile:</strong> Il budget copre esattamente il mese solare dal primo all'ultimo giorno.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Non è cumulativo:</strong> La cifra non spesa entro la fine del mese solare andrà perduta. Non si somma al mese successivo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Massima flessibilità:</strong> Puoi spendere il tuo buono in più tranches, in negozi specializzati convenzionati come il nostro, in farmacia o al supermercato.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                 <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                    <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Spendi il tuo buono da noi!</h3>
                    <p className="text-gray-600 font-light mb-6 text-sm">
                      Da Arcobaleno Senza Glutine accettiamo la Tessera Sanitaria per l'acquisto di tutti i prodotti mutuabili inseriti nel Registro Nazionale.
                    </p>
                    <Link href="/#dove-siamo" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full transition-all text-sm w-full justify-center">
                      Vieni a trovarci <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>

                 <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                    <HelpCircle className="w-10 h-10 text-amber-600 mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Hai dubbi?</h3>
                    <p className="text-gray-600 font-light mb-6 text-sm">
                      Sei neodiagnosticato/a e non sai come attivare il buono? Ti aiutiamo noi a fare chiarezza sull'iter burocratico.
                    </p>
                    <a href="https://wa.me/393884043388" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-amber-400 text-foreground font-medium px-6 py-3 rounded-full transition-all text-sm w-full justify-center">
                      Scrivici su WhatsApp
                    </a>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

    </div>
  )
}
