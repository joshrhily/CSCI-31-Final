import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/cardFrom'

export default function About() {
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="About" />
        <PageContent />
      </div>
      <div>
        <CardForm />
      </div>
    </div>
  )
}
