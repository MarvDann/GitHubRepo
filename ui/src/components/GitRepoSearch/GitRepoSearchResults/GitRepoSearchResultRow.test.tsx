import React from 'react'
import { screen, render } from '@testing-library/react'
import GitRepoSearchResultRow from './GitRepoSearchResultRow'
import { GitHubRepoSearchResultItem } from './interfaces'
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Search Page', route)

  return render(ui, { wrapper: BrowserRouter })
}

test('renders search form', () => {
  const rowData: GitHubRepoSearchResultItem = {
    id: 12345,
    name: 'GitRepo',
    full_name: 'git/GitRepo',
    description: 'Repo description',
    language: 'JavaScript',
    node_id: 'apsiudhfoiasuhdf',
    owner: {
      avatar_url: 'http://www.test.com',
      login: 'git'
    },
    stargazers_count: 1234,
    subscribers_count: 576,
    updated_at: '2020-11-01T09:20:19Z'
  }

  const props = {
    item: rowData
  }

  renderWithRouter(<GitRepoSearchResultRow {...props} />)

  screen.getByText(rowData.name)
  screen.getByText(rowData.stargazers_count.toString())
  screen.getByText(rowData.owner.login)
})
