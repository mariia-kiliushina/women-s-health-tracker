import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Track {
  id: number
  date: string
  type: string
  severity: string
}

export type IState = {
  accessToken: string
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
  accessToken: '',
  loading: false,
  error: '',
  tracks: [],
  users: [],
}

// const URLprefix =
//   (process.env.NODE_ENV || '').trim() === 'development'
//     ? '/api/'
//     : 'https://women-health-backend.herokuapp.com/api/'
const URLprefix = 'https://women-health-backend.herokuapp.com/api/'
// const URLprefix = '/api/'

export const logout = createAsyncThunk('logout', async () => {
  const response = await fetch(URLprefix + 'logout', {
    method: 'GET',
  })
  return response
})

export const refreshToken = createAsyncThunk('refreshToken', async () => {
  const response = await fetch(URLprefix + 'refresh')
  const responseJSON = await response.json()
  return responseJSON
})

export const authenticateUser = createAsyncThunk('authenticateUser', async (user: User) => {
  const response = await fetch(URLprefix + 'authentication', {
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    method: 'POST',
  })

  if (!response.ok) {
    if (response.status === 401) {
      const refreshed = await refreshToken()
      return refreshed
    }
    throw new Error(`${response.status} ${response.statusText}`)
  }
  const responseJSON = await response.json()
  return responseJSON
})

export const registerUser = createAsyncThunk('registerUser', async (user: User) => {
  const response = await fetch(URLprefix + 'register', {
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })
  const responseJSON = await response.json()
  return responseJSON
})

export const getData = createAsyncThunk('getData', async (_, thunkAPI) => {
  const state: any = thunkAPI.getState()
  const token = state.dataSliceReducer.accessToken
  console.log('token')
  console.log(token)
  const response = await fetch(URLprefix + 'periods', {
    headers: {
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InVzZXIxOSIsImlhdCI6MTY2MTMzMzY5NiwiZXhwIjoxNjYxMzM0Mjk2fQ.gf9HttK7RG7sPWBx8s_7Fj45mr8RklRbinnoTVzH_0s`,
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  const responseJSON = await response.json()
  return responseJSON
})

export const postData = createAsyncThunk('postData', async (newTrack, thunkAPI) => {
  const state: any = thunkAPI.getState()
  const token = state.dataSliceReducer.accessToken
  const response = await fetch(URLprefix + 'periods', {
    body: JSON.stringify(newTrack),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
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
    [authenticateUser.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken
    },
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
