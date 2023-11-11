import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/card'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://icsbgxejxcvkvlkxatue.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljc2JneGVqeGN2a3Zsa3hhdHVlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY5Mjc5NCwiZXhwIjoyMDE1MjY4Nzk0fQ.qG3UBl0JpkwZWs9BTRn6Qftc5Vv_ucI5ebR9OOjPSBw'
)

export const revalidate = 0

export default async function Home() {
  const { data: cards, error } = await supabase.from('cards').select()

  console.log('cards: ', cards)

  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Meet the team" />
        <PageContent content="Welcome to HTT's web site! HTT has been playing competitively since August 2023. Although we are a relatively new team, we all have over a year of experience playing recreationally. HTT stands a Hmong term for 'Fresh off the boat.' One of the captains, Keng, came up with the team name and the team agreed to it because it was unique and funny. Most of our team members have been friends since high school, so our team chemistry is solid." />
      </div>
      <div className="flex flex-wrap justify-center space-between min-w-full">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}
