import crypto from 'crypto'
import { cookies } from 'next/headers'

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin0011'
const SESSION_SECRET = 'tar_session_secret_2024_american_reveal'

export const ADMIN_COOKIE = 'tar_admin_session'

export function getValidSessionToken(): string {
  return crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}`)
    .digest('hex')
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE)?.value
  return token === getValidSessionToken()
}
