import React from 'react'
import { render, screen } from '@testing-library/react'
import GitRepoSearchForm from './GitRepoSearchForm'

test('renders search form', () => {
  const props = {
    onSearch: () => jest.fn()
  }

  render(<GitRepoSearchForm {...props} />)
  screen.getByRole('button')
})
