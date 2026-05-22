'use server'

import { addComment } from '@/lib/comments'
import { revalidatePath } from 'next/cache'

export async function submitCommentAction(
  _prev: { ok: boolean; error?: string } | null,
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  const slug = (formData.get('slug') as string)?.trim()
  const name = (formData.get('name') as string)?.trim()
  const content = (formData.get('content') as string)?.trim()

  if (!name || name.length < 2) return { ok: false, error: 'Please enter your name.' }
  if (!content || content.length < 10) return { ok: false, error: 'Comment must be at least 10 characters.' }
  if (content.length > 2000) return { ok: false, error: 'Comment is too long (max 2000 characters).' }
  if (!slug) return { ok: false, error: 'Invalid article.' }

  await addComment(slug, name, content)
  revalidatePath(`/article/${slug}`)
  return { ok: true }
}
