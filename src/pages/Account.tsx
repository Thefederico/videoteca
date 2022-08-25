import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/App.context'
import { FavoritesVideos } from '../components/FavoritesVideos'

interface FormState {
  name: string
}

const Account: React.FC = () => {
  const { user, writeUserData } = useContext(AppContext)

  const [inputValue, setInputValue] = useState<FormState>({
    name: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    writeUserData(user.id, inputValue.name, user.email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    document.title = 'account'
  }, [])

  return (
    <section className='w-full h-screen bg-secondaryDark p-8 text-white '>
      <h1 className='text-center text-2xl'>Edit Account</h1>
      <form
        onSubmit={handleSubmit}
        className='flex my-9 items-center justify-center'
      >
        <label>
          <span className='text-white text-lg mr-4'>Name</span>
          <input
            className='bg-secondaryDark h-10 p-2 rounded-md outline-none shadow-sm text-textInputField'
            type='text'
            name='name'
            value={inputValue.name}
            onChange={handleChange}
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
        <FavoritesVideos />
      </div>
    </section>
  )
}

export { Account }
