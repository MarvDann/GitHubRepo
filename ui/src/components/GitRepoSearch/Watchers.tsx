import { makeStyles } from '@material-ui/core'
import React from 'react'
import WatchersIcon from './Icons/WatchersIcon'

interface Props {
  watchersCount: number
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  count: {
    flexShrink: 1,
    marginLeft: '5px',
    marginTop: '-3px'
  }
}))

const Watchers = ({ watchersCount }: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <WatchersIcon />
      <span className={styles.count}>{watchersCount}</span>
    </div>
  )
}

export default Watchers
