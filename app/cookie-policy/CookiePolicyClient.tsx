"use client";

import { motion } from "framer-motion";

export default function CookiePolicyClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-emerald lg:prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-foreground">Cosa sono i Cookie?</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo browser, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground">1. Tipologie di Cookie utilizzati</h3>
          <p>
            Questo sito utilizza:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito. Senza di essi, alcune parti del sito potrebbero non funzionare correttamente.</li>
            <li><strong>Cookie di Performance:</strong> Utilizzati per raccogliere informazioni anonime sull'utilizzo del sito (es. numero di visitatori, pagine più visitate).</li>
            <li><strong>Cookie di Terze Parti:</strong> Forniti da servizi esterni come Google Maps e widget social, che possono installare cookie propri per il tracking.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground">2. Google Maps</h3>
          <p>
            Il nostro sito incorpora Google Maps. Quando interagisci con la mappa, Google può raccogliere dati e utilizzare cookie per personalizzare la tua esperienza e per scopi pubblicitari. Per maggiori informazioni, consulta la <a href="https://policies.google.com/privacy" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground">3. Come gestire i Cookie</h3>
          <p>
            Puoi gestire le preferenze sui cookie direttamente dalle impostazioni del tuo browser. Puoi bloccare o eliminare i cookie già presenti. Tuttavia, disabilitare i cookie tecnici potrebbe compromettere la funzionalità del sito.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground">4. Consenso</h3>
          <p>
            Continuando a navigare su questo sito, acconsenti all'uso dei cookie secondo questa informativa.
          </p>
        </section>

        <p className="text-sm mt-12 italic">
          Ultimo aggiornamento: 17 Marzo 2026
        </p>
      </div>
    </motion.div>
  );
}
