import React, { useEffect, useState } from 'react'
import { TolerancePortfolio } from '../data'
import useSendHttpRequest from './useHttp'
import { HttpConfig } from '../http'

const useGetPortfolio = () => {
  const [loading, setloading] = useState(false)
  const [portfolioData, setPortfolioData] = useState<TolerancePortfolio[]>([])
  const sendRequest = useSendHttpRequest()

  const successCallback = (data: TolerancePortfolio[]) => {
    setPortfolioData(data)
  }

  useEffect(() => {
    const url: HttpConfig = {
      url: '/tolerance',
      method: 'get',
    }

    sendRequest(url, successCallback, setloading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { portfolioData, loading }
}

export default useGetPortfolio
