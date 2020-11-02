import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import GitRepoSearchForm from './GitRepoSearchForm/GitRepoSearchForm'
import GitRepoSearchResults from './GitRepoSearchResults/GitRepoSearchResults'
import ApiRequest from '../ApiRequest/ApiRequest'
import { Typography, makeStyles } from '@material-ui/core'
import { API_HOST } from '../../constants'

const useStyles = makeStyles(() => ({
  separator: {
    margin: '20px auto'
  },
  root: {
    maxWidth: 800
  }
}))

const GitRepoSearch = () => {
  const styles = useStyles()
  const [searchString, setSearchString] = useState('')

  const handleSearch = (value: string): void => {
    setSearchString(value)
  }

  const url = API_HOST + '/repos'

  return (
    <Container className={styles.root}>
      <section>
        <Typography variant="h3" gutterBottom>
          Git Repo Finder
        </Typography>
        <GitRepoSearchForm onSearch={handleSearch} />
      </section>
      <hr className={styles.separator} />
      <section>
        {searchString && (
          <ApiRequest url={url} params={{ searchString }}>
            {(data: any) => data && <GitRepoSearchResults result={data} />}
          </ApiRequest>
        )}
      </section>
    </Container>
  )
}

export default GitRepoSearch
