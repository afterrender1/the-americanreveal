import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL ?? ''
const key = process.env.SUPABASE_ANON_KEY ?? ''

export const supabase = url && key ? createClient(url, key) : null

export function useSupabase(): boolean {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)
}

export async function kvGet<T>(key: string): Promise<T | null> {
  if (!supabase) return null
  const { data } = await supabase
    .from('kv_store')
    .select('value')
    .eq('key', key)
    .single()
  return data?.value ?? null
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  if (!supabase) throw new Error('Supabase not configured')
  await supabase
    .from('kv_store')
    .upsert({ key, value }, { onConflict: 'key' })
}
