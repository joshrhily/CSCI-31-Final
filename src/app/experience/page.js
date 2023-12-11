import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/footer'
import MyTable from '../components/table'
import { findTourneys } from '../utils/supabase-client'

export const revalidate = 0

const defaultRecords = [
  {
    tournament: 'Tournament Name',
    played: 'Date Played',
    placement: 'Final Placement',
  },
]

const cardTableColums = [
  {
    title: 'Tournaments',
    key: 'tournament',
  },
  {
    title: 'Played',
    key: 'played',
  },
  {
    title: 'Placement',
    key: 'placement',
  },
]

export default async function Experience() {
  const tourneys = await findTourneys()
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Experience" />
        <MyTable columns={cardTableColums} records={tourneys} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
