export function productCard(product) {

  const colorBoxes = makeColorBoxes(product.attributes)

  return `<a href="/products/jacket.html?productId=${product.id}" class="product-card">
  <div class="product-window">
    <img src="${product.images[0].src}" class="jacket_image" alt="${product.images[0].alt}">
    <img src="/icons/heart-icon.svg" class="heart-icon" alt="heart-icon for favorites">
  </div>
  <div class="product-card-details">
    <p>${product.name}</p>
    <div class="flex-container">
      <p class="price">${product.price_html}</p>
      ${colorBoxes.outerHTML}
    </div>
  </div>
</a>`
}



function makeColorBoxes(attributes) {
  const colorsContainer = document.createElement('div')
  colorsContainer.classList.add('flex-container')
  for(let i = 0; i < attributes.length; i++) {
    if(attributes[i].name.toLowerCase() === 'color') {
      for(let j = 0; j < attributes[i].terms.length; j++) {
        colorsContainer.innerHTML += `<div class="box ${attributes[i].terms[j].name.toLowerCase().replace(' ','-')}"></div>`
      }
    }
  }
  return colorsContainer
}

