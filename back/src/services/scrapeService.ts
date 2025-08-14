import axios from 'axios'
import { JSDOM } from 'jsdom'
import type { ItemType } from '../types/ItemType'

export const scrapeKeywordService = async ({
  keyword,
}: {
  keyword: string
}): Promise<ItemType[]> => {
  const API_KEY = process.env.SCRAPER_API_KEY
  const targetUrl = `https://www.amazon.com.br/s?k=${encodeURIComponent(
    keyword,
  )}`

  const scraperUrl = `http://api.scraperapi.com/?api_key=${API_KEY}&url=${encodeURIComponent(
    targetUrl,
  )}&render=true`

  const { data } = await axios.get(scraperUrl)

  const dom = new JSDOM(data)
  const document = dom.window.document

  const items: ItemType[] = []
  document
    .querySelectorAll("[data-component-type='s-search-result']")
    .forEach((product) => {
      const title = product.querySelector('h2 span')?.textContent?.trim() || ''
      const rating =
        product.querySelector('.a-icon-alt')?.textContent?.trim() || ''
      const reviews =
        product
          .querySelector('.a-size-base.s-underline-text')
          ?.textContent?.trim() || ''
      const image = product.querySelector('img')?.getAttribute('src') || ''

      if (title || rating || reviews || image) {
        items.push({
          title,
          rating,
          reviews: +reviews,
          image,
        })
      }
    })

  return items
}
