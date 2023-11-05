import React, { useState } from 'react'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts'
import { portfolioData } from '../data'

const PortfolioModule = () => {
  const [score, setscore] = useState(5)

  const chartData = portfolioData[score].stocks
    .filter((stock) => stock.value)
    .map((item) => ({ label: item.title, value: item.value }))

  return (
    <div className=' grid grid-cols-2 py-12 md:block'>
      <div className=' bg-black-950 h-[80vh] relative z-20 flex items-center justify-center'>
        <div className=' absolute top-[20px] w-[80%] max-w-[500px] left-[50%] translate-x-[-50%] h-24 bg-white-100 bg-opacity-80 backdrop-blur-sm rounded-md p-3 z-50'>
          <h3 className=' font-bold text-black-950'>
            What is your Risk Tolerance Level?
          </h3>
          <div className=' flex justify-between items-center text-black-400 mt-3'>
            {portfolioData.map((item) => (
              <span
                key={item._id}
                onClick={() => setscore(item.score)}
                className={
                  item.score === score
                    ? ' rounded-full p-4 border border-black-950 text-black-950 w-[40px] h-[40px] flex items-center justify-center'
                    : ' cursor-pointer'
                }>
                {item.score}
              </span>
            ))}
          </div>
        </div>
        <div className=' mx-auto w-[80%]'>
          <PieChart
            series={[
              {
                data: chartData,
                arcLabel: (item) => `${item.label} (${item.value}%)`,
                arcLabelMinAngle: 45,
                innerRadius: 20,
                outerRadius: 150,
                paddingAngle: 5,
                cornerRadius: 5,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: {
                  innerRadius: 20,
                  additionalRadius: -30,
                  color: 'gray',
                },
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontWeight: 'bold',
                fontSize: 8,
              },
            }}
            height={600}
            margin={{ bottom: 50, left: 50, right: 50 }}
            className=' text-center'
            slotProps={{
              legend: {
                position: { vertical: 'bottom', horizontal: 'middle' },
                direction: 'row',
                labelStyle: {
                  fill: '#ffffff',
                  fontSize: 12,
                },
              },
            }}
          />
        </div>
      </div>
      <div className=' p-10 flex flex-col gap-9 justify-between h-[80%] md:text-center'>
        <h1 className=' text-5xl font-medium leading-normal'>
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
