import React from 'react'

interface Props {
  error: Error
}

const ApiRequestError = ({ error }: Props) => (
  <div data-testid="request-error">{error.message}</div>
)

export default ApiRequestError
