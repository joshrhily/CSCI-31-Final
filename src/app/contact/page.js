import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/footer'
import CardForm from '../components/cardFrom'

export default function About() {
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Contact Us" />
        <PageContent content="Want to get in touch with us? Please feel free to fill out the form below with any quesitons or feedback you have to offer!" />
        <CardForm />
        <PageContent content="Looking for a place to play volleyball? You can catch us at the tennis courts in Oroville California from 6pm to 9pm on weekdays!" />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
