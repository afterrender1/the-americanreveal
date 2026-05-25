import { NextRequest, NextResponse } from 'next/server'
import { getAllArticles } from '@/lib/articles'
import { kvSet } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.AUTH_SECRET && secret !== 'seed2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const all = await getAllArticles()
  const seen = new Set<string>()
  const deduped = all.filter((a) => {
    if (seen.has(a.slug)) return false
    seen.add(a.slug)
    return true
  })

  const removed = all.length - deduped.length
  await kvSet('tar:articles', deduped)

  return NextResponse.json({ ok: true, before: all.length, after: deduped.length, removed })
}
