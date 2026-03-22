import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arcobalenosenzaglutine.it'
  
  // Base pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ricette`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buono-celiachia-emilia-romagna`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic recipe pages
  try {
    const filePath = path.join(process.cwd(), 'data', 'recipes.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const recipes = JSON.parse(fileContents)
    
    const recipePages = recipes.map((recipe: any) => ({
      url: `${baseUrl}/ricette/${recipe.id}`,
      lastModified: new Date(recipe.updatedAt || recipe.createdAt || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [...staticPages, ...recipePages]
  } catch (error) {
    console.error('Error generating sitemap recipes:', error)
    return staticPages
  }
}
