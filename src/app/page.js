import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/card'
import Footer from './components/footer'

import { findCards } from './utils/supabase-client'

export const revalidate = 0

export default async function Home() {
  const cards = await findCards()
  return (
    <body>
      <Navbar />
      <div>
        <PageTitle title="Meet the Team" />
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
      <footer>
        <Footer />
      </footer>
    </body>
  )
}
