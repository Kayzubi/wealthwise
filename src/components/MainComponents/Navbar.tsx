import React, { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineXCircle } from 'react-icons/hi'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <div className=' px-3'>
      <div className=' w-full max-w-7xl mx-auto p-3 rounded-md  relative'>
        <div className=' bg-gradient-to-b from-white-100 backdrop-blur-lg via-transparent to-white-100 bg-opacity-5 absolute h-full w-full opacity-20 left-0 top-0 rounded-md z-0'></div>
        <div className=' flex justify-between items-center z-10 relative'>
          <h1 className=' font-extrabold text-lg'>
            Wealth<span className=' text-canary-300'>Wise</span>
          </h1>
          <div className=' flex gap-3 items-center md:hidden text-sm'>
            <span>Service</span>
            <span>Blog</span>
            <span>About Us</span>
            <span>Contact</span>
            <span>Project</span>
          </div>
          <div className=' flex gap-2 items-center'>
            <button className=' px-5 py-2 rounded-md md:hidden'>Log in</button>
            <button className='  px-5 py-2 rounded-md md:hidden bg-fog-400'>
              Get Started
            </button>
            <span
              onClick={() => {
                setNavOpen(true)
                console.log('open')
              }}
              className=' p-2 cursor-pointer hidden md:inline-block'>
              <HiOutlineMenuAlt3 />
            </span>
          </div>
        </div>
        {navOpen && (
          <div className=' fixed h-[100vh] w-[100vw] left-0 top-0 bg-black-950 flex justify-center items-center z-50'>
            <button
              onClick={() => setNavOpen(false)}
              className=' text-xl absolute top-5 right-5 '>
              <HiOutlineXCircle size={40} />
            </button>
            <div
              className={` flex flex-col gap-4 items-start text-lg  animate__animated ${
                navOpen ? 'animate__backInDown' : 'animate__backOutUp'
              } text-center`}>
              <span className=' w-full'>Service</span>
              <span className=' w-full'>Blog</span>
              <span className=' w-full'>About Us</span>
              <span className=' w-full'>Contact</span>
              <span className=' w-full'>Project</span>
              <div>
                <button className=' px-5 py-2 rounded-md w-full mb-3'>
                  Log in
                </button>
                <button className='  px-5 py-2 rounded-md w-full bg-fog-400'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
