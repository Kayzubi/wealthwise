import React from 'react'

const PortfolioModule = () => {
  return (
    <div className=' grid grid-cols-2 py-12 md:block'>
      <div className=' bg-black-950 h-[80vh] relative z-20'></div>
      <div className=' p-10 flex flex-col gap-9 justify-between h-[80%] md:text-center'>
        <h1 className=' text-5xl font-medium'>
          Intelligent <br /> investment tailored to <br /> your{' '}
          <span className=' text-canary-300 font-semibold'>needs</span> and{' '}
          <span className=' text-canary-300 font-semibold'>goals</span>
        </h1>
        <p className=' w-[80%] md:w-full'>
          Answer a brief questionnaire, and our platform will create a custom
          portfolio of cost-effective index funds across 17 global asset
          classes. Our automated system takes care of all the trading,
          rebalancing, and other operational tasks, ensuring the long-term
          growth of your wealth.
        </p>
        <button className=' flex items-center font-medium gap-4 text-lg px-5 py-3 bg-fog-400 text-white-100 w-40 rounded-md md:mx-auto'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default PortfolioModule
