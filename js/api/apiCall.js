export async function fetchProducts(url, resultsContainer) {

  try {
    const response = await fetch(url);
    const productData = response.json();

    return productData;
  }
  catch(error) {
    resultsContainer.innerHTML = `<div role="alert" class="error"> Sorry, something went wrong... </div>`;

  }
}
