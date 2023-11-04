import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="m-12 bg-gray-100 p-4 border-4 border-red-600">
        <PageTitle title="Services" />
        <PageContent />
      </div>
    </div>
  )
}
