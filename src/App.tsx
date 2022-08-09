import { FC } from 'react'
// import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Input from '#components/Input'

const App: FC = () => {
  return (
    // <Provider store={store}>
    <Router>
      <div className="main">
        <Route path="/" element={Input} />
      </div>
    </Router>
    // </Provider>
  )
}

export default App
