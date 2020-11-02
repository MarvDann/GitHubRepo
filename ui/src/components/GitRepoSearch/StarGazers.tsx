import { makeStyles } from '@material-ui/core'
import React from 'react'
import StarIcon from './Icons/StarIcon'

interface Props {
  starCount: number
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

const StarGazers = ({ starCount }: Props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <StarIcon />
      <span className={styles.count}>{starCount.toString()}</span>
    </div>
  )
}

export default StarGazers
