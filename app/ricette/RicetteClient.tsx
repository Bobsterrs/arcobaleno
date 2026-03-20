"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ChefHat, Users, X, ArrowRight, ArrowLeft, Send, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Recipe {
  id: string
  title: string
  category: string
  description: string
  image: string
  ingredients: string[]
  steps: string[]
  difficulty: string
  prepTime: string
  servings: number
  author: string
  longDescription: string
}

const categories = ["Tutti", "Antipasti", "Primi Piatti", "Secondi", "Contorni", "Dolci", "Altro"]

const categoryIcons: Record<string, string> = {
  "Tutti": "🍽️",
  "Antipasti": "🥗",
  "Primi Piatti": "🍝",
  "Secondi": "🥩",
  "Contorni": "🥕",
  "Dolci": "🍰",
  "Altro": "🧑‍🍳"
}

export default function RicettePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [activeCategory, setActiveCategory] = useState("Tutti")
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    recipeName: "",
    recipeDescription: ""
  })

  useEffect(() => {
    fetchRecipes()
  }, [activeCategory])

  const fetchRecipes = async () => {
    setIsLoading(true)
    try {
      const url = activeCategory === "Tutti"
        ? "/api/recipes"
        : `/api/recipes?category=${encodeURIComponent(activeCategory)}`
      const res = await fetch(url)
      const data = await res.json()
      setRecipes(data)
    } catch (error) {
      console.error("Error fetching recipes:", error)
    }
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await fetch("https://formsubmit.co/ajax/arcobalenosenzaglutine@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Nuova Ricetta da ${formData.name}!`,
          Nome: formData.name,
          Email: formData.email,
          "Nome Ricetta": formData.recipeName,
          Descrizione: formData.recipeDescription
        })
      })
      
      setFormSubmitted(true)
      setFormData({ name: "", email: "", recipeName: "", recipeDescription: "" })
      setTimeout(() => setFormSubmitted(false), 5000)
    } catch (error) {
      console.error("Error submitting form", error)
      alert("Si è verificato un errore. Riprova più tardi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-emerald-100 text-emerald-700"
      case "Media": return "bg-amber-100 text-amber-700"
      case "Difficile": return "bg-red-100 text-red-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-6 py-3">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative bg-emerald-900 text-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-900"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold tracking-wider text-sm uppercase mb-4">
                <UtensilsCrossed className="w-5 h-5" />
                Le Nostre Ricette
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Ricette Senza Glutine <br />
                <span className="text-amber-400">Semplici e Gustose.</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100/90 font-light max-w-2xl mx-auto">
                Scopri le nostre ricette testate e approvate. Piatti semplici, genuini e soprattutto buonissimi, pensati per chi vive senza glutine senza rinunciare al piacere della tavola.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <div className="sticky top-28 z-40 flex justify-center px-4 w-full pointer-events-none -mt-8 mb-10">
          <div className="pointer-events-auto flex overflow-x-auto p-2 gap-1.5 scrollbar-hide bg-white/95 backdrop-blur-md border border-emerald-100 shadow-xl shadow-emerald-900/5 rounded-full max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-[1.02]"
                    : "bg-transparent text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                <span className="text-base">{categoryIcons[cat]}</span>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm animate-pulse">
                      <div className="h-56 bg-gray-200" />
                      <div className="p-6 space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-20" />
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {recipes.map((recipe, i) => (
                    <Link 
                      href={`/ricette/${recipe.id}`}
                      key={recipe.id}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-emerald-100 h-full"
                      >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={recipe.image}
                          alt={`Ricetta Senza Glutine: ${recipe.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
                          {recipe.difficulty}
                        </span>
                      </div>
                      <div className="p-6">
                        <span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">
                          {recipe.category}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-emerald-700 transition-colors">
                          {recipe.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2 mb-4">
                          {recipe.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {recipe.prepTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {recipe.servings} porz.
                          </span>
                          <span className="flex items-center gap-1">
                            <ChefHat className="w-3.5 h-3.5" />
                            {recipe.difficulty}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                   </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!isLoading && recipes.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">Nessuna ricetta trovata in questa categoria.</p>
              </div>
            )}
          </div>
        </section>

        {/* SEO Breadcrumb Schema for /ricette */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.arcobalenosenzaglutine.it"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Ricette",
                  "item": "https://www.arcobalenosenzaglutine.it/ricette"
                }
              ]
            })
          }}
        />

        {/* CTA: Submit Recipe */}
        <section className="py-20 md:py-28 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-900 rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <span className="text-amber-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
                  Community
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Hai una ricetta<br />da condividere?
                </h2>
                <p className="text-emerald-100/80 font-light leading-relaxed">
                  Inviaci la tua ricetta senza glutine preferita! Se ci piace, la pubblicheremo nella nostra raccolta con il tuo nome. Aiutaci a costruire la più grande community di ricette senza glutine d'Italia.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full"
              >
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700/50 text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2">Grazie!</h3>
                      <p className="text-emerald-100/80 font-light">La tua ricetta è stata inviata. La esamineremo al più presto!</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700/50 space-y-4"
                    >
                      <input
                        type="text"
                        placeholder="Il tuo nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-emerald-700/50 border border-emerald-600/50 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                      <input
                        type="email"
                        placeholder="La tua email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-emerald-700/50 border border-emerald-600/50 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                      <input
                        type="text"
                        placeholder="Nome della ricetta"
                        value={formData.recipeName}
                        onChange={(e) => setFormData({ ...formData, recipeName: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-emerald-700/50 border border-emerald-600/50 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                      <textarea
                        placeholder="Descrivi la tua ricetta (ingredienti e procedimento)"
                        value={formData.recipeDescription}
                        onChange={(e) => setFormData({ ...formData, recipeDescription: e.target.value })}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-emerald-700/50 border border-emerald-600/50 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                      />
                      <Button type="submit" variant="secondary" disabled={isSubmitting} className="w-full py-6 rounded-xl shadow-lg hover:shadow-xl text-lg group disabled:opacity-70">
                        {isSubmitting ? "Invio in corso..." : "Invia la tua ricetta"}
                        {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
