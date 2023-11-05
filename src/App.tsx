import React from 'react'
import './App.css'
import 'animate.css'
import Navbar from './components/MainComponents/Navbar'
import Header from './components/Header'
import Accolades from './components/Accolades'
import PortfolioModule from './components/PortfolioModule'
import WhatYouGet from './components/WhatYouGet'
import Saving from './components/Saving'
import Footer from './components/Footer'
function App() {
  return (
    <div className=' font-manrope pt-5 bg-black-950 min-h-[100vh] text-white-100 app'>
      <Navbar />
      <Header />
      <Accolades />
      <PortfolioModule />
      <div className=' py-12 min-h-[60vh] text-center'>
        <h3 className=' text-canary-300 text-2xl uppercase flex items-center justify-center gap-2 sm:text-lg'>
          {' '}
          <span className=' w-20 h-[2px] bg-canary-300 inline-block'></span> Why
          choose us{' '}
          <span className=' w-20 h-[2px] bg-canary-300 inline-block'></span>
        </h3>
        <h1 className=' text-5xl mx-auto max-w-7xl py-8 leading-normal w-full sm:text-2xl md:text-3xl'>
          Explore a diverse range of funds, including clean energy, tech, and
          crypto, and we'll manage the{' '}
          <span className=' font-semibold'>trading</span> and
          <span className=' font-semibold'> portfolio rebalancing </span> on
          your behalf
        </h1>
      </div>
      <WhatYouGet />
      <Saving />
      <Footer />
    </div>
  )
}

export default App
