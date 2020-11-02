import { details, search }  from './repo'
import { mocked } from 'ts-jest/utils'
import { getDetails } from '../services/repoService'

jest.mock('../services/repoService', () => jest.fn())

describe('Repo endpoint tests', () => {

  describe('Search endpoint', () => {
    it('Should return a 200 status when searchString param sent ', async () => {
      // Arrange
      // Act
      // Assert

      // mock external dependecies and test just the functionality in the module under test
    })

    it('Should return a 400 status when an incorrect param is sent', () => {

    })
  })

  describe('Repo endpoint', () => {
    it('Should return 200 when owner and repo params sent', () => {

    })

    it('Should return a 400 status when an incorrect param is sent', () => {

    })
  })
  
})