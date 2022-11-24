import React from 'react'
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='wrapper'>
        <Header />
        <Aside />
        <Outlet />
        <Footer></Footer>
    </div>
  )
}
