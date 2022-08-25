import React from 'react'
import { Card } from '../components/Card'
import { ContentCategory } from '../components/ContentCategory'
import { FeedVideos } from '../components/FeedVideos'

const Home: React.FC = () => {
  return (
    <main className='bg-secondaryDark py-9 text-white'>
      <FeedVideos />
      <section>
        <h2 className='text-xl px-4'>My favorites</h2>
        <ContentCategory>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContentCategory>
      </section>
    </main>
  )
}

export { Home }
