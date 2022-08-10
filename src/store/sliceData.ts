import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Track {
  id: number
  date: string
  type: string
}
export type IState = Record<number, Track>

const initialState: IState = {
  1: { id: 1, date: '23.09.2022', type: 'Had flows' },
}

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
  },
})

export default dataSlice.reducer
export const { addTrack } = dataSlice.actions
