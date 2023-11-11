import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/card'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Meet the team" />
        <PageContent content="HTT is a volleyball team that formed in August of 2023. Our players have been playing volleyball recreationally, but we have just recently started playing competitive. Our experience as a team is less than 6 months old, but we are quickly catching up to the competition." />
      </div>
      <div className="flex flex-row justify-between max-w-full">
        <Card
          title="Joshua Lee"
          subtitle="Outside Hitter/Setter"
          img="http://placekitten.com/200/200"
          description="A reliable outside hitter for HTT that can play in any position."
        />
        <Card
          title="Chee Xiong"
          subtitle="Outside Hitter/Left Back"
          img="http://placekitten.com/250/250"
          description="The little giant of HTT. Chee can jump the highest on out of the whole team and is a very strong hitter. His receiving and defense is exceptional which is why he also plays back-row"
        />
        <Card
          title="Shawn Yang"
          subtitle="Setter"
          img="http://placekitten.com/300/300"
          description="Shawn is still a high school student, but has the setting skills to compete with the older setters. He has high-precision sets and can adjust them to give his hitters the right sets to score."
        />
      </div>
    </div>
  )
}
