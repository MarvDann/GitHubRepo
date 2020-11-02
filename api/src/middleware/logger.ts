import Pino from 'pino'
import expressPino from 'express-pino-logger'

const pino = Pino(Pino.destination('./logs/api.log'))

const logger = expressPino({
  logger: pino
})

export default logger
