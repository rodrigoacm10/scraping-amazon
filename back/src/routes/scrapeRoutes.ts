import { Router } from 'express'
import { scrapeKeywordController } from '../controllers/scrapeController'

const router = Router()

router.get('/scrape', scrapeKeywordController)

export default router
