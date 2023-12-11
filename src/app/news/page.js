import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/footer'
import NewsBlock from '../components/newsblock'
import { findNews } from '../utils/supabase-client'

export const revalidate = 0

export default async function News() {
  const newsBlock = await findNews()
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="News" />
        <div className="flex justify-between">
          {newsBlock.map((news, idx) => (
            <NewsBlock key={idx} title={news.title} description={news.content} />
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
