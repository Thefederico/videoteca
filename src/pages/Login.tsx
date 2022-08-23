import React, { useEffect } from 'react'

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  return (
    <main className='font-Montserrat flex flex-col h-screen justify-center items-center bg-prymaryDark'>
      <svg
        className='h-auto w-24 text-ferrariRed mb-11 lg:hidden'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
      </svg>
      <form className='flex my-4 h-96 flex-col'>
        <label className='my-4' htmlFor=''>
          <span className='mb-2 block text-white'>Email</span>
          <input
            className='bg-secondaryDark h-8 p-2 rounded-md outline-none shadow-sm text-textInputField'
            type='text'
            placeholder='example@email.com'
            required
          />
        </label>
        <label className='my-4' htmlFor=''>
          <span className='mb-2 block text-white'>Password</span>
          <input
            className='bg-secondaryDark h-8 p-2 rounded-md outline-none shadow-sm text-textInputField'
            type='text'
            placeholder='********'
            required
          />
        </label>
        <button
          className='mt-10 h-14 rounded-md shadow-md bg-ferrariRed text-white'
          type='submit'
        >
          Login
        </button>
      </form>
    </main>
  )
}

export { Login }
