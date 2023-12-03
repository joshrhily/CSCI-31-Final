import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/footer'

export default function News() {
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="News" />
        <PageContent />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
