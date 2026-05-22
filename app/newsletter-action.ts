'use server'

import { subscribe } from '@/lib/subscribers'
import { sendNewSubscriberAlert } from '@/lib/mailer'

export async function subscribeAction(
  _prev: { ok: boolean; message: string } | null,
  formData: FormData
): Promise<{ ok: boolean; message: string }> {
  const email = (formData.get('email') as string)?.trim().toLowerCase()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: 'Please enter a valid email address.' }
  }

  const result = await subscribe(email)

  if (result.ok) {
    sendNewSubscriberAlert(email).catch(() => {})
  }

  return result
}
