import React, { useState } from 'react'
import { images } from '../assets'

const savingOptions = [
  {
    title: 'Education',
    accounts: [
      {
        name: 'TFSA',
        desc: 'A felexibe account that lets you invest and save tax-free',
      },
      {
        name: 'RESP',
        desc: 'Save and access government benefits form your chids education',
      },
      {
        name: 'NRA',
        desc: 'Invest with maximum flexibility',
      },
    ],
  },
  {
    title: 'Retirement',
    accounts: [
      {
        name: 'RRSP',
        desc: 'A tax-advantaged retirement account for individuals or couples.',
      },
      {
        name: 'TFSA',
        desc: 'A felexibe account that lets you invest and save tax-free',
      },
      {
        name: 'LIRA',
        desc: 'Leave your job? You will want to take your passion with you',
      },
    ],
  },
  {
    title: 'Home',
    accounts: [
      {
        name: 'RRSP',
        desc: 'A tax-advantaged retirement account for individuals or couples.',
      },
      {
        name: 'TFSA',
        desc: 'A felexibe account that lets you invest and save tax-free',
      },
      {
        name: 'FSHA',
        desc: 'Save up to $40,000 towards a down payment tax-free',
      },
    ],
  },
  {
    title: 'All',
    accounts: [
      {
        name: 'RRSP',
        desc: 'A tax-advantaged retirement account for individuals or couples.',
      },
      {
        name: 'TFSA',
        desc: 'A felexibe account that lets you invest and save tax-free',
      },
      {
        name: 'LIRA',
        desc: 'Leave your job? You will want to take your passion with you',
      },
    ],
  },
]

const Saving = () => {
  const [activeOption, setactiveOption] = useState(0)

  return (
    <div>
      <div className=' mt-3 p-10 max-w-7xl mx-auto grid grid-cols-2 md:block overflow-hidden'>
        <div className=' h-[80vh] w-full'>
          <img
            src={images.savingsPage}
            alt='home page'
            className=' w-full h-full object-contain animate__animated animate__fadeInUp'
          />
        </div>
        <div className=' pt-10 flex flex-col gap-10 animate__animated animate__fadeInLeft md:text-center'>
          <h1 className=' text-7xl sm:text-5xl'>
            What Are You{' '}
            <span className=' font-semibold text-canary-300'> Saving </span>
            For?
          </h1>
          <p className=' text-sm text-white-20'>
            We have a range of account types to help you get there.
          </p>
          <div className=' flex gap-4 items-center text-sm'>
            {savingOptions.map((option, i) => (
              <span
                key={option.title}
                className={
                  i === activeOption
                    ? ' text-canary-300 border-b border-b-canary-300 pb-1 cursor-pointer'
                    : ' cursor-pointer'
                }
                onClick={() => setactiveOption(i)}>
                {option.title}
              </span>
            ))}
          </div>
          <div>
            {savingOptions[activeOption].accounts.map((account) => (
              <p key={account.name} className=' mb-6 text-sm'>
                {' '}
                <span className=' font-bold'>{account.name}:</span>{' '}
                {account.desc}{' '}
              </p>
            ))}
            <button className=' flex items-center font-medium gap-4 text-lg px-5 py-3 bg-fog-400 text-white-100 w-40 rounded-md md:mx-auto mt-7'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Saving
