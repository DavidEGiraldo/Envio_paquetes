import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Orders from './components/Orders'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewOrder from './components/NewOrder'
import EditOrder from './components/EditOrder'
import Layout from './components/Layout'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route exact index element={<Orders />}></Route>
            <Route exact path='editOrder/:id' element={<EditOrder />}></Route>
            <Route exact path='newOrder' element={<NewOrder />}></Route>
          </Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
