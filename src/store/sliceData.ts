import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Track {
  id: number
  date: string
  type: string
}
export type IState = Record<number, Track>

const initialState: IState = {}

const dataSlice = createSlice({
  name: 'period-data',
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<{ date: string; type: string }>) => {
      let newTrackId = 1
      if (Object.keys(state).length) {
        const existingIdsAsNumbers = Object.keys(state).map((key) => parseInt(key))
        newTrackId = Math.max(...existingIdsAsNumbers) + 1
      }
      state[newTrackId] = {
        id: newTrackId,
        date: action.payload.date,
        type: action.payload.type,
      }
    },

    fillState: (state, action: PayloadAction<{ date: string; type: string }>) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        //@ts-ignore
        state[key] = value
      })

      state = action.payload
    },
  },
})

export default dataSlice.reducer
export const { addTrack, fillState } = dataSlice.actions
