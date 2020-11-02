import { makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
  url: string
  owner: string
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 100
  },
  img: {
    maxWidth: 100
  }
}))

const Avatar = ({ url, owner }: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <img src={url} alt={owner} className={styles.img} />
    </div>
  )
}

export default Avatar
