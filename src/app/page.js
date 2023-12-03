import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
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
