const request = (
  url: string,
  method: HttpMethod = 'get',
  handleSuccess: (data: Record<string, unknown> | null) => void,
  handleError: (error: Error) => void,
  params?: Record<string, string>
) => {
  const finalUrl = getUrl(url, method, params)
  const config = getConfig(method, params)

  const handleResponse = buildHandleResponse(handleSuccess, handleError)

  const catchFetchError = (error: Error) => {
    handleError(error)
  }

  fetch(finalUrl, config).then(handleResponse, catchFetchError)
}

const buildHandleResponse = (
  handleSuccess: (data: Record<string, unknown> | null) => void,
  handleError: (error: Error) => void
) => {
  return async (response: Response) => {
    try {
      const result = await response.json()
      response.ok ? handleSuccess(result) : handleError(result)
    } catch {
      response.ok
        ? handleSuccess({ message: 'OK' })
        : handleError(new Error(response.statusText))
    }
    return Promise.resolve()
  }
}

const getParams = (method: HttpMethod, params: Record<string, string>) => {
  return method === 'get' ? null : JSON.stringify(params)
}

const getUrl = (
  urlString: string,
  method: HttpMethod,
  params?: Record<string, string>
) => {
  const url = new URL(urlString)

  // add params to URL for get requests
  if (method === 'get' && params) {
    Object.keys(params).forEach((key: string) => {
      url.searchParams.append(key, params[key])
    })
  }

  return url.toString()
}

const getConfig = (method: HttpMethod, params?: Record<string, string>) => {
  return {
    method,
    body: params ? getParams(method, params) : null
  }
}

export default request
