import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface State {
  userName: string
  userId: string
}

const initialState: State = { userName: '', userId: '' }

const userSlice = createSlice({
  name: 'period-user',
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<State>) => {
      state = action.payload
    },
  },
})

export default userSlice.reducer
export const { logUser } = userSlice.actions
