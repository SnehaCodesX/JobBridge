import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import AdminLogin from './Pages/Auth/AdminLogin/AdminLogin'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <HomePage></HomePage>
    <AdminLogin></AdminLogin>
    </>
  )
}

export default App
