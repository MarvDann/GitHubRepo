import { Octokit } from '@octokit/core'

export const searchRepos = async (searchString: string) => {
  const octokit = new Octokit()

  const result = await octokit.request('GET /search/repositories', {
    q: searchString,
    sort: 'stars',
    order: 'desc'
  })

  return result
}

export const getDetails = async (owner: string, repo: string) => {
  const octokit = new Octokit()

  const result = await octokit.request('GET /repos/:owner/:repo', {
    owner,
    repo
  })

  return result
}
