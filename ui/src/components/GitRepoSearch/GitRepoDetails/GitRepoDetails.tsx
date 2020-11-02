import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Breadcrumbs
} from '@material-ui/core'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ApiRequest from '../../ApiRequest/ApiRequest'
import { GitHubRepoSearchResultItem } from '../GitRepoSearchResults/interfaces'
import Avatar from './Avatar'
import { API_HOST } from '../../../constants'
import StarGazers from '../StarGazers'
import Watchers from '../Watchers'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800
  },
  paper: {
    padding: '20px'
  },
  separator: {
    margin: '20px auto'
  }
}))

const GitRepoDetails = () => {
  const styles = useStyles()
  const { owner, repo } = useParams<{ owner: string; repo: string }>()

  const url = API_HOST + `/repo`

  const renderDetails = (data: any) => {
    const item = data as GitHubRepoSearchResultItem
    return (
      <>
        <Typography variant="h3" gutterBottom>
          Git Repo Details
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Back to Search</Link>
        </Breadcrumbs>
        <hr />
        <Paper className={styles.paper}>
          <Grid container>
            <Grid item xs={12} sm={10}>
              <Typography variant="h5" gutterBottom color="primary">
                {item.name}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
              <Typography variant="body2" gutterBottom>
                Last updated: {new Date(item.updated_at).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Language: {item.language}
              </Typography>
              <br />
              <Grid container direction="row">
                <Grid item xs={2}>
                  <StarGazers starCount={item.stargazers_count} />
                </Grid>
                <Grid item xs={2}>
                  <Watchers watchersCount={item.subscribers_count} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={2} justify="flex-end">
              <Typography variant="caption">
                Owner:
                {item.owner.login}
              </Typography>
              <Avatar url={item.owner.avatar_url} owner={item.owner.login} />
            </Grid>
          </Grid>
        </Paper>
      </>
    )
  }

  return (
    <Container className={styles.root}>
      <ApiRequest url={url} params={{ owner, repo }}>
        {(response: any) =>
          response.data &&
          renderDetails(response.data as GitHubRepoSearchResultItem)
        }
      </ApiRequest>
    </Container>
  )
}

export default GitRepoDetails
