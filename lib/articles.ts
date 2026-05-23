import fs from 'fs/promises'
import path from 'path'
import { slugifyCategory } from './constants'
export { CATEGORIES, slugifyCategory } from './constants'

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  published: boolean
  featured: boolean
  coverImage?: string
  pdfUrl?: string
  scheduledAt?: string
  accentColor?: string
}

const DATA_FILE = path.join(process.cwd(), 'data', 'articles.json')
const KV_KEY = 'tar:articles'

function useKV(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

function useSupabase(): boolean {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)
}

// ── Supabase helpers ───────────────────────────────────────────────────
async function readFromSupabase(): Promise<Article[]> {
  const { kvGet } = await import('./supabase')
  const data = await kvGet<Article[]>(KV_KEY)
  if (data) return data
  const seed = await readFromJson()
  if (seed.length > 0) {
    const { kvSet } = await import('./supabase')
    await kvSet(KV_KEY, seed)
  }
  return seed
}

async function writeToSupabase(articles: Article[]): Promise<void> {
  const { kvSet } = await import('./supabase')
  await kvSet(KV_KEY, articles)
}

// ── Local JSON helpers ─────────────────────────────────────────────────
async function readFromJson(): Promise<Article[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeToJson(articles: Article[]): Promise<void> {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
    await fs.writeFile(DATA_FILE, JSON.stringify(articles, null, 2))
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'code' in err && (err as NodeJS.ErrnoException).code === 'EROFS') {
      throw new Error('Storage not configured. Please connect a KV database in your Vercel dashboard (Settings → Storage → Create KV Store), then redeploy.')
    }
    throw err
  }
}

// ── KV helpers (only called in production) ─────────────────────────────
async function readFromKV(): Promise<Article[]> {
  const { kv } = await import('@vercel/kv')
  const data = await kv.get<Article[]>(KV_KEY)
  if (data) return data
  // Auto-seed KV from the bundled JSON on first run
  const seed = await readFromJson()
  if (seed.length > 0) await kv.set(KV_KEY, seed)
  return seed
}

async function writeToKV(articles: Article[]): Promise<void> {
  const { kv } = await import('@vercel/kv')
  await kv.set(KV_KEY, articles)
}

// ── Unified read / write ───────────────────────────────────────────────
async function readArticles(): Promise<Article[]> {
  if (useKV()) return readFromKV()
  if (useSupabase()) return readFromSupabase()
  return readFromJson()
}

async function writeArticles(articles: Article[]): Promise<void> {
  if (useKV()) return writeToKV(articles)
  if (useSupabase()) return writeToSupabase(articles)
  return writeToJson(articles)
}

// ── Public API ─────────────────────────────────────────────────────────
export async function getAllArticles(): Promise<Article[]> {
  const articles = await readArticles()
  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getPublishedArticles(): Promise<Article[]> {
  const now = new Date()
  const articles = await readArticles()
  return articles
    .filter((a) => {
      if (!a.published) return false
      if (a.scheduledAt && new Date(a.scheduledAt) > now) return false
      return true
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function isScheduled(article: Article): boolean {
  return !!(article.published && article.scheduledAt && new Date(article.scheduledAt) > new Date())
}

export async function getFeaturedArticle(): Promise<Article | null> {
  const articles = await getPublishedArticles()
  return articles.find((a) => a.featured) ?? articles[0] ?? null
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await readArticles()
  return articles.find((a) => a.slug === slug && a.published) ?? null
}

export async function getArticleById(id: string): Promise<Article | null> {
  const articles = await readArticles()
  return articles.find((a) => a.id === id) ?? null
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  const articles = await readArticles()
  return articles
    .filter((a) => a.published && slugifyCategory(a.category) === categorySlug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function createArticle(data: Omit<Article, 'id'>): Promise<Article> {
  const articles = await readArticles()
  const article: Article = { ...data, id: crypto.randomUUID() }
  articles.push(article)
  await writeArticles(articles)
  return article
}

export async function updateArticle(
  id: string,
  data: Partial<Omit<Article, 'id'>>
): Promise<Article | null> {
  const articles = await readArticles()
  const index = articles.findIndex((a) => a.id === id)
  if (index === -1) return null
  articles[index] = { ...articles[index], ...data }
  await writeArticles(articles)
  return articles[index]
}

export async function deleteArticle(id: string): Promise<boolean> {
  const articles = await readArticles()
  const filtered = articles.filter((a) => a.id !== id)
  if (filtered.length === articles.length) return false
  await writeArticles(filtered)
  return true
}
