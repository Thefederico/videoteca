import { createSlice } from '@reduxjs/toolkit'

export interface userState {
  id: string | number
  email: string
  name: string
  password: string
}

const initialState: userState = {
  id: '',
  name: '',
  email: '',
  password: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {}
})
