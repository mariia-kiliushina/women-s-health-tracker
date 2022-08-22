import { ConfigProvider } from 'antd'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LogIn from '#components/LogIn'

import './App.css'
// import RoundButton from './components/RoundButton/index'
// import PeriodsCalendar from './components/Calendar/index'
import Data from './components/Data/index'
import SignUp from './components/SignUp/index'
// import Symptoms from './components/Symptoms/index'
import store from './store'

const App: FC = () => {
  const isLogged = true
  // const isLogged = false
  return (
    <ConfigProvider direction="ltr">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {!isLogged && <Route path="/" element={<LogIn />} />}
            {isLogged && <Route path="/" element={<Data />} />}
            <Route path="sign-up" element={<SignUp />} />
            {/* <Route path="/" element={<LogIn />} />
            <Route path="/calendar" element={<PeriodsCalendar />} /> */}
            {/* <div className="container">
              <PeriodsCalendar />
              <RoundButton />
              <Symptoms />
              <Data />
            </div> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  )
}

export default App
