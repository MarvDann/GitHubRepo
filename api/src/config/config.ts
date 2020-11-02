import dotenv from 'dotenv'

dotenv.config()

const API_HOST = process.env.API_HOST || 'localhost'
const API_PORT = process.env.API_PORT || '3001'

export default {
  server: {
    host: API_HOST,
    port: API_PORT
  }
}
