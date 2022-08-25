import React from 'react'
import { CardLg } from './CardLg'

const FeedVideos: React.FC = () => {
  return (
    <section className='p-16 sm:flex sm:flex-col lg:grid gap-2 lg:grid-cols-3 lg:grid-flow-row-dense place-items-center'>
      <CardLg />
      <CardLg />
      <CardLg />
      <CardLg />
      <CardLg />
      <CardLg />
    </section>
  )
}

export { FeedVideos }
