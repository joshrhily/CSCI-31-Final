import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/footer'

export default function Experience() {
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Experience" />
        <PageContent />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
