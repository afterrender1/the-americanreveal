const KV_KEY = 'tar:views'

async function readViews(): Promise<Record<string, number>> {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    const { kvGet } = await import('./supabase')
    return (await kvGet<Record<string, number>>(KV_KEY)) ?? {}
  }
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    const { kv } = await import('@vercel/kv')
    return (await kv.get<Record<string, number>>(KV_KEY)) ?? {}
  }
  return {}
}

async function writeViews(views: Record<string, number>): Promise<void> {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    const { kvSet } = await import('./supabase')
    await kvSet(KV_KEY, views)
    return
  }
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    const { kv } = await import('@vercel/kv')
    await kv.set(KV_KEY, views)
  }
}

export async function incrementView(slug: string): Promise<void> {
  try {
    const views = await readViews()
    views[slug] = (views[slug] ?? 0) + 1
    await writeViews(views)
  } catch {
    // Never block article rendering over a view count failure
  }
}

export async function getAllViews(): Promise<Record<string, number>> {
  try {
    return await readViews()
  } catch {
    return {}
  }
}
