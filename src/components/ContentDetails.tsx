import React from 'react'
import { NavLink } from 'react-router-dom'

const ContentDetail: React.FC = () => {
  return (
    <section className='bg-secondaryDark text-white'>
      <div className='w-full h-12 bg-primaryDark shadow-sm'>
        <figure className='flex items-center mb-8 relative h-10 mx-2  flex-shrink-0 cursor-pointer'>
          <NavLink to='/'>
            <svg
              className='w-12 h-auto text-ferrariRed cursor-pointer'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
            </svg>
          </NavLink>
          <p className='hidden lg:block text-white'>Videoteca</p>
        </figure>
      </div>
      <video
        className='w-5/6 h-3/4 m-auto my-6'
        src='https://firebasestorage.googleapis.com/v0/b/prueab-bemaster.appspot.com/o/BigBuckBunny.mp4?alt=media&token=cc2c5171-13c9-4e0a-bb5e-0e842a41c8b2'
        controls
      />
      <div className='px-12b bg-primaryDark shadow-md'>
        {/* <div className='border-t border-gray-50 ' /> */}
        <h2 className='py-8 text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </h2>
        <div className='flex w-full justify-between pb-8 px-6'>
          <p className='w-1/2'>
            <strong>Description:</strong> Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dignissimos eius cumque beatae illum
            commodi maiores est natus, aperiam quisquam. Neque minus obcaecati
            dolore cupiditate accusantium ex numquam eos in atque!
          </p>
          <span className='inline-block'><strong>Views:</strong> 234343</span>
        </div>
      </div>
    </section>
  )
}

export { ContentDetail }
