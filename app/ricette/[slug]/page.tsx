import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react'

// Fetch Recipe by ID (slug)
async function getRecipe(slug: string) {
  const filePath = path.join(process.cwd(), 'data', 'recipes.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const recipes = JSON.parse(fileContents)
  return recipes.find((r: any) => r.id === slug) || null
}

// Generate Static Params
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'data', 'recipes.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const recipes = JSON.parse(fileContents)
  return recipes.map((recipe: any) => ({
    slug: recipe.id,
  }))
}

// Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipe(slug)
  
  if (!recipe) return { title: 'Ricetta non trovata' }

  return {
    title: `${recipe.title} Senza Glutine — Ricetta Facile | Arcobaleno`,
    description: `Ricetta ${recipe.title} senza glutine, semplice e gustosa. Pronta in ${recipe.prepTime}. Testata e approvata da Arcobaleno Senza Glutine.`,
    alternates: { canonical: `https://www.arcobalenosenzaglutine.it/ricette/${slug}` },
  }
}

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const recipe = await getRecipe(slug)

  if (!recipe) {
    notFound()
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <Link href="/ricette" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Torna alle Ricette
          </Link>

          <article className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="relative h-64 md:h-96">
              <Image
                src={recipe.image}
                alt={`Dettaglio Ricetta: ${recipe.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <span className="inline-block px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold mb-3">
                  {recipe.category}
                </span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                  {recipe.title}
                </h1>
                <div className="mt-2 text-emerald-50 font-medium flex items-center gap-2 opacity-90">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">&hearts;</span>
                  di {recipe.author}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium">{recipe.prepTime} min</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium">{recipe.servings} porzioni</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${getDifficultyColor(recipe.difficulty)}`}>
                  <ChefHat className="w-4 h-4" />
                  <span className="text-sm font-medium">{recipe.difficulty}</span>
                </div>
              </div>

              <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg whitespace-pre-line">
                {recipe.longDescription || recipe.description}
              </p>

              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-sm">🧾</span>
                    Ingredienti
                  </h3>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 justify-between border-b border-gray-100 pb-2">
                        <div className="flex gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span className="text-gray-700 font-light">{ing}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm">👨‍🍳</span>
                    Procedimento
                  </h3>
                  <ol className="space-y-6">
                    {recipe.steps.map((step: string, i: number) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 font-light leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            
            {/* SEO Structured Data for Recipe */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org/",
                  "@type": "Recipe",
                  "name": recipe.title,
                  "description": recipe.description,
                  "image": [recipe.image],
                  "author": { "@type": "Person", "name": recipe.author || "Arcobaleno Senza Glutine" },
                  "datePublished": recipe.createdAt || new Date().toISOString().split('T')[0],
                  "prepTime": `PT${recipe.prepTime.replace(/[^0-9]/g, '')}M`,
                  "cookTime": `PT0M`,
                  "totalTime": `PT${recipe.prepTime.replace(/[^0-9]/g, '')}M`,
                  "recipeYield": `${recipe.servings} servings`,
                  "recipeCategory": recipe.category,
                  "keywords": ["senza glutine", "celiaco", "gluten free", recipe.title],
                  "recipeIngredient": recipe.ingredients,
                  "recipeInstructions": recipe.steps.map((step: string, i: number) => ({
                    "@type": "HowToStep",
                    "position": i + 1,
                    "text": step
                  })),
                })
              }}
            />

            {/* Breadcrumb Schema */}
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
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": recipe.title,
                      "item": `https://www.arcobalenosenzaglutine.it/ricette/${slug}`
                    }
                  ]
                })
              }}
            />

          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
