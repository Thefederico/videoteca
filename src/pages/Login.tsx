import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/App.context'
import googleIcon from '../assets/google.png'

interface FormState {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login, error, loginWithGoogle } = useContext(AppContext)

  const [inputValues, setInputValues] = useState<FormState>({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    await login(inputValues.email, inputValues.password)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const handleGoogleSignin = async (): Promise<void> => {
    await loginWithGoogle()
  }

  useEffect(() => {
    document.title = 'Login'
  }, [])

  return (
    <main className='font-Montserrat flex flex-col h-screen justify-center items-center bg-primaryDark'>
      <svg
        className='h-auto w-24 text-ferrariRed mb-11 lg:hidden'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
      </svg>
      {error && <p className='text-white font-bold'>{error.message}</p>}
      <form onSubmit={handleSubmit} className='flex my-4 h-96 flex-col'>
        <label className='my-4' htmlFor=''>
          <span className='mb-2 block text-white'>Email</span>
          <input
            className='bg-secondaryDark h-8 p-2 rounded-md outline-none shadow-sm text-textInputField'
            type='email'
            name='email'
            placeholder='example@email.com'
            value={inputValues.email}
            required
            onChange={handleChange}
          />
        </label>
        <label className='my-4' htmlFor=''>
          <span className='mb-2 block text-white'>Password</span>
          <input
            className='bg-secondaryDark h-8 p-2 rounded-md outline-none shadow-sm text-textInputField'
            type='password'
            name='password'
            placeholder='********'
            value={inputValues.password}
            required
            onChange={handleChange}
          />
        </label>
        <div>
          <img
            className='cursor-pointer m-auto my-2'
            width={48}
            src={googleIcon}
            alt='google'
            onClick={handleGoogleSignin}
          />
        </div>
        <button
          className='mt-10 h-14 rounded-md shadow-md bg-ferrariRed text-white'
          type='submit'
        >
          Login
        </button>
      </form>
      <NavLink
        to='/signup'
        className='text-white text-md hover:underline hover:font-bold cursor-pointer'
      >
        Signup
      </NavLink>
    </main>
  )
}

export { Login }
