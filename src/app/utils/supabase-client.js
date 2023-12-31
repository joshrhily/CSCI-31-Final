import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://icsbgxejxcvkvlkxatue.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

export async function insertFormData(formData) {
  const supabase = getClient()
  const { error } = await supabase.from('feedback').insert(formData)
}

export async function findCards() {
  const supabase = getClient()
  // implements https://supabase.com/docs/reference/javascript/select
  const { data: cards, error } = await supabase.from('cards').select()
  return cards
}

export async function findAboutContent() {
  const supabase = getClient()
  const { data: content, error } = await supabase.from('aboutContent').select()
  return content
}

export async function findTourneys() {
  const supabase = getClient()
  const { data: tourneys, error } = await supabase.from('tourneys').select()
  return tourneys
}

export async function findNews() {
  const supabase = getClient()
  const { data: news, error } = await supabase.from('news').select()
  return news
}
