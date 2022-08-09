import { FC } from 'react'
import { Provider } from 'react-redux'

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Input from './components/Input/index'
import store from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Input />
      </div>
    </Provider>
  )
}

export default App
