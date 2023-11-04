import React from 'react'
import { HiPlay, HiStar } from 'react-icons/hi'
import { images } from '../assets'

const Header = () => {
  return (
    <div>
      <div className=' mt-3 p-10 max-w-7xl mx-auto grid grid-cols-2 md:block overflow-hidden'>
        <div className=' pt-10 flex flex-col gap-10 animate__animated animate__fadeInLeft'>
          <h1 className=' text-7xl sm:text-5xl'>
            Your
            <span className=' ml-2 font-semibold text-canary-300'>
              One <br /> Stop
            </span>{' '}
            Financial Solution
          </h1>
          <p className=' text-sm text-white-20'>
            From seamless online banking to expert financial advice, we provide
            the tools and resources you need to manage your financial efficiency
          </p>
          <button className=' flex items-center gap-4 text-lg px-5 py-3 bg-fog-400 text-white-100 w-52 rounded-md'>
            <HiPlay size={40} />
            Explore more
          </button>
          <span className=' mt-auto flex flex-col text-white-20 font-bold gap-2'>
            Ranked on download platforms(4.9+ 5Stars)
            <span className=' flex gap-2 items-center text-canary-300'>
              <HiStar />
              <HiStar />
              <HiStar />
              <HiStar />
              <HiStar />
            </span>
          </span>
        </div>
        <div className=' h-[80vh] w-full'>
          <img
            src={images.homePage}
            alt='home page'
            className=' w-full h-full object-contain animate__animated animate__fadeInUp'
          />
        </div>
      </div>
    </div>
  )
}

export default Header