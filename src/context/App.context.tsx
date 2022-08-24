import React, { createContext, useEffect, useState } from 'react'
import { ref, set } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth, database } from '../libs/firebase'
import { useLocalStorage } from '../hooks/useLocalStorage.hook'

interface UserState {
  id: string
  email: string
  name?: string
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const USER_STATE = {
  id: '',
  email: '',
  name: ''
}

const AppContext = createContext<any>({})

const AppProvider: any = ({ children }: Props) => {
  const navigate = useNavigate()

  // const { item, saveItem } = useLocalStorage('USER', {})

  const [user, setUser] = useState<UserState>(USER_STATE)
  const [error, setError] = useState<unknown>(null)

  const navigation = (rute: string): void => {
    if (!error) {
      navigate(rute)
    }
  }

  const writeUserData = async (
    userId: string,
    name: string,
    email: string
  ): Promise<void> => {
    await set(ref(database, `users/${userId}`), {
      username: name,
      email: email
    })
  }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setTimeout(() => {
        navigation('/')
      }, 1500)
    } catch (error) {
      setError(error)
    }
  }

  const signup = async (email: string, password: string): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setTimeout(() => {
        navigation('/')
      }, 1500)
    } catch (error) {
      setError(error)
    }
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const logout = async (): Promise<void> => {
    await signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser({
        ...user,
        id: currentUser?.auth?.currentUser?.uid,
        name: currentUser?.auth?.currentUser?.displayName,
        email: currentUser?.auth?.currentUser?.email
      })
      // saveItem(user)
      console.log('user', user)
    })
  }, [])

  return (
    <AppContext.Provider
      value={{ login, error, loginWithGoogle, signup, logout }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
