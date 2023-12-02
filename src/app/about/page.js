import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/cardFrom'
import MyTable from '../components/table'
import { findCards } from '../utils/supabase-client'
import Footer from '../components/footer'

export const revalidate = 0

const cardTableColums = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Subltitle',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'image',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

export default async function About() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="About" />
        <PageContent />
        <CardForm />
        <MyTable columns={cardTableColums} records={cards} />
      </div>
      <Footer />
    </div>
  )
}
