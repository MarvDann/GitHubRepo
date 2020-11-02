import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GitHubRepoSearchResultItem } from '../GitRepoSearchResults/interfaces'
import GitRepoDetails from './GitRepoDetails'
import nock from 'nock'

const renderWithRouter = (ui: any, { route = '/details/dojo/Dojo' } = {}) => {
  window.history.pushState({}, 'Details Page', route)
  return render(ui, { wrapper: Router })
}

const url = 'http://localhost:3001'
const endpoint = '/repo'
const defaultReplyHeaders = {
  'Access-Control-Allow-Origin': '*'
}

test('renders details page correctly', async () => {
  const item: GitHubRepoSearchResultItem = {
    id: 12345,
    name: 'Dojo',
    full_name: 'dojo/Dojo',
    language: 'JavaScript',
    node_id: '121fslknjlaksjd;',
    description: 'An opinionated reactive web framework for building apps',
    owner: {
      login: 'dojo',
      avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4'
    },
    stargazers_count: 23132,
    subscribers_count: 234,
    updated_at: '2020-11-01T09:20:19Z'
  }

  nock(url)
    .defaultReplyHeaders(defaultReplyHeaders)
    .get(endpoint)
    .query({ owner: 'dojo', repo: 'Dojo' })
    .reply(200, { data: item })

  renderWithRouter(
    <Route path="/details/:owner/:repo">
      <GitRepoDetails />
    </Route>
  )

  await screen.findByText('Loading...')

  await screen.findByText('Dojo')
})
