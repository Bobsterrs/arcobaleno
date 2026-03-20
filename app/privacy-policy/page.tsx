"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-emerald lg:prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground">Informativa Estesa sulla Privacy</h2>
                <p>
                  Benvenuto su Arcobaleno Senza Glutine. La tua privacy è importante per noi. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando visiti il nostro sito e interagisci con noi.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground">1. Titolare del Trattamento</h3>
                <p>
                  Il titolare del trattamento dei dati è: <br />
                  <strong>L'Arcobaleno Senza Glutine di Compagnone Miriam</strong> <br />
                  Via Montanara 13/g, 40020 Casalfiumanese (BO) <br />
                  P.I.: 04248731202 | C.F.: CMPMRM92P66I158B <br />
                  Email: info@arcobalenosenzaglutine.it
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground">2. Dati Raccolti</h3>
                <p>
                  Raccogliamo i seguenti tipi di dati:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Dati di navigazione:</strong> Indirizzi IP, browser utilizzato, data e ora di accesso.</li>
                  <li><strong>Dati forniti volontariamente:</strong> Nome ed email tramite il form di iscrizione alla newsletter.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground">3. Finalità del Trattamento</h3>
                <p>
                  I dati sono trattati per:
                </p>
                <ul className="list-disc pl-6">
                  <li>Gestire le richieste di informazioni.</li>
                  <li>Inviare comunicazioni promozionali e novità (previa iscrizione alla newsletter).</li>
                  <li>Migliorare l'esperienza di navigazione sul sito.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground">4. Base Giuridica</h3>
                <p>
                  Il trattamento si basa sul tuo consenso esplicito per la newsletter e sul legittimo interesse del titolare per la sicurezza del sito e la gestione ordinaria.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground">5. Conservazione dei Dati</h3>
                <p>
                  Conserviamo i tuoi dati per il tempo strettamente necessario alle finalità per cui sono stati raccolti o fino a quando non ne richiedi la cancellazione.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground">6. I Tuoi Diritti</h3>
                <p>
                  Hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione o la limitazione del trattamento. Puoi ritirare il consenso in qualsiasi momento scrivendo a info@arcobalenosenzaglutine.it.
                </p>
              </section>

              <p className="text-sm mt-12 italic">
                Ultimo aggiornamento: 17 Marzo 2026
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
