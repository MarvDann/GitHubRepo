import React from 'react'

interface Props {
  error: Error
}

const ApiRequestError = ({ error }: Props) => <div>{error.message}</div>

export default ApiRequestError
