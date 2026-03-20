"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Search, ShieldCheck, Star, ArrowRight, CheckCircle2, ShoppingBag, Instagram, Calculator, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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

export default function Home() {
  const [gender, setGender] = useState<"M" | "F">("M")
  const [ageGroup, setAgeGroup] = useState("18-59")

  const voucherData: Record<string, { M: number, F: number }> = {
    "0-5": { M: 56, F: 56 },
    "6-9": { M: 70, F: 70 },
    "10-13": { M: 100, F: 90 },
    "14-17": { M: 124, F: 99 },
    "18-59": { M: 110, F: 90 },
    "60+": { M: 89, F: 75 }
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section (Emotional) */}
        <section id="hero" className="relative md:sticky top-0 z-10 h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1555507036-ab1f40ce88f4?q=80&w=2626&auto=format&fit=crop"
            >
              <source src="/20260315_2101_New Video_simple_compose_01kkshdkphfmxsyy391c49ddsh.mp4" type="video/mp4" />
              {/* Fallback pattern if video fails */}
              <div className="absolute inset-0 bg-emerald-900 opacity-40"></div>
            </video>
            {/* Overlays for depth and text legibility */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent z-10"></div>
          </div>

          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Prodotti Senza Glutine, <br />
              <span className="text-amber-400">Qualità Senza Compromessi.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-emerald-50 mb-10 max-w-2xl mx-auto font-light"
            >
              A Casalfiumanese, a soli 10 minuti da Imola. Non scegliamo solo prodotti da vendere, scegliamo il gusto che vorremmo sulla nostra tavola.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl text-lg px-10" onClick={() => document.getElementById('chi-siamo')?.scrollIntoView({ behavior: 'smooth' })}>
                Scopri di più
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 1.5. Chi Siamo */}
        <div id="chi-siamo" />
        <section className="relative md:sticky top-0 z-20 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-emerald-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 md:px-6 py-24 md:py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                  <Image
                    src="/img/chi-siamo-v2.jpg"
                    alt="I fondatori di Arcobaleno Senza Glutine: passione per i prodotti certificati"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col justify-center"
              >
                <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-4">La Nostra Storia</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Negozio per Celiaci a Casalfiumanese</h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Dietro Arcobaleno ci siamo noi, che viviamo la celiachia non come un limite, ma come un'opportunità per <strong>alzare l'asticella della qualità</strong>.
                  </p>
                  <p>
                    A casa nostra la celiachia è arrivata come un fulmine a ciel sereno, sappiamo perfettamente come ci si sente. Noi vogliamo che i nostri clienti vivano Arcobaleno come se fosse una casa, un posto sicuro in cui chiedere e scambiare consigli.
                  </p>
                  <p className="font-medium text-emerald-800">
                    Il nostro obiettivo? Farti innamorare di nuovo del cibo.
                  </p>
                </div>
                <div className="mt-10">
                  <Button variant="outline" onClick={() => document.getElementById('esperienza')?.scrollIntoView({ behavior: 'smooth' })}>
                    Continua a scoprire <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. L'Esperienza Arcobaleno */}
        <div id="esperienza" />
        <section className="relative md:sticky top-0 z-30 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 md:px-6 py-24 md:py-20">
            <motion.div
              {...fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Prodotti Senza Glutine Freschi e Selezionati</h2>
              <p className="text-xl text-gray-600 font-light">
                Per noi, il senza glutine non è una rinuncia, ma una scoperta. Soprattutto se sei neodiagnosticato a Imola o dintorni, siamo qui per guidarti verso un mondo di sapori sorprendenti, senza stress dal punto di vista di qualcuno che l'ha già vissuta.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                {
                  icon: <Heart className="text-amber-500 w-8 h-8" />,
                  title: "Empatia e Ascolto",
                  desc: "Ogni diagnosi è diversa. Ti accompagniamo passo passo nella tua nuova dieta.",
                  initial: { opacity: 0, x: 50 }
                },
                {
                  icon: <Search className="text-emerald-500 w-8 h-8" />,
                  title: "Il Prodotto Perfetto",
                  desc: "Cerchi un sapore che ti manca? Se un prodotto non c'è, lo troviamo per te.",
                  initial: { opacity: 0, y: 50 }
                },
                {
                  icon: <Star className="text-amber-500 w-8 h-8" />,
                  title: "Eccellenza del Gusto",
                  desc: "Dimentica la consistenza sabbiosa. Selezioniamo solo ciò che è veramente buono.",
                  initial: { opacity: 0, x: 50 }
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={feature.initial}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.3 }}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all hover:scale-105 duration-300 shadow-sm"
                >
                  <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Us (vs Competitor) */}
        <div id="perche-noi" />
        <section className="relative md:sticky top-0 z-40 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-emerald-900 text-white overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">

          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-900 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-20">
            <motion.div {...fadeIn} className="mb-16 md:flex md:justify-between md:items-end">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Perché Arcobaleno?</h2>
                <p className="text-xl text-emerald-100/90 font-light">
                  Non siamo un semplice negozio. Siamo ricercatori della qualità.
                  Ecco cosa ci rende diversi.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Selezione Rigorosa",
                  desc: "Assaggiamo personalmente ogni singolo prodotto prima di metterlo a scaffale. Se non piace a noi, non lo vendiamo.",
                  icon: <ShieldCheck className="w-6 h-6 text-emerald-300" />
                },
                {
                  title: "Novità Fresche",
                  desc: "Il mondo del senza glutine si evolve velocemente. Aggiorniamo costantemente il nostro catalogo con le ultime release dei migliori produttori artigianali e non.",
                  icon: <Star className="w-6 h-6 text-emerald-300" />
                },
                {
                  title: "Competenza Tecnica",
                  desc: "Conosciamo le differenze tra amidi, mix pronti e farine in purezza. Ti sappiamo consigliare esattamente l'ingrediente per la tua ricetta.",
                  icon: <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                },
                {
                  title: "Reperibilità Garantita",
                  desc: "Hai trovato il pane perfetto? Noi cerchiamo di garantirti scorte costanti dei tuoi prodotti preferiti.",
                  icon: <ShoppingBag className="w-6 h-6 text-emerald-300" />
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-emerald-800/40 border border-emerald-700/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-emerald-800/60 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-emerald-700/50 p-3 rounded-full mr-4">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-2">{card.title}</h3>
                      <p className="text-emerald-100/80 font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Dicono di Noi (Reviews Carousel) */}
        <div id="recensioni" />
        <section className="relative md:sticky top-0 z-50 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 md:px-6 py-24 md:py-20">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Dicono di noi</h2>
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-gray-600 font-light italic">"La fiducia dei nostri clienti è l'ingrediente più prezioso."</p>
            </motion.div>

            {/* Reviews Carousel */}
            <div className="relative w-full overflow-hidden py-12 select-none">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

              <motion.div
                className="flex whitespace-nowrap gap-8 items-center w-max px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Double the reviews for seamless loop */}
                {[...[
                  {
                    name: "Marco L.",
                    text: "Vasto assortimento e personale gentilissimo. Finalmente un posto dove trovo tutto quello che mi serve senza stress.",
                    date: "1 mese fa"
                  },
                  {
                    name: "Elena G.",
                    text: "Ottimo supermercato per celiaci, pane fresco e panettoni squisiti. Una qualità superiore rispetto a ciò che si trova in farmacia.",
                    date: "3 settimane fa"
                  },
                  {
                    name: "Roberto F.",
                    text: "Il proprietario è preparatissimo e sa consigliarti al meglio sui mix di farine. Consigliatissimo per chi ha appena ricevuto la diagnosi.",
                    date: "2 mesi fa"
                  }
                ], ...[
                  {
                    name: "Marco L.",
                    text: "Vasto assortimento e personale gentilissimo. Finalmente un posto dove trovo tutto quello che mi serve senza stress.",
                    date: "1 mese fa"
                  },
                  {
                    name: "Elena G.",
                    text: "Ottimo supermercato per celiaci, pane fresco e panettoni squisiti. Una qualità superiore rispetto a ciò che si trova in farmacia.",
                    date: "3 settimane fa"
                  },
                  {
                    name: "Roberto F.",
                    text: "Il proprietario è preparatissimo e sa consigliarti al meglio sui mix di farine. Consigliatissimo per chi ha appena ricevuto la diagnosi.",
                    date: "2 mesi fa"
                  }
                ]].map((review, i) => (
                  <div
                    key={i}
                    className="inline-block w-[350px] md:w-[450px] whitespace-normal bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold mr-3">
                        {review.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{review.name}</h4>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed italic">"{review.text}"</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://www.google.com/search?q=Arcobaleno+Senza+Glutine+Casalfiumanese+recensioni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 font-medium hover:underline"
              >
                Leggi tutte le recensioni su Google <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. Social Proof / Dynamic Grid */}
        <div id="novita" />
        <section className="relative z-60 w-full flex flex-col justify-center bg-gray-50 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Cosa puoi trovare da noi</h2>
              <p className="text-lg text-gray-600 font-light">Oltre ai classici prodotti da scaffale, abbiamo anche pane fresco, croissant e torte di compleanno direttamente da Gloria Senza Glutine. Contattaci per la disponibilità!</p>
            </motion.div>

            {/* Brands Carousel */}
            <div className="relative w-full overflow-hidden py-4 select-none mb-12">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

              <motion.div
                className="flex whitespace-nowrap gap-16 items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...brands, ...brands].map((brand, i) => (
                  <div key={i} className="flex-shrink-0 w-40 md:w-56 h-28 flex items-center justify-center p-4 relative">
                    <Image
                      src={brand.logo}
                      alt={`Logo brand partner: ${brand.name}`}
                      fill
                      className="object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300 contrast-[1.05] p-4"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {[
                { src: '/img/croissant.jpeg', alt: 'Croissant Artigianale Senza Glutine' },
                { src: '/img/rosetta.jpeg', alt: 'Rosetta Fresca Senza Glutine' },
                { src: '/img/torta.jpeg', alt: 'Torta di Compleanno Personalizzata Senza Glutine' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-200 shadow-xl transition-all duration-500"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn} className="text-center mt-12">
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 h-auto text-lg rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-300 group inline-flex items-center"
                onClick={() => window.open('https://wa.me/393884043388', '_blank')}
              >
                <MessageCircle className="mr-3 w-6 h-6 fill-current" />
                <span>Chiedi disponibilità su WhatsApp</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2.5. Calcolatore Buono */}
        <div id="calcolatore" />
        <section className="relative md:sticky top-0 z-70 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-amber-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">

          <div className="container mx-auto px-4 md:px-6 py-24 md:py-20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Strumenti Utili</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Quanto vale il tuo buono celiachia?</h2>
                <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                  In Emilia Romagna, il valore del buono mensile per prodotti senza glutine varia in base al genere e alla fascia d'età. Seleziona i tuoi dati per scoprire l'importo esatto caricato sulla tua tessera sanitaria.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100">
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Genere</label>
                    <div className="flex gap-4">
                      {["M", "F"].map((g) => (
                        <button
                          key={g}
                          onClick={() => setGender(g as "M" | "F")}
                          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${gender === g
                            ? "bg-amber-500 text-white shadow-md scale-105"
                            : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                            }`}
                        >
                          {g === "M" ? "Maschio" : "Femmina"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Fascia d'età</label>
                    <select
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value)}
                      className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 text-lg focus:ring-2 focus:ring-amber-500 cursor-pointer"
                    >
                      <option value="0-5">6 mesi - 5 Anni</option>
                      <option value="6-9">6 - 9 Anni</option>
                      <option value="10-13">10 - 13 Anni</option>
                      <option value="14-17">14 - 17 Anni</option>
                      <option value="18-59">18 - 59 Anni</option>
                      <option value="60+">60 e oltre</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 flex items-center justify-center">
                <div className="relative group">
                  <motion.div
                    initial={false}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-amber-200 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
                  ></motion.div>
                  <div className="relative bg-white p-12 md:p-16 rounded-[40px] shadow-2xl border border-amber-50 flex flex-col items-center text-center">
                    <div className="bg-amber-100 p-4 rounded-2xl mb-6">
                      <Calculator className="w-8 h-8 text-amber-600" />
                    </div>
                    <span className="text-gray-400 uppercase tracking-[0.2em] text-sm mb-2">Importo Mensile</span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${gender}-${ageGroup}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-baseline"
                      >
                        <span className="text-7xl md:text-8xl font-serif font-bold text-amber-500">
                          {voucherData[ageGroup][gender]}
                        </span>
                        <span className="text-3xl font-serif font-bold text-amber-500 ml-2">€</span>
                      </motion.div>
                    </AnimatePresence>
                    <p className="mt-8 text-gray-400 text-sm font-light max-w-[200px]">
                      Spendibile nell'arco del mese in corso. Non si trasferisce al mese successivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5. Dove Siamo (Map & Info) */}
        <div id="dove-siamo" />
        <section className="relative md:sticky top-0 z-80 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 md:px-6 py-24 md:py-20">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Contatti & Orari</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Vieni a trovarci nel nostro negozio vicino a Imola</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-4 rounded-2xl">
                      <MapPin className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Indirizzo</h4>
                      <p className="text-gray-600 font-light">Via Montanara 13/g,<br />40020 Casalfiumanese (BO)</p><p>A 10 minuti da Imola </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-4 rounded-2xl">
                      <Clock className="text-amber-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Orari di Apertura</h4>
                      <p className="text-gray-600 font-light">Lunedì - Sabato: 09:30 – 13:00, 15:30 – 19:30</p>
                      <p className="text-amber-600 font-medium mt-1">Martedì Chiuso</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-4 rounded-2xl">
                      <Phone className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Telefono</h4>
                      <a href="tel:+393884043388" className="text-gray-600 font-light hover:text-emerald-600 transition-colors">388 4043388</a>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Arcobaleno+Senza+Glutine+Via+Montanara+13g+Casalfiumanese', '_blank')}>
                    Apri su Google Maps
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.3444!2d11.60!3d44.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b496734e560f3%3A0x67db43ee4746f33d!2sVia%20Montanara%2C%2013g%2C%2040050%20Casalfiumanese%20BO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ricette CTA Section */}
        <section className="py-20 md:py-28 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-900/95 to-emerald-900/80"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              {...fadeIn}
              className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"
            >
              <div className="md:w-3/5">
                <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase mb-4 block">🍽️ Le Nostre Ricette</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                  Senza Glutine, <br />con tutto il gusto.
                </h2>
                <p className="text-emerald-100/80 font-light leading-relaxed text-lg mb-8">
                  Scopri oltre 30 ricette testate e approvate: antipasti, primi piatti, secondi, contorni, dolci e tanto altro. Piatti semplici, genuini e buonissimi pensati per chi vive senza glutine.
                </p>
                <a
                  href="/ricette"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
                >
                  Esplora le Ricette
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="md:w-2/5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square relative">
                  <Image src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop" alt="Torta al cioccolato senza glutine artigianale" fill className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square translate-y-4 relative">
                  <Image src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&auto=format&fit=crop" alt="Pasta al pesto senza glutine fresca" fill className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square -translate-y-4 relative">
                  <Image src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&auto=format&fit=crop" alt="Bruschette senza glutine sfiziose" fill className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square relative">
                  <Image src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&auto=format&fit=crop" alt="Salmone con verdure per celiaci" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Newsletter / Lead Magnet */}
        <div id="newsletter" />
        <section className="relative md:sticky top-0 z-90 h-auto md:h-[100dvh] w-full flex flex-col justify-center bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">

          <div className="container mx-auto px-4 md:px-6 py-24 md:py-20">
            <motion.div
              {...fadeIn}
              className="bg-amber-50 rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 bg-[url('/img/locale.jpeg')] bg-cover bg-center min-h-[300px]">
                {/* Image side */}
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-4">Il Club Arcobaleno</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Entra nel nostro mondo.</h2>
                <p className="text-gray-600 mb-8 font-light">
                  Ricevi in anteprima le novità fresche, inviti alle degustazioni in store e consigli esclusivi per la tua dieta senza glutine.
                  <br /><br />
                  <span className="font-medium text-emerald-700">📌 Iscriviti ora: ti aspetta una sorpresa sul tuo primo acquisto in negozio!</span>
                </p>

                <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Il tuo nome"
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    required
                  />
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    required
                  />
                  <Button type="submit" variant="primary" className="py-6 mt-2 shadow-lg hover:shadow-xl">
                    Iscriviti e scopri il regalo
                  </Button>
                  <p className="text-xs text-center text-gray-400 mt-3">
                    Rispettiamo la tua privacy. Niente spam, solo cose buone.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
