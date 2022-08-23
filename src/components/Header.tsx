import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='flex top-0 z-50 sticky px-4 py-2 shadow-sm bg-prymaryDark'>
      <figure className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <svg
          className='w-12 h-auto text-ferrariRed cursor-pointer'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
        </svg>
      </figure>
      <form className='flex flex-1 items-center space-x-2 border border-gray-700 rounded-sm bg-secondaryDark px-3 py-1'>
        <svg
          className='w-6 h-auto text-textInputField'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
        <input
          type='text'
          className='flex-1 bg-transparent outline-none text-textInputField'
          placeholder='Search video'
        />
        <button type='submit' hidden />
      </form>
      <section className='lg:ml-96'>
        <svg
          className='w-12 h-auto text-veryLightPink cursor-pointer'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
            clipRule='evenodd'
          />
        </svg>
      </section>
    </header>
  )
}

export { Header }
