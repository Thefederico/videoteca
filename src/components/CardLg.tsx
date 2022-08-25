import React, { useContext } from 'react'
import { AppContext } from '../context/App.context'
import { VideoData } from '../hooks/useVideos.hook'

export interface Props {
  video: VideoData
}

const CardLg: React.FC<Props> = ({ video }) => {
  const { addVideo, videoDetail, navigation } = useContext(AppContext)

  const addFavorite = (): void => {
    addVideo(video)
  }

  const playVideo = (): void => {
    videoDetail(video)
    setTimeout(() => {
      navigation('/detail')
    }, 1500)
  }

  return (
    <article className='flex-col w-full h-80 shadow-md rounded-lg flex-none transform transition-all hover:-translate-y-1 hover:shadow-xl'>
      <div className='w-full h-3/5 rounded-t-lg bg-cover'>
        <img
          // width='384'
          className='h-44 w-full'
          src={`${video.image}`}
          alt='VideoThumbnail'
        />
      </div>
      <div className='flex justify-between py-4'>
        <svg
          className='w-8 h-auto cursor-pointer'
          onClick={playVideo}
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
            clipRule='evenodd'
          />
        </svg>
        <svg
          className='w-8 h-auto cursor-pointer'
          onClick={addFavorite}
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <p>{video.title}</p>
    </article>
  )
}

export { CardLg }
