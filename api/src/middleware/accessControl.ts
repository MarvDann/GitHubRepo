import express from 'express'

const router = express()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Acceee-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
    res.status(200).json({ message: 'Check header for acceptable methods' })
  }

  next()
})

export default router
