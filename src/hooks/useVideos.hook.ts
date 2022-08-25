import { useState } from 'react'
import { faker } from '@faker-js/faker'

export interface VideoData {
  title: string
  uploaded: Date | string
  views: string | number
  image: string
  description: string
}

const useVideos = (): any => {
  const [videos, setVideos] = useState<VideoData[]>([])

  const generateFakeVideos = (limit: number): VideoData[] => {
    const videos = []
    for (let index = 0; index < limit; index++) {
      videos.push({
        title: faker.random.words(3),
        uploaded: faker.date.between(
          '2020-01-01T00:00:00.000Z',
          '2023-01-01T00:00:00.000Z'
        ),
        views: faker.commerce.price(100, 99999, 0),
        image: faker.image.image(),
        description: faker.commerce.productDescription()
      })
    }

    setVideos(videos)
    return videos
  }

  return { videos, generateFakeVideos }
}

export { useVideos }
