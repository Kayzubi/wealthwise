import React from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const WhatYouGet = () => {
  return (
    <div className=' py-12 min-h-[80vh]'>
      <div className=' w-full max-w-7xl mx-auto grid grid-cols-2'>
        <div>
          <h3 className=' text-canary-300 text-xl md:text-sm uppercase flex items-center gap-2'>
            {' '}
            <span className=' w-20 md:w-10 h-[2px] bg-canary-300 inline-block'></span>{' '}
            Benefits you will get
          </h3>
          <h1 className=' text-5xl capitalize leading-normal w-full sm:text-2xl md:text-3xl'>
            See what you <span className=' font-semibold'>get</span> <br /> if
            you
            <span className=' font-semibold'> Trust </span>
            us
          </h1>
        </div>
        <div className=' flex flex-col gap-5 justify-center'>
          <p className=' text-sm font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas
            aliquid omnis officiis rem explicabo amet architecto consequuntur
            quos possimus mollitia ad soluta error voluptatibus dolorum
            aspernatur, laudantium consequatur totam?
          </p>
          <button className=' w-32 rounded-full h-11 border border-white-100 text-canary-300'>
            Learn more
          </button>
        </div>
      </div>
      <div className=' px-4 max-w-7xl mx-auto my-11 border rounded-lg border-r-white-100 relative h-36 flex flex-col justify-center  bg-white-100 bg-opacity-10 backdrop-blur-md'>
        <h1 className=' text-lg font-semibold mb-3'>Faster Investing</h1>
        <small className=' w-[80%] max-w-[500px] text-white-20 block text-xs'>
          Enjoy a 5.00% APY on all your cash. Pay bills, save for big purchases,
          or get in the market in minutes. Our technology lets you automate your
          paycheck and organize cash effortlessly.
        </small>
        <HiOutlineArrowUpRight
          className=' absolute top-2/4 right-4 translate-y-[-50%]'
          size={30}
        />
      </div>
      <div className=' px-4 max-w-7xl mx-auto my-11 border rounded-lg border-r-white-100 relative h-36 flex flex-col justify-center bg-white-100 bg-opacity-10 backdrop-blur-md'>
        <h1 className=' text-lg font-semibold mb-3'>Our Fee is Small</h1>
        <small className=' w-[80%] max-w-[500px] text-white-20 block text-xs'>
          For just 0.25% a year, Automated Investing Account clients get all the
          benefits of always-on automation, expert-curated portfolios, and
          Tax-Loss Harvesting that typically covers our fee more than 11x over.
        </small>
        <HiOutlineArrowUpRight
          className=' absolute top-2/4 right-4 translate-y-[-50%]'
          size={30}
        />
      </div>{' '}
      <div className=' px-4 max-w-7xl mx-auto my-11 border rounded-lg border-r-white-100 relative h-36 flex flex-col justify-center  bg-white-100 bg-opacity-10 backdrop-blur-md'>
        <h1 className=' text-lg font-semibold mb-3'>Your Taxes Pay You</h1>
        <small className=' w-[80%] max-w-[500px] text-white-20 block text-xs'>
          Our software minimizes taxes by trading underperforming assets and
          allowing you to reinvest savings in the market without complex tools.
        </small>
        <HiOutlineArrowUpRight
          className=' absolute top-2/4 right-4 translate-y-[-50%]'
          size={30}
        />
      </div>
    </div>
  )
}

export default WhatYouGet
