import { NextRequest, NextResponse } from 'next/server'
import { incrementView } from '@/lib/views'

export async function POST(req: NextRequest) {
  const { slug } = await req.json().catch(() => ({}))
  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
  }
  await incrementView(slug)
  return NextResponse.json({ ok: true })
}
