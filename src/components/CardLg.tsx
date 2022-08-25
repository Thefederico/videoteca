import React from 'react'

const CardLg: React.FC = () => {
  return (
    <article className='flex-col w-64 lg:w-96 h-72 shadow-md rounded-lg flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
      <div className='w-full h-3/5 rounded-t-lg bg-[url("https://random.imagecdn.app/500/150")] bg-cover' />
      <div className='flex justify-between py-4'>
        <svg
          className='w-6 h-6'
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
          className='w-6 h-6'
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
      <p>Titulo descriptivo</p>
    </article>
  )
}

export { CardLg }
