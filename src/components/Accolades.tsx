import React from 'react'
import { HiStar } from 'react-icons/hi'

const Accolades = () => {
  return (
    <div className=' py-12 px-3'>
      <div className=' mx-auto w-full max-w-7xl bg-white-100 bg-opacity-10 p-5 flex justify-between items-center rounded-md backdrop-blur-sm min-h-20 sm:grid grid-cols-2 gap-6 sm:bg-transparent'>
        <span>
          <h1 className=' text-3xl font-extrabold flex items-center sm:text-center w-full'>
            500k+
          </h1>
          <small>Trusted Clients</small>
        </span>
        <span>
          <h1 className=' text-3xl font-extrabold flex items-center sm:text-center w-full'>
            $69B+
          </h1>
          <small>Managed Assets</small>
        </span>
        <span>
          <h1 className=' text-3xl font-extrabold flex items-center sm:text-center w-full'>
            4.8
            <HiStar className=' text-canary-300' />
          </h1>
          <small>Apple App Store</small>
        </span>
        <span>
          <h1 className=' text-3xl font-extrabold flex items-center sm:text-center w-full'>
            4.9
            <HiStar className=' text-canary-300' />
          </h1>
          <small>Googlle Play Store</small>
        </span>
      </div>
    </div>
  )
}

export default Accolades
