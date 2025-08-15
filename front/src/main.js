import { searchIcon } from './icons/searchIcon'
import { startIcon } from './icons/startIcon'
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

function renderList(data) {
  const resultsDiv = document.getElementById('results')
  const noSearchP = document.querySelector('.no-search')

  if (noSearchP) {
    noSearchP.style.display = 'none'
  }

  if (!data.length) {
    resultsDiv.innerHTML = '<p class="no-result">nothing found</p>'
    return
  }

  resultsDiv.innerHTML = `
    <div class="result-container">
      ${data
        .map(
          (item) =>
            `<div class="item-container">
                <img class="item-img" src="${item.image}" />
                <div class="item-content">
                  <p class="item-title">${item.title}</p>

                  <div class="item-reviews-container">
                    <div class="item-stars">
                      ${startIcon}
                      <p class="item-rating">${item.rating.split(' de ')[0]}</p>
                    </div>
                    <p class="item-reviews">(<span class="items-reviews-span">${
                      item.reviews
                    }</span>)</p>
                  </div>
                </div>
            </div>`,
        )
        .join('')}
    </div>
  `
}

document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const keyword = document.getElementById('keywordInput').value.trim()
  if (!keyword) return

  const resultsDiv = document.getElementById('results')

  // Exibe loading
  resultsDiv.innerHTML = '<div class="spinner"></div>'

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/scrape?keyword=${encodeURIComponent(
        keyword,
      )}`,
    )
    const data = await res.json()

    console.log('RES', res)
    console.log('DATA ->', data)

    renderList(data)
  } catch (error) {
    console.error(error)
    resultsDiv.innerHTML = '<p class="error">Error in search</p>'
  }
})
