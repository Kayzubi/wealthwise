import React from 'react'

const Footer = () => {
  return (
    <div className=' min-h-[80vh] bg-black-950 relative py-12 px-3 '>
      <div className=' max-w-7xl mx-auto'>
        <div className=' grid grid-cols-2 md:block pb-10 border-b border-b-white-10'>
          <div className=' mb-6'>
            <h1 className=' font-extrabold text-lg'>
              Wealth<span className=' text-canary-300'>Wise</span>
            </h1>
            <p className=' w-[80%] max-w-[400px] text-sm font-thin mt-3'>
              Sign up for our weekly non-boring newsletter about money, markets,
              and more.
            </p>
          </div>
          <div>
            <div className=' flex items-center gap-5 flex-wrap mb-3'>
              <input
                type='text'
                className=' bg-transparent border border-white-20 rounded-lg outline-none h-12 flex-1 p-3'
              />
              <button className=' flex items-center font-medium gap-4 text-lg px-5 py-2 bg-fog-400 text-white-100 rounded-md md:mx-auto'>
                Subscribe
              </button>
            </div>
            <small className=' text-xs mt-3'>
              By providing your email, you are consenting to receive
              communications from Wealthwise Inc. Visit our Privacy Policy for
              more info, or contact us at privacy@wealthwise.com
            </small>
          </div>
        </div>
        <div className=' grid grid-cols-4 md:grid-cols-2 sm:block py-12 border-b border-b-white-10'>
          <div className=' flex flex-col gap-7 py-10 px-3'>
            <h5 className=' font-bold'>Company</h5>
            <ul className=' text-xs flex flex-col gap-4'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Giveback Program</li>
            </ul>
          </div>
          <div className=' flex flex-col gap-7 py-10 px-3'>
            <h5 className=' font-bold'>Accounts</h5>
            <ul className=' text-xs flex flex-col gap-4'>
              <li>RRSP</li>
              <li>TFSA</li>
              <li>FHSA</li>
              <li>NRA (Non-registered account)</li>
              <li>RESP</li>
              <li>All accounts</li>
            </ul>
          </div>
          <div className=' flex flex-col gap-7 py-10 px-3'>
            <h5 className=' font-bold'>Products</h5>
            <ul className=' text-xs flex flex-col gap-4'>
              <li>Managed Investing</li>
              <li>Self-directed Investing</li>
              <li>Private Credit</li>
              <li>Cash</li>
              <li>Crypto</li>
              <li>Tax</li>
            </ul>
          </div>
          <div className=' flex flex-col gap-7 py-10 px-3'>
            <h5 className=' font-bold'>Social</h5>
            <ul className=' text-xs flex flex-col gap-4'>
              <li>Instagram</li>
              <li>Youtube</li>
              <li> LinkedIn</li>
            </ul>
          </div>
        </div>
        <p className=' text-xs text-center pt-5'>&copy; Copyright, 2023 </p>
      </div>
    </div>
  )
}

export default Footer
