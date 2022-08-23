import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const CarouselVideos: React.FC<Props> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  )
}

export { CarouselVideos }
