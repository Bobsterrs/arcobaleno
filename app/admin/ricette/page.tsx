"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Trash2, LogIn, LogOut, ChefHat, Save, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

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
}

const categories = ["Antipasti", "Primi Piatti", "Secondi", "Contorni", "Dolci", "Altro"]
const difficulties = ["Facile", "Media", "Difficile"]

export default function AdminRicettePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState("")

  // New recipe form state
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    category: "Antipasti",
    description: "",
    image: "",
    ingredients: "",
    steps: "",
    difficulty: "Facile",
    prepTime: "",
    servings: 4
  })

  const credentials = btoa(`${username}:${password}`)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "adminchia") {
      setIsLoggedIn(true)
      setLoginError("")
      fetchRecipes()
    } else {
      setLoginError("Credenziali non valide")
    }
  }

  const fetchRecipes = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/recipes")
      const data = await res.json()
      setRecipes(data)
    } catch (error) {
      console.error("Error fetching recipes:", error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoggedIn) fetchRecipes()
  }, [isLoggedIn])

  const handleAddRecipe = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const recipe = {
        ...newRecipe,
        ingredients: newRecipe.ingredients.split("\n").filter(i => i.trim()),
        steps: newRecipe.steps.split("\n").filter(s => s.trim()),
        servings: Number(newRecipe.servings)
      }

      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${credentials}`
        },
        body: JSON.stringify(recipe)
      })

      if (res.ok) {
        setShowAddForm(false)
        setNewRecipe({
          title: "", category: "Antipasti", description: "", image: "",
          ingredients: "", steps: "", difficulty: "Facile", prepTime: "", servings: 4
        })
        showSuccess("Ricetta aggiunta con successo!")
        fetchRecipes()
      }
    } catch (error) {
      console.error("Error adding recipe:", error)
    }
  }

  const handleDeleteRecipe = async (id: string) => {
    try {
      const res = await fetch(`/api/recipes?id=${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Basic ${credentials}`
        }
      })

      if (res.ok) {
        setDeleteConfirm(null)
        showSuccess("Ricetta eliminata")
        fetchRecipes()
      }
    } catch (error) {
      console.error("Error deleting recipe:", error)
    }
  }

  const showSuccess = (msg: string) => {
    setSuccessMessage(msg)
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  // Group recipes by category
  const groupedRecipes = categories.reduce((acc, cat) => {
    acc[cat] = recipes.filter(r => r.category === cat)
    return acc
  }, {} as Record<string, Recipe[]>)

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full border border-gray-100"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Gestione Ricette</h1>
            <p className="text-gray-500 font-light mt-1">Accedi al pannello di amministrazione</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                required
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-sm text-center">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Accedi
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-emerald-600 transition-colors flex items-center justify-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Torna al sito
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold">Gestione Ricette</h1>
              <p className="text-xs text-gray-400">{recipes.length} ricette totali</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/ricette" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
              Vedi sito →
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Esci
            </button>
          </div>
        </div>
      </header>

      {/* Success Toast */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Add Recipe Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-2xl font-bold">Le tue ricette</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors shadow-md"
          >
            <Plus className="w-4 h-4" />
            Aggiungi Ricetta
          </button>
        </div>

        {/* Add Recipe Modal */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              onClick={() => setShowAddForm(false)}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white rounded-3xl overflow-y-auto max-w-2xl w-full max-h-[90vh] p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl font-bold">Nuova Ricetta</h3>
                  <button onClick={() => setShowAddForm(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleAddRecipe} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Titolo *</label>
                      <input
                        type="text"
                        value={newRecipe.title}
                        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Categoria *</label>
                      <select
                        value={newRecipe.category}
                        onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Descrizione *</label>
                    <textarea
                      value={newRecipe.description}
                      onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">URL Immagine *</label>
                    <input
                      type="url"
                      value={newRecipe.image}
                      onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Difficoltà</label>
                      <select
                        value={newRecipe.difficulty}
                        onChange={(e) => setNewRecipe({ ...newRecipe, difficulty: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Tempo</label>
                      <input
                        type="text"
                        value={newRecipe.prepTime}
                        onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
                        placeholder="es. 30 min"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Porzioni</label>
                      <input
                        type="number"
                        value={newRecipe.servings}
                        onChange={(e) => setNewRecipe({ ...newRecipe, servings: parseInt(e.target.value) })}
                        min={1}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Ingredienti * (uno per riga)</label>
                    <textarea
                      value={newRecipe.ingredients}
                      onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
                      rows={4}
                      placeholder={"Farina senza glutine 250g\nUova 3\nZucchero 100g"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none font-mono text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Procedimento * (un passaggio per riga)</label>
                    <textarea
                      value={newRecipe.steps}
                      onChange={(e) => setNewRecipe({ ...newRecipe, steps: e.target.value })}
                      rows={4}
                      placeholder={"Preriscaldare il forno a 180°C.\nMescolare gli ingredienti secchi.\nAggiungere le uova e mescolare."}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none font-mono text-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Salva Ricetta
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recipes List by Category */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        ) : (
          <div className="space-y-10">
            {categories.map(cat => {
              const catRecipes = groupedRecipes[cat]
              if (!catRecipes || catRecipes.length === 0) return null

              return (
                <div key={cat}>
                  <h3 className="font-serif text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                    {cat}
                    <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{catRecipes.length}</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catRecipes.map(recipe => (
                      <div
                        key={recipe.id}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex group hover:shadow-md transition-shadow"
                      >
                        <div className="w-24 h-24 shrink-0">
                          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 p-4 flex items-center justify-between min-w-0">
                          <div className="min-w-0">
                            <h4 className="font-medium text-sm truncate">{recipe.title}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{recipe.prepTime} · {recipe.difficulty}</p>
                          </div>

                          {deleteConfirm === recipe.id ? (
                            <div className="flex items-center gap-1 shrink-0 ml-2">
                              <button
                                onClick={() => handleDeleteRecipe(recipe.id)}
                                className="p-2 bg-red-500 text-white rounded-lg text-xs hover:bg-red-600"
                              >
                                Sì
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="p-2 bg-gray-200 rounded-lg text-xs hover:bg-gray-300"
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(recipe.id)}
                              className="p-2 text-gray-300 hover:text-red-500 transition-colors shrink-0 ml-2"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
