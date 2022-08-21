import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Track {
  id: number
  date: string
  type: string
  severity: string
}
export type IState = {
  loading: boolean
  error: string
  tracks: Record<number, Track>
  users: any[]
}
export interface User {
  login: string
  password: string
}

const initialState: IState = {
  loading: false,
  error: '',
  tracks: [],
  users: [],
}

// const URLRegister = 'https://women-health-backend.herokuapp.com/api/registration'
const URLRegister = '/api/registration'

export const registerUser = createAsyncThunk('registerUser', async (user: User) => {
  const response = await fetch(URLRegister, {
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })
  const responseJSON = await response.json()
  return responseJSON
})

// const URL = 'https://women-health-backend.herokuapp.com/api/periods'
const URL = '/api/periods'

export const getData = createAsyncThunk('getData', async () => {
  const response = await fetch(URL)
  const responseJSON = await response.json()
  return responseJSON
})

export const postData = createAsyncThunk('postData', async (newTrack) => {
  const response = await fetch(URL, {
    body: JSON.stringify(newTrack),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })
  const responseJSON = await response.json()
  return responseJSON
})

const dataSlice = createSlice({
  name: 'period-data',
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [registerUser.fulfilled]: (state, action) => {
      state.users.push(action.payload)
    },
    //@ts-ignore
    [postData.fulfilled]: (state, action) => {
      state.tracks.push(...action.payload)
    },
    //@ts-ignore
    [getData.pending]: (state) => {
      state.loading = true
    },
    //@ts-ignore
    [getData.fulfilled]: (state, action) => {
      state.tracks = action.payload
      state.loading = false
    },
    //@ts-ignore
    [getData.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false
    },
  },
})

export default dataSlice.reducer
export const {} = dataSlice.actions
