import { configureStore } from '@reduxjs/toolkit'

import dataSliceReducer from './sliceData'

const store = configureStore({
  reducer: {
    dataSliceReducer,
  },
})

export type Store = {
  dataSliceReducer: typeof store.replaceReducer
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
