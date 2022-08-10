import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Track {
  id: number
  date: string
  type: string
}
export type IState = {
  loading: boolean
  error: string
  tracks: Record<number, Track>
}

const initialState: IState = {
  loading: false,
  error: '',
  tracks: {},
}

const URL = 'http://localhost:8080/api/periods'
export const getData = createAsyncThunk('getData', async () => {
  const response = await fetch(URL)
  const json = await response.json()
  const data = await json.periodsData
  return data
})

export const postData = createAsyncThunk('postData', async (newTrack) => {
  debugger
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newTrack),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const answer = await response.json()
  return answer
})

const dataSlice = createSlice({
  name: 'period-data',
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [getData.pending]: (state) => {
      state.loading = true
    },
    //@ts-ignore
    [getData.fulfilled]: (state, action) => {
      const data = action.payload
      Object.entries(data).forEach(([key, value]) => {
        state.tracks[Number(key)] = value
      })
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
