import React, { createContext, useEffect, useState } from 'react'
import { ref, set, get, child } from 'firebase/database'
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
import { useVideos, VideoData } from '../hooks/useVideos.hook'

interface UserState {
  id: string
  email: string
  name?: string
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface SearchValue {
  value: string
}

const INITIAL_USER_STATE = {
  id: '',
  email: '',
  name: ''
}

const INITIAL_VIDEO_STATE = {
  title: '',
  uploaded: '',
  image: '',
  views: '',
  description: ''
}

const AppContext = createContext<any>({})

const AppProvider: any = ({ children }: Props) => {
  // Login context start => {

  const navigate = useNavigate()

  // const { item, saveItem } = useLocalStorage('USER', {})

  const [user, setUser] = useState<UserState>(INITIAL_USER_STATE)
  const [error, setError] = useState<unknown>(null)
  const [favoritesVideos, setFavoritesVideos] = useState<VideoData[]>([])
  const [playVideo, setplayVideo] = useState<VideoData>(INITIAL_VIDEO_STATE)
  const [searchValue, setSearchValue] = useState<SearchValue>({
    value: ''
  })

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
    try {
      await set(ref(database, `users/${userId}`), {
        username: name,
        email: email
      })
    } catch (error) {
      console.error(error)
    }
    console.log(userId, name, email)
  }

  const dbRef = ref(database)

  const getuser = (): void => {
    get(child(dbRef, `users/${user.id}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log('holi', snapshot.val())
          console.log('id', user.id)
          setUser({
            ...user,
            name: snapshot.val().username
          })
        } else {
          console.log('No data available')
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setTimeout(() => {
        navigation('/')
        getuser()
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
        getuser()
      }, 1500)
    } catch (error) {
      setError(error)
    }
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider).then(user => {
      setTimeout(() => {
        navigation('/')
        getuser()
      }, 1500)
    })
  }

  const logout = async (): Promise<void> => {
    await signOut(auth)
    navigate('/login')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (!user.id) {
        setUser({
          ...user,
          id: currentUser?.auth?.currentUser?.uid,
          name: currentUser?.auth?.currentUser?.displayName,
          email: currentUser?.auth?.currentUser?.email
        })
        getuser()
      }
      return () => unsubscribe()
    })
  }, [])

  // Login context end }

  // Videos context start => {

  const { videos, generateFakeVideos } = useVideos()

  useEffect(() => {
    if (!videos.title) {
      setTimeout(() => {
        generateFakeVideos(10)
      }, 1500)
    }
  }, [])

  const addVideo = (video: VideoData): void => {
    const newFavorites = [...favoritesVideos]
    newFavorites.push({
      title: video.title,
      uploaded: video.uploaded,
      views: video.views,
      image: video.image,
      description: video.description
    })

    setFavoritesVideos(newFavorites)
  }

  const videoDetail = (video: VideoData): void => {
    setplayVideo(video)
  }

  // VIdeos context end }

  // Search bar context start => {

  const searchedVideos = videos.filter((video: VideoData) => {
    return video.title.toLowerCase().includes(searchValue.value.toLowerCase())
  })

  // Search bar context end }

  return (
    <AppContext.Provider
      value={{
        login,
        error,
        loginWithGoogle,
        signup,
        logout,
        videos,
        writeUserData,
        user,
        addVideo,
        favoritesVideos,
        videoDetail,
        playVideo,
        navigation,
        searchValue,
        setSearchValue,
        searchedVideos
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
