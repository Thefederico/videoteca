import React from 'react'
import { Card } from '../components/Card'
import { ContentCategory } from '../components/ContentCategory'

const Account: React.FC = () => {
  return (
    <section className='w-full h-screen bg-secondaryDark p-8 text-white '>
      <h1 className='text-center text-2xl'>Edit Account</h1>
      <form className='flex my-9 items-center justify-center'>
        <label>
          <span className='text-white text-lg mr-4'>Name</span>
          <input
            className='bg-secondaryDark h-10 p-2 rounded-md outline-none shadow-sm text-textInputField'
            type='text'
            name='name'
            placeholder='Your name'
          />
        </label>
        <button
          className='mx-4 w-12 bg-ferrariRed rounded-sm shadow-sm'
          type='submit'
        >
          edit
        </button>
      </form>
      <div>
        <h2 className='text-xl'>Your favorites</h2>
        <ContentCategory>
          <Card />
          <Card />
          <Card />
          <Card />
        </ContentCategory>
      </div>
    </section>
  )
}

export { Account }
