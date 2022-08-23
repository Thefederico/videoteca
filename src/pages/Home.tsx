import React from 'react'
import { Card } from '../components/Card'
import { CarouselVideos } from '../components/CarouselVideos'

const Home: React.FC = () => {
  return (
    <main className='bg-secondaryDark'>
      <section>
        <h2>Latest videos</h2>
        <CarouselVideos>
          <Card />
          <Card />
        </CarouselVideos>
      </section>
    </main>
  )
}

export { Home }
