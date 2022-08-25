import React, { useContext } from 'react'
import { AppContext } from '../context/App.context'
import { CardLg } from './CardLg'
import { VideoData } from '../hooks/useVideos.hook'

const FeedVideos: React.FC = () => {
  const { searchedVideos } = useContext(AppContext)

  const renderCard = (): JSX.Element[] => {
    return searchedVideos.map((video: VideoData, index: number) => {
      return <CardLg key={index} video={video} />
    })
  }

  return (
    <section className='p-16 sm:flex sm:flex-col lg:grid gap-4 lg:grid-cols-3 lg:grid-flow-row-dense place-items-center'>
      {!searchedVideos ? <p>Loading...</p> : renderCard()}
    </section>
  )
}

export { FeedVideos }
