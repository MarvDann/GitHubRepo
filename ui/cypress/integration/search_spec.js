/// <reference types="cypress" />

describe('Search GitHub Repos', () => {
  it('Can search and navigate to details page', () => {
    cy.server()
    cy.route('**/repos/*', 'fixture:searchResults').as('SearchResults')
    cy.route('**/repo/*', 'fixture:repoDetails').as('RepoDetails')

    cy.visit('/')

    // Perform search
    cy.get('[type=text]').type('dojo')
    cy.get('button').click()

    // Click first result
    cy.get('h5:eq(0)').click()

    // Repo name is displayed
    cy.contains('django-DefectDojo')

    cy.get('img').should(
      'have.attr',
      'src',
      'https://avatars0.githubusercontent.com/u/35606478?v=4'
    )
  })
})
