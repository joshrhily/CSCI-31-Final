import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Contact" />
        <PageContent />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
