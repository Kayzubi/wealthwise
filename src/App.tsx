import React from 'react'
import './App.css'
import 'animate.css'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className=' font-manrope p-5 bg-black-950 min-h-[100vh] text-white-100'>
      <Navbar />
      <h1 className=' font-manrope font-extrabold animate__animated animate__bounceInLeft'>
        Hello WealthWise
      </h1>
    </div>
  )
}

export default App
