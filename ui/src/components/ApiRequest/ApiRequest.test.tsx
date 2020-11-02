import { render } from '@testing-library/react'
import ApiRequest from './ApiRequest'
import nock from 'nock'
import React from 'react'

const url = 'http://localhost'
const endpoint = '/someEndpoint'
const defaultReplyHeaders = {
  'Access-Control-Allow-Origin': '*'
}

describe('ApiRequest', () => {
  it('Displays child elements when data returned', async () => {
    const someParams = { name: 'bob' }

    nock(url)
      .defaultReplyHeaders(defaultReplyHeaders)
      .get(endpoint)
      .query({ name: 'bob' })
      .reply(200, { name: 'jim' })

    const { findByText } = render(
      <ApiRequest url={url + endpoint} params={someParams}>
        {(response: any) => response.name}
      </ApiRequest>
    )

    // Check we get the loading text while the request is happening
    await findByText('Loading...')

    // Check the response data is returned
    const text = await findByText('jim')
    expect(text).toBeInTheDocument()
  })

  it('Shows an error message when an error is returned', async () => {
    const someParams = { name: 'bob' }

    nock(url)
      .defaultReplyHeaders(defaultReplyHeaders)
      .get(endpoint)
      .query({ name: 'bob' })
      .reply(404, { error: 'Not found' })

    const { findByTestId, findByText } = render(
      <ApiRequest url={url + endpoint} params={someParams}>
        {() => <p>Something</p>}
      </ApiRequest>
    )

    await findByText('Loading...')

    await findByTestId('request-error')
  })
})
