import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  const expected = (process.env.SETUP_SECRET ?? process.env.AUTH_SECRET ?? '').trim()
  if (!expected || secret?.trim() !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY

  if (!url || !key) {
    return NextResponse.json({ error: 'SUPABASE_URL or SUPABASE_ANON_KEY not set' }, { status: 500 })
  }

  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(url, key)

    // Test connection — table must already exist (create via Supabase SQL Editor)
    const { error: testError } = await supabase.from('kv_store').select('key').limit(1)
    if (testError) {
      return NextResponse.json({
        error: 'kv_store table not found. Run this SQL in Supabase SQL Editor first:\n\nCREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value JSONB);\nALTER TABLE kv_store DISABLE ROW LEVEL SECURITY;',
        supabaseError: testError.message
      }, { status: 400 })
    }

    // Seed articles from bundled JSON
    const fs = await import('fs/promises')
    const pathMod = await import('path')
    const articlesFile = pathMod.join(process.cwd(), 'data', 'articles.json')
    const subscribersFile = pathMod.join(process.cwd(), 'data', 'subscribers.json')

    let seeded: string[] = []

    try {
      const articles = JSON.parse(await fs.readFile(articlesFile, 'utf-8'))
      const { error } = await supabase
        .from('kv_store')
        .upsert({ key: 'tar:articles', value: articles }, { onConflict: 'key' })
      if (!error) seeded.push(`articles (${articles.length})`)
    } catch { /* no articles file */ }

    try {
      const subscribers = JSON.parse(await fs.readFile(subscribersFile, 'utf-8'))
      const { error } = await supabase
        .from('kv_store')
        .upsert({ key: 'tar:subscribers', value: subscribers }, { onConflict: 'key' })
      if (!error) seeded.push(`subscribers (${subscribers.length})`)
    } catch { /* no subscribers file */ }

    return NextResponse.json({
      ok: true,
      message: `Setup complete! Seeded: ${seeded.join(', ') || 'nothing (no data files found)'}`,
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
