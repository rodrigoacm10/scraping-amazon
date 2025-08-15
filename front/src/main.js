import { searchIcon } from './icons/searchIcon'
import { startIcon } from './icons/startIcon'
import { renderList } from './renderList'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="main" >
    <div class="container">
      <h1 class="title" >Amazon Scrapper</h1>
      <form id="searchForm">
        <div class="input-container" >
          <input class="input-product" type="text" id="keywordInput" placeholder="search product" required />
          <button class="input-product-btn" type="submit">${searchIcon}</button>
        </div>
      </form>
    </div>

    <div id="results">
      <p class="no-search">search to see the itens</p>
    </div>
  </div>
`

document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const keyword = document.getElementById('keywordInput').value.trim()
  if (!keyword) return

  const resultsDiv = document.getElementById('results')

  resultsDiv.innerHTML = '<div class="spinner"></div>'

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/scrape?keyword=${encodeURIComponent(
        keyword,
      )}`,
    )
    const data = await res.json()

    renderList(data)
  } catch (error) {
    console.error(error)
    resultsDiv.innerHTML = '<p class="error">Error in search</p>'
  }
})
