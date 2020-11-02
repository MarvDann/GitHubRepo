import React, { ReactElement, useState } from 'react'
import request from './request'
import ApiRequestError from './ApiRequestError'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'

interface Props {
  url: string
  method?: HttpMethod
  params?: Record<string, string>
  children?: (data: Record<string, unknown> | null) => ReactElement
}

const ApiRequest = ({
  url,
  method,
  params,
  children: renderChildren
}: Props): ReactElement | null => {
  const [data, setData] = useState<Record<string, unknown> | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const handleSuccess = (result: Record<string, unknown> | null) => {
    setData(result)
  }

  const handleError = (result: Error) => setError(result)

  useDeepCompareEffectNoCheck(() => {
    setData(null)
    setError(null)

    return request(url, method, handleSuccess, handleError, params)
  }, [url, method, params])

  if (error) return <ApiRequestError error={error} />

  if (!data) return <p>Loading...</p>

  if (renderChildren) return renderChildren(data)

  return null
}

export default ApiRequest
