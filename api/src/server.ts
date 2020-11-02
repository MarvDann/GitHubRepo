import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import config from './config/config'
import accessControl from './middleware/accessControl'
import routes from './routes/routes'
import logger from './middleware/logger'

const router = express()

router.use(accessControl)
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(logger)

router.use(routes)

router.use((req, res, next) => {
  const error = new Error('Route not found')

  res.status(404).json({ error: error.message })
})

const server = http.createServer(router)
server.listen(config.server.port, () => {
  console.log('Listening on port 3001')
})

process.on('unhandledRejection', (reason: any) => {
  console.log('Unhandled Rejection:', reason?.stack)
  process.exit(1)
})
