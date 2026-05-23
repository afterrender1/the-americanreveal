import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'comments.json')
const KV_KEY = 'tar:comments'

export interface Comment {
  id: string
  articleSlug: string
  name: string
  content: string
  createdAt: string
}

function useKV(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

function useSupabase(): boolean {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)
}

async function readAll(): Promise<Comment[]> {
  if (useKV()) {
    const { kv } = await import('@vercel/kv')
    return (await kv.get<Comment[]>(KV_KEY)) ?? []
  }
  if (useSupabase()) {
    const { kvGet } = await import('./supabase')
    return (await kvGet<Comment[]>(KV_KEY)) ?? []
  }
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'))
  } catch {
    return []
  }
}

async function writeAll(list: Comment[]): Promise<void> {
  if (useKV()) {
    const { kv } = await import('@vercel/kv')
    await kv.set(KV_KEY, list)
    return
  }
  if (useSupabase()) {
    const { kvSet } = await import('./supabase')
    await kvSet(KV_KEY, list)
    return
  }
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
    await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2))
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'code' in err && (err as NodeJS.ErrnoException).code === 'EROFS') {
      throw new Error('Storage not configured.')
    }
    throw err
  }
}

export async function getComments(slug: string): Promise<Comment[]> {
  const all = await readAll()
  return all
    .filter((c) => c.articleSlug === slug)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function addComment(
  slug: string,
  name: string,
  content: string
): Promise<Comment> {
  const all = await readAll()
  const comment: Comment = {
    id: crypto.randomUUID(),
    articleSlug: slug,
    name: name.trim(),
    content: content.trim(),
    createdAt: new Date().toISOString(),
  }
  all.push(comment)
  await writeAll(all)
  return comment
}

export async function getAllComments(): Promise<Comment[]> {
  const all = await readAll()
  return all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function deleteComment(id: string): Promise<void> {
  const all = await readAll()
  await writeAll(all.filter((c) => c.id !== id))
}
