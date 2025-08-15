export function renderList(data) {
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
