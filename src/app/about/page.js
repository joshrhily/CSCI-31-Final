import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/footer'
import AboutContent from '../components/aboutContent'
import { findAboutContent } from '../utils/supabase-client'

export const revalidate = 0

export default async function About() {
  const aboutContent = await findAboutContent()
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="About Us" />
      </div>
      <div id="image" className="flex justify-center my-16 border-y-2 border-red-600 min-w-full">
        <img src="http://placekitten.com/1500/400"></img>
      </div>
      <div className="flex justify-evenly">
        {aboutContent.map((content, idx) => (
          <AboutContent key={idx} title={content.title} content={content.content} />
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
