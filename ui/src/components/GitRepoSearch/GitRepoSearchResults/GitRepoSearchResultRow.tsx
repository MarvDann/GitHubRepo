import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Theme
} from '@material-ui/core'
import React from 'react'
import { GitHubRepoSearchResultItem } from './interfaces'
import GitRepoIcon from './GitRepoIcon'
import StarGazers from '../StarGazers'
import Watchers from '../Watchers'
import { Link } from 'react-router-dom'

interface Props {
  item: GitHubRepoSearchResultItem
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      margin: '0 auto 20px',
      maxWidth: 800
    },
    iconCell: {
      paddingTop: '8px'
    },
    link: {
      textDecoration: 'none'
    }
  })
)

const GitRepoSearchResultRow = ({ item }: Props) => {
  const styles = useStyles()

  return (
    <Paper className={styles.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid container item direction="row" spacing={2}>
          <Grid item xs={1}>
            <div className={styles.iconCell}>
              <GitRepoIcon width="20" height="20" />
            </div>
          </Grid>
          <Grid container item direction="column" xs={11}>
            <Link
              to={`/details/${item.owner.login}/${item.name}`}
              className={styles.link}
            >
              <Typography variant="h5" gutterBottom>
                {item.name}
              </Typography>
            </Link>
            <Typography variant="body1">
              <em>Owner:</em> {item.owner.login}
            </Typography>
            <br />
            <Grid container direction="row">
              <Grid item xs={2}>
                <StarGazers starCount={item.stargazers_count} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GitRepoSearchResultRow
