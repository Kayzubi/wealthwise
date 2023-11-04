import React from 'react'
import './App.css'
import 'animate.css'
import Navbar from './components/MainComponents/Navbar'
import Header from './components/Header'
import Accolades from './components/Accolades'
function App() {
  return (
    <div className=' font-manrope p-5 bg-black-950 min-h-[100vh] text-white-100 app'>
      <Navbar />
      <Header />
      <Accolades />
    </div>
  )
}

export default App
