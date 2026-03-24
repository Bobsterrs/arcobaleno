"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "./ui/Button"

const reviews = [
  {
    name: "Marco L.",
    text: "Vasto assortimento e personale gentilissimo. Finalmente un posto dove trovo tutto quello che mi serve senza stress.",
    date: "1 mese fa",
    initials: "ML"
  },
  {
    name: "Elena G.",
    text: "Ottimo supermercato per celiaci, pane fresco e panettoni squisiti. Una qualità superiore rispetto a ciò che si trova in farmacia.",
    date: "3 settimane fa",
    initials: "EG"
  },
  {
    name: "Roberto F.",
    text: "Il proprietario è preparatissimo e sa consigliarti al meglio sui mix di farine. Consigliatissimo per chi ha appena ricevuto la diagnosi.",
    date: "2 mesi fa",
    initials: "RF"
  },
  {
    name: "Giulia P.",
    text: "Miglior negozio senza glutine della zona. I prodotti freschi sono incredibili, sembra di mangiare prodotti normali!",
    date: "2 settimane fa",
    initials: "GP"
  }
]

export function SocialProof() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <motion.div {...fadeIn} className="lg:w-1/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full mb-6 font-medium text-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-emerald-500 text-emerald-500" />
                ))}
              </span>
              <span>5.0 su Google</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              La parola ai <br /> nostri clienti
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8 max-w-md mx-auto lg:mx-0">
              La qualità e il servizio sono al centro di tutto quello che facciamo. Scopri perché la nostra community ci ha premiato con il massimo dei voti.
            </p>
            <a 
              href="https://www.google.com/search?q=Arcobaleno+Senza+Glutine+Casalfiumanese+recensioni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="gap-2 group">
                Lascia una recensione
                <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${i % 2 === 1 ? 'md:translate-y-8' : ''} bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300 relative group`}
              >
                <Quote className="absolute top-6 right-8 text-emerald-100 w-12 h-12 -z-0 group-hover:text-emerald-200 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold mr-4 shrink-0 shadow-sm">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground leading-none mb-1">{review.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, starI) => (
                          <Star key={starI} size={12} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed italic mb-4">
                    "{review.text}"
                  </p>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                    {review.date} • Google Review
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          {...fadeIn}
          className="bg-emerald-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 relative z-10">Puoi trovarci su Google.</h3>
          <p className="text-emerald-100/80 text-lg font-light mb-10 max-w-2xl mx-auto relative z-10">
            Siamo presenti con tutte le informazioni aggiornate, foto dei prodotti freschi e percorsi stradali. Seguici anche lì per non perderti nulla!
          </p>
          <a 
            href="https://www.google.com/maps/place/Arcobaleno+Senza+Glutine/@44.3000,11.6000,17z" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold px-10 py-5 rounded-full hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl relative z-10"
          >
            Vedi su Google Maps
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
