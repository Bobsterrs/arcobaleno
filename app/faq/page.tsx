import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react'

import { FaqJsonLd } from '@/components/seo/FaqJsonLd'

export const metadata: Metadata = {
  title: 'FAQ Celiachia e Buono ASL Emilia Romagna',
  description: 'Tutto sulla celiachia, il buono ASL ER e come fare la spesa senza glutine a Imola e dintorni. 20 risposte dal negozio specializzato di Casalfiumanese.',
  alternates: { canonical: 'https://www.arcobalenosenzaglutine.it/faq' },
}

const faqs = [
  {
    question: "Cos'è la celiachia e quali sono i sintomi principali?",
    answer: "La celiachia è una malattia autoimmune in cui l'ingestione di glutine (una proteina presente in grano, orzo, segale) provoca danni all'intestino tenue. I sintomi comuni includono disturbi gastrointestinali, stanchezza cronica, anemia e perdita di peso, anche se molti casi possono essere asintomatici o presentare sintomi atipici. L'unica cura è una dieta rigorosamente senza glutine per tutta la vita."
  },
  {
    question: "Come si ottiene il buono celiachia in Emilia Romagna?",
    answer: "Dopo aver ricevuto la diagnosi ufficiale dal gastroenterologo ed essersi recati all'ASL di competenza, il Servizio Sanitario Regionale attiva il diritto all'erogazione gratuita dei prodotti dietetici senza glutine. In Emilia Romagna, questo budget mensile viene caricato automaticamente sul proprio codice fiscale, rendendo sufficiente strisciare la normale Tessera Sanitaria (CNS) al momento dell'acquisto in cassa nei negozi convenzionati."
  },
  {
    question: "Quanto vale il buono mensile per prodotti senza glutine?",
    answer: "Il valore del buono mensile stabilito dal Ministero della Salute varia a seconda del sesso e dell'età (ad esempio una ragazza di 15 anni riceve un budget mensile di 99€, mentre un uomo di 30 anni riceve 110€). Per scoprire con precisione l'importo calcolato sul tuo profilo, usa il nostro <a href='/buono-celiachia-emilia-romagna' class='text-emerald-600 font-medium hover:underline'>Calcolatore Buono Celiachia</a> dedicato."
  },
  {
    question: "Posso cumulare il buono celiachia se non lo spendo tutto nel mese?",
    answer: "No, in Emilia Romagna (come nel resto d'Italia) il budget è rigorosamente mensile. Il credito non utilizzato entro l'ultimo giorno del mese solare viene purtroppo azzerato e non si sommerà al budget del mese successivo. Consigliamo di organizzare le scorte per non perdere l'importo spettante."
  },
  {
    question: "Dove posso spendere il buono celiachia della mia Tessera Sanitaria?",
    answer: "Il credito per l'acquisto di prodotti alimentari appositamente formulati per celiaci può essere speso nelle farmacie, nei negozi specializzati come Arcobaleno Senza Glutine (a Casalfiumanese, provincia di Bologna), e nei supermercati abilitati all'interno della regione."
  },
  {
    question: "Quali prodotti senza glutine posso acquistare con il buono ASL?",
    answer: "Solo i prodotti inseriti nel Registro Nazionale degli Alimenti senza glutine erogabili dal SSN. Questi comprendono pane, pasta, farina, biscotti, merendine e altri sostitutivi di alimenti che normalmente contengono cereali glutinosi. Alcuni alimenti 'naturalmente privi di glutine' (es. carne, verdura, riso o mais in purezza) non sono erogabili."
  },
  {
    question: "I prodotti mutuabili sono gli stessi in tutta Italia?",
    answer: "Per la maggior parte sì, in quanto seguono il Registro Nazionale stilato dal Ministero della Salute. Tuttavia, la grande comodità dell'Emilia Romagna è il sistema dematerializzato: basta il codice fiscale. Questo vale nella nostra regione, mentre se viaggi in altre regioni potresti non poter spendere il tuo budget locale."
  },
  {
    question: "Come funziona la prima spesa per i celiaci neodiagnosticati?",
    answer: "La diagnosi può essere inizialmente disorientante, ed il sapore dei prodotti senza glutine cambia molto da marca a marca. Una volta attivo il budget sulla tessera, suggeriamo di venire da noi: ci prendiamo il tempo per guidarti e ti facciamo assaggiare/scegliere piccoli pezzi di varie marche artigianali o industriali per scoprire subito i tuoi preferiti."
  },
  {
    question: "Avete a disposizione prodotti freschi senza glutine come pane e dolci?",
    answer: "Assolutamente sì. Da Arcobaleno portiamo regolarmente in negozio eccellenze del fresco artigianale. Abbiamo pane fresco sfornato la mattina, croissant, pizzette e persino torte di compleanno su ordinazione, realizzate in laboratori che lavorano nel totale e certificato rispetto della non-contaminazione."
  },
  {
    question: "È possibile prenotare prodotti specifici che non si trovano facilmente?",
    answer: "Certo! Il mercato del senza glutine artigianale è in continua evoluzione e molti prodotti di nicchia sono faticosi da reperire. Se c'è un brand particolare che ami o un alimento specifico, dillo a noi: lo cerchiamo, lo testiamo e se passa i nostri controlli di qualità lo teniamo in bottega apposta per te."
  },
  {
    question: "Posso acquistare prodotti senza glutine online usando il buono ASL Emilia Romagna?",
    answer: "Attualmente, il sistema sanitario della Regione Emilia Romagna richiede l'utilizzo fisico della Tessera Sanitaria nel POS dedicato presente in farmacia o in botteghe specializzate come la nostra. L'acquisto esclusivamente online con scalo automatico del buono ASL non è ancora supportato a livello regionale per motivi di sicurezza informatica e tracciamento."
  },
  {
    question: "Come faccio a sapere il credito residuo del mio buono celiachia mensile?",
    answer: "Il metodo più semplice è controllare lo scontrino ad ogni tua spesa: i nostri terminali stampano sempre il budget iniziale, la cifra spesa in quel momento e l'esatto credito residuo. In alternativa, in Emilia Romagna puoi consultare il Fascicolo Sanitario Elettronico (FSE) per avere sempre un quadro aggiornato del tuo saldo."
  },
  {
    question: "Posso scaricare dal 730 i prodotti senza glutine pagati di tasca mia?",
    answer: "No. Se acquisti prodotti senza glutine extra (cioè superando il tuo tetto massimo del buono ASL), questa spesa è considerata normale spesa alimentare e non puoi usufruire della detrazione fiscale sanitaria del 19%."
  },
  {
    question: "La tessera sanitaria può essere delegata ad un familiare per fare la spesa?",
    answer: "Sì, un familiare o una persona di fiducia può recarsi nel nostro negozio per fare la spesa al tuo posto. L'importante è che abbia fisicamente con sé la tua Tessera Sanitaria (CNS) originale al momento del pagamento in cassa. In alcuni casi potrebbe essere richiesto il codice PIN associato, qualora previsto per l'importo."
  },
  {
    question: "Oltre al cibo, il buono copre bevande o birre senza glutine?",
    answer: "Il Registro Nazionale stilato dal Ministero della Salute si concentra su alimenti basilari per una corretta alimentazione sostitutiva. Le bevande alcoliche (come le birre senza glutine) non sono mai erogabili con il buono regionale. Esistono erogabilità per alcune bevande specifiche, ma in generale il budget è destinato agli equivalenti di farine, pasta, e derivati da forno."
  },
  {
    question: "Cerco un negozio per celiaci a Imola o dintorni: quanto dista Arcobaleno Senza Glutine?",
    answer: "Ci troviamo a Casalfiumanese, in Via Montanara 13/g, a soli 10 minuti di macchina dal centro di Imola. Il nostro negozio è facilissimo da raggiungere percorrendo la via Montanara e dispone di un comodo parcheggio gratuito proprio di fronte all'ingresso, perfetto per fare la spesa senza stress."
  },
  {
    question: "Siete un punto vendita specializzato senza glutine per la Vallata del Santerno?",
    answer: "Sì, siamo orgogliosi di essere il negozio di riferimento per i celiaci non solo di Casalfiumanese, ma anche di Imola, Fontanelice, Borgo Tossignano e di tutta la Vallata del Santerno (provincia di Bologna). Offriamo un assortimento vastissimo di prodotti mutuabili che difficilmente troverai nella grande distribuzione."
  },
  {
    question: "Posso ritirare i prodotti freschi senza glutine direttamente in negozio a Casalfiumanese?",
    answer: "Assolutamente sì! Puoi chiamarci al numero fisso o scriverci su WhatsApp per prenotare il tuo pane fresco, le tue pizzette o una torta di compleanno artigianale. Prepareremo il tuo ordine e potrai ritirarlo comodamente nel nostro punto vendita vicino a Imola, scalando l'importo dal tuo buono ASL Emiliano-Romagnolo."
  },
  {
    question: "Quali sono i vostri orari per chi fa spesa venendo da fuori Imola?",
    answer: "Siamo aperti dal lunedì al sabato (giorno di chiusura: martedì) dalle 09:30 alle 13:00 e dalle 15:30 alle 19:30. Se vieni da più lontano (ad esempio da Castel San Pietro, Faenza o Bologna) ti consigliamo di contattarci per farti mettere da parte i tuoi prodotti preferiti o i dolci freschi di giornata!"
  },
  {
    question: "Effettuate la consegna a domicilio di prodotti senza glutine a Imola e dintorni?",
    answer: "Sì, offriamo un comodissimo servizio di consegna a domicilio per Imola e zone limitrofe, coprendo anche tutta la suggestiva Vallata del Santerno (Casalfiumanese, Fontanelice, Borgo Tossignano e Castel del Rio). Contattaci via telefono o WhatsApp per concordare la tua consegna di pane fresco e prodotti per celiaci direttamente a casa tua!"
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <FaqJsonLd faqs={faqs} />

      <main className="flex-grow pt-28 pb-20">
        <section className="bg-emerald-900 text-white py-16 md:py-24 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-900"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 text-amber-400 font-semibold tracking-wider text-sm uppercase mb-4">
              <HelpCircle className="w-5 h-5" /> In cosa possiamo aiutarti?
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Domande Frequenti (FAQ)
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Tutto quello che c'è da sapere sulla celiachia, sull'acquisto sicuro di prodotti senza glutine e sulla spesa del budget mensile ASL.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:border-emerald-200">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 px-8 text-lg font-serif">
                    <span className="pr-6 text-foreground group-hover:text-emerald-700 transition-colors">
                      {index + 1}. {faq.question}
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center bg-gray-50 w-10 h-10 rounded-full shrink-0">
                      <Plus className="w-5 h-5 text-emerald-600 block group-open:hidden" />
                      <Minus className="w-5 h-5 text-emerald-600 hidden group-open:block" />
                    </span>
                  </summary>
                  <div className="text-gray-600 font-light leading-relaxed px-8 pb-8 animate-in fade-in duration-300 pt-2 border-t border-gray-50 mt-2">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-10 rounded-3xl border border-amber-100 text-center flex flex-col justify-center items-center h-full">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Hai dubbi sull'importo del tuo buono?</h3>
                <p className="text-gray-600 font-light mb-8 max-w-sm mx-auto">
                  Scopri in un attimo quanto ti spetta mensilmente per i tuoi acquisti senza glutine in Regione Emilia Romagna.
                </p>
                <Link href="/buono-celiachia-emilia-romagna" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105 mt-auto w-full md:w-auto justify-center">
                  Utilizza il Calcolatore <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100 text-center flex flex-col justify-center items-center h-full">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Non hai trovato la risposta?</h3>
                <p className="text-gray-600 font-light mb-8 max-w-sm mx-auto">
                  Scrivici direttamente su WhatsApp o chiamaci! Siamo a disposizione per chiarire i tuoi dubbi o verificare le disponibilità in negozio.
                </p>
                <a href="https://wa.me/393884043388" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105 mt-auto w-full md:w-auto justify-center">
                  Contattaci su WhatsApp <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
