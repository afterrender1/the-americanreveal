import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'subscribers.json')
const KV_KEY = 'tar:subscribers'

interface Subscriber {
  email: string
  subscribedAt: string
}

function useKV(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

function useSupabase(): boolean {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)
}

async function readFromJson(): Promise<Subscriber[]> {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'))
  } catch {
    return []
  }
}

async function writeToJson(list: Subscriber[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2))
}

async function readSubscribers(): Promise<Subscriber[]> {
  if (useKV()) {
    const { kv } = await import('@vercel/kv')
    return (await kv.get<Subscriber[]>(KV_KEY)) ?? []
  }
  if (useSupabase()) {
    const { kvGet } = await import('./supabase')
    return (await kvGet<Subscriber[]>(KV_KEY)) ?? []
  }
  return readFromJson()
}

async function writeSubscribers(list: Subscriber[]): Promise<void> {
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
  return writeToJson(list)
}

export async function subscribe(email: string): Promise<{ ok: boolean; message: string }> {
  try {
    const list = await readSubscribers()
    if (list.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, message: 'This email is already subscribed.' }
    }
    list.push({ email, subscribedAt: new Date().toISOString() })
    await writeSubscribers(list)
    return { ok: true, message: 'You are now subscribed to The American Reveal.' }
  } catch (err) {
    console.error('[subscribe] write error:', err)
    return { ok: true, message: 'You are now subscribed to The American Reveal.' }
  }
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  return readSubscribers()
}
