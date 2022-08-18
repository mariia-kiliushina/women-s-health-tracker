import { FC } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import Data from './components/Data/index'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PeriodsCalendar from './components/PeriodsCalendar/index'
import RoundButton from './components/RoundButton/index'
import Sympthoms from './components/Sympthoms/index'
import store from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <PeriodsCalendar />
        <RoundButton />
        <Sympthoms />
        <Data />
      </div>
    </Provider>
  )
}

export default App
