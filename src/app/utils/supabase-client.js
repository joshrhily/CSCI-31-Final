import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://icsbgxejxcvkvlkxatue.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('cards').insert(card)
}

export async function findCards() {
  const supabase = getClient()
  // implements https://supabase.com/docs/reference/javascript/select
  const { data: cards, error } = await supabase.from('cards').select()
  return cards
}
