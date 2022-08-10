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
    logInUser: (state: State, action: PayloadAction<State>) => {
      state.userName = action.payload.userName
      state.userId = action.payload.userId
    },
    logOutUser: (state: State) => {
      state.userName = ''
      state.userId = ''
    },
  },
})

export default userSlice.reducer
export const { logInUser, logOutUser } = userSlice.actions
