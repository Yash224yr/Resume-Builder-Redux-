import React from 'react'
import Store from './App/Store'
import { Provider } from 'react-redux'
import { Routes , Route, BrowserRouter} from "react-router-dom"
import Home from './Home'
import Header from './Header'
import Register from './Register/Register'
import Login from './Register/Login'
import HomeDefault from './HomeDefault'


function App() {


  return (
    <BrowserRouter>
    <Header></Header>
    <Provider store={Store}>
        <Routes>
          <Route  path='/' element={<HomeDefault/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
        </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default App