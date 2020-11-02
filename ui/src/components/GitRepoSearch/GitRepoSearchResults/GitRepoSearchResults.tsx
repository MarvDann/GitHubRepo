import { makeStyles } from '@material-ui/core'
import React from 'react'
import GitRepoSearchResultRow from './GitRepoSearchResultRow'
import {
  GitHubRepoSearchResult,
  GitHubRepoSearchResultItem
} from './interfaces'

interface Props {
  result: GitHubRepoSearchResult
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}))

const GitRepoSearchResults = ({ result }: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      {result.data.items.length &&
        result.data.items.map(
          (item: GitHubRepoSearchResultItem, index: number) => (
            <GitRepoSearchResultRow item={item} key={index} />
          )
        )}
    </div>
  )
}
export default GitRepoSearchResults
