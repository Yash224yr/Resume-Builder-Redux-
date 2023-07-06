import React from 'react'
import Store from './App/Store'
import { Provider } from 'react-redux'
import { Routes , Route, BrowserRouter} from "react-router-dom"
import Home from './Home'

function App() {


  return (
    <BrowserRouter>
    <Provider store={Store}>


        <Routes>
          <Route  path='/' element={<Home/>} ></Route>
        </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default App