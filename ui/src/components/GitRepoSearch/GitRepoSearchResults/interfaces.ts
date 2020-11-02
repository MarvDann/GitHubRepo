export interface GitHubRepoSearchResult {
  status: number
  url: string
  headers: any
  data: GitHibRepoSearchResultData
}

interface GitHibRepoSearchResultData {
  total_count: number
  incomplete_results: boolean
  items: GitHubRepoSearchResultItem[]
}

export interface GitHubRepoSearchResultItem {
  id: number
  node_id: string
  name: string
  full_name: string
  description: string
  subscribers_count: number
  language: string
  owner: GitHubOwner
  stargazers_count: number
  updated_at: string
}

interface GitHubOwner {
  login: string
  avatar_url: string
}
