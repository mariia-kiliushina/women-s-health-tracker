import { ConfigProvider } from 'antd'
import { FC } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import PeriodsCalendar from './components/Calendar/index'
import Data from './components/Data/index'
import RoundButton from './components/RoundButton/index'
import Symptoms from './components/Symptoms/index'
import store from './store'

const App: FC = () => {
  return (
    <ConfigProvider direction="ltr">
      <Provider store={store}>
        <div className="container">
          <PeriodsCalendar />
          <RoundButton />
          <Symptoms />
          <Data />
        </div>
      </Provider>
    </ConfigProvider>
  )
}

export default App
