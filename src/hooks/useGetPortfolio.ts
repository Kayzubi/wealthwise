import { useEffect, useState } from 'react'
import { TolerancePortfolio } from '../data'
import { HttpConfig } from '../http'
import useSendHttpRequest from './useHttp'

const useGetPortfolio = () => {
  const [loading, setLoading] = useState(false)
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

    sendRequest(url, successCallback, setLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { portfolioData, loading }
}

export default useGetPortfolio
