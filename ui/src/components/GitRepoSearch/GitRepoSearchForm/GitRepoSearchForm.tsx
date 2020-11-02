import { Grid, TextField, Button } from '@material-ui/core'
import React, { ReactElement, FormEvent, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}))

interface Props {
  onSearch: (value: string) => void
}

const GitRepoSearch = ({ onSearch }: Props): ReactElement => {
  const classes = useStyles()
  const [repoName, setRepoName] = useState('')

  const handleClick = () => {
    onSearch(repoName)
  }

  const handleInput = (evt: FormEvent) => {
    const input = evt.target as HTMLInputElement
    setRepoName(input.value)
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={10}>
          <TextField
            label="Enter github repo name"
            size="small"
            fullWidth
            variant="outlined"
            onInput={handleInput}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleClick}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default GitRepoSearch
