import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/App.context'
import { Card } from '../components/Card'
import { FavoritesVideos } from '../components/FavoritesVideos'
import { FeedVideos } from '../components/FeedVideos'

const Home: React.FC = () => {
  const { user } = useContext(AppContext)

  useEffect(() => {
    document.title = 'Videoteca'
  }, [])

  return (
    <main className='bg-secondaryDark py-9 text-white'>
      {user?.name && (
        <h1 className='text-center text-2xl '>Hola {user?.name}</h1>
      )}
      <FeedVideos />
      <section className='px-8'>
        <FavoritesVideos />
      </section>
    </main>
  )
}

export { Home }
