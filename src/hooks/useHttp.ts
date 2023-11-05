import axios from 'axios'
import { HttpConfig } from '../http'
import { useCallback } from 'react'

const useSendHttpRequest = () => {
  const sendRequest = useCallback(
    async (
      httpConfig: HttpConfig,
      callback: (data: any) => void,
      loadingFunc?: (value: boolean) => void,
      errorFunc?: (err: any) => void
    ) => {
      const apiUrl = `https://wealthwise-server.up.railway.app${httpConfig.url}`

      const config = {
        ...httpConfig,
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          ...httpConfig.headers,
        },
      }

      try {
        if (loadingFunc) {
          loadingFunc(true)
        }

        const response = await axios(config)
        callback(response.data)
      } catch (err: any) {
        if (errorFunc) {
          errorFunc(err)
        }
      } finally {
        if (loadingFunc) {
          loadingFunc(false)
        }
      }
    },

    []
  )

  return sendRequest
}

export default useSendHttpRequest
