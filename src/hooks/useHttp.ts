import axios from 'axios'
import { HttpConfig } from '../http'
import { useCallback } from 'react'

const baseurl = 'http://localhost:8000'

const useSendHttpRequest = () => {
  const sendRequest = useCallback(
    async (
      httpConfig: HttpConfig,
      callback: (data: any) => void,
      loadingFunc?: (value: boolean) => void,
      errorFunc?: (err: any) => void
    ) => {
      const apiUrl = `${baseurl}${httpConfig.url}`

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
