import type { Request, Response } from 'express'
import { scrapeKeywordService } from '../services/scrapeService'

export const scrapeKeywordController = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query as { keyword?: string }

    if (!keyword) return res.status(400).json({ error: 'keyword not provided' })

    const items = await scrapeKeywordService({ keyword: keyword })
    res.json(items)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'error in scraping' })
  }
}
