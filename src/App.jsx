import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Orders from './components/Orders'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewOrder from './components/NewOrder'
import EditOrder from './components/EditOrder'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Orders />}></Route>
          <Route exact path='/newOrder' element={<NewOrder />}></Route>
          <Route exact path='/editOrder' element={<EditOrder />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
