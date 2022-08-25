import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const ContentCategory: React.FC<Props> = ({ children }) => {
  return (
    <section className='w-auto h-72 items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      {children}
    </section>
  )
}

export { ContentCategory }
