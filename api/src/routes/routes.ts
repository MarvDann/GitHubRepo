import express from 'express'
import controller from '../controllers/repo'

const router = express.Router()

router.get('/repos', controller.search)

router.get('/repo', controller.details)

export default router
