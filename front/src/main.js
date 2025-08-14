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
    resultsDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>'
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
                      <p class="item-rating">4.7</p>
                    </div>
                    <p class="item-reviews">(<span class="items-reviews-span">${item.reviews}</span>)</p>
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

  const keyword = document.getElementById('keywordInput').value

  try {
    // const res = await fetch(`https://sua-api.com/search?keyword=${encodeURIComponent(keyword)}`)
    // const data = await res.json()
    const data = [
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 1',
        reviews: 2,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
      {
        title: 'title 2',
        reviews: 3,
        image: 'https://m.media-amazon.com/images/I/81vDa3d63CL._AC_UL320_.jpg',
      },
      {
        title: 'title 3',
        reviews: 5,
        image: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_UL320_.jpg',
      },
    ]
    renderList(data)
  } catch (error) {
    console.error(error)
    document.getElementById('results').innerHTML = '<p>Erro na busca.</p>'
  }
})
