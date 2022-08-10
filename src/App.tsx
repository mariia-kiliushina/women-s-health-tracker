import { FC } from 'react'
import { Provider } from 'react-redux'

import Data from './components/Data/index'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Input from './components/Input/index'
import store from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Input />
        <Data />
      </div>
    </Provider>
  )
}

export default App
