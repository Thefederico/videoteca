import React, { useContext } from 'react'
import { AppContext } from '../context/App.context'
import { VideoData } from '../hooks/useVideos.hook'
import { Card } from './Card'
import { ContentCategory } from './ContentCategory'

const FavoritesVideos: React.FC = () => {
  const { favoritesVideos } = useContext(AppContext)

  const renderCard = (): JSX.Element[] => {
    return favoritesVideos.map((video: VideoData, index: number) => {
      return <Card key={index} video={video} />
    })
  }

  return (
    <section>
      <h2>See later</h2>
      <ContentCategory>{renderCard()}</ContentCategory>
    </section>
  )
}

export { FavoritesVideos }
