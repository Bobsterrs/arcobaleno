import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const RECIPES_FILE = path.join(process.cwd(), 'data', 'recipes.json');
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'adminchia';

function readRecipes() {
  const data = fs.readFileSync(RECIPES_FILE, 'utf-8');
  return JSON.parse(data);
}

function writeRecipes(recipes: unknown[]) {
  fs.writeFileSync(RECIPES_FILE, JSON.stringify(recipes, null, 2), 'utf-8');
}

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) return false;
  const decoded = atob(authHeader.split(' ')[1]);
  const [user, pass] = decoded.split(':');
  return user === ADMIN_USER && pass === ADMIN_PASS;
}

// GET /api/recipes?category=Antipasti
export async function GET(request: NextRequest) {
  try {
    const recipes = readRecipes();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (category && category !== 'Tutti') {
      const filtered = recipes.filter((r: { category: string }) => r.category === category);
      return NextResponse.json(filtered);
    }

    return NextResponse.json(recipes);
  } catch {
    return NextResponse.json({ error: 'Failed to read recipes' }, { status: 500 });
  }
}

// POST /api/recipes (protected)
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const recipes = readRecipes();
    const newRecipe = await request.json();

    // Generate ID from title
    newRecipe.id = newRecipe.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 40) + '-' + Date.now();
    newRecipe.createdAt = new Date().toISOString().split('T')[0];

    recipes.push(newRecipe);
    writeRecipes(recipes);

    return NextResponse.json(newRecipe, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
  }
}

// DELETE /api/recipes?id=xxx (protected)
export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing recipe id' }, { status: 400 });
    }

    const recipes = readRecipes();
    const filtered = recipes.filter((r: { id: string }) => r.id !== id);

    if (filtered.length === recipes.length) {
      return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }

    writeRecipes(filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete recipe' }, { status: 500 });
  }
}
