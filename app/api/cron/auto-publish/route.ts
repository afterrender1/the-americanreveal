import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createArticle } from '@/lib/articles'
import { slugify } from '@/lib/utils'

const CATEGORIES = ['Politics', 'Economy', 'National Security', 'Foreign Policy', 'Justice', 'Culture']

export const maxDuration = 300

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const newsApiKey = process.env.NEWS_API_KEY
  const anthropicKey = process.env.ANTHROPIC_API_KEY
  if (!newsApiKey || !anthropicKey) {
    return NextResponse.json({ error: 'NEWS_API_KEY or ANTHROPIC_API_KEY not set' }, { status: 500 })
  }

  // Fetch top US political headlines
  const newsRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=politics&pageSize=5&apiKey=${newsApiKey}`
  )
  const newsData = await newsRes.json()
  const headlines: Array<{ title: string; description: string | null; urlToImage: string | null }> =
    (newsData.articles ?? []).slice(0, 5)

  if (headlines.length === 0) {
    return NextResponse.json({ ok: false, message: 'No headlines found' })
  }

  const client = new Anthropic({ apiKey: anthropicKey })
  const created: string[] = []
  const failed: string[] = []

  for (const headline of headlines) {
    try {
      const message = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        messages: [
          {
            role: 'user',
            content: `You are an investigative journalist for "The American Reveal", a US political news publication.

Write a 1500-word SEO-optimized investigative article about this news story:

Headline: "${headline.title}"
Context: "${headline.description ?? ''}"

Requirements:
- Hard-hitting investigative journalism tone
- 1500 words minimum
- Use <h2> subheadings, <p> paragraphs, <strong> for emphasis
- Include background context, analysis, and implications
- SEO-optimized title (include keywords)
- 150-character excerpt for previews

Respond ONLY with valid JSON (no markdown, no code fences):
{
  "title": "SEO-optimized article title",
  "slug": "url-friendly-slug-max-60-chars",
  "excerpt": "Compelling 150-character excerpt",
  "category": "one of: Politics / Economy / National Security / Foreign Policy / Justice / Culture",
  "content": "<h2>Subheading</h2><p>Full article HTML here...</p>"
}`,
          },
        ],
      })

      const text = message.content[0].type === 'text' ? message.content[0].text : ''
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) throw new Error('No JSON in response')

      const parsed = JSON.parse(jsonMatch[0])
      if (!parsed.title || !parsed.content) throw new Error('Missing title or content')

      const category = CATEGORIES.includes(parsed.category) ? parsed.category : 'Politics'

      await createArticle({
        title: parsed.title,
        slug: parsed.slug ?? slugify(parsed.title),
        excerpt: parsed.excerpt ?? '',
        content: parsed.content,
        category,
        author: 'Editorial Staff',
        publishedAt: new Date().toISOString(),
        published: false, // saved as draft — review before publishing
        featured: false,
        coverImage: headline.urlToImage ?? undefined,
      })

      created.push(parsed.title)
    } catch (err) {
      console.error('[auto-publish] failed for:', headline.title, err)
      failed.push(headline.title)
    }
  }

  return NextResponse.json({ ok: true, created, failed })
}
