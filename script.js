async function fetchProducts() {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      return products;
  } catch (error) {
      console.error('Error fetching products:', error);
  }
}

async function renderProductCards() {
  const products = await fetchProducts();

  if (!products) return;

  const productContainer = document.querySelector('.grid');

  // Loop to render 5 product cards
  for (let i = 0; i < 21; i++) {
      const product = products[i];
      const productCardTemplate = document.getElementById('productCardTemplate').cloneNode(true);
      productCardTemplate.classList.remove('hidden');

      const productImage = productCardTemplate.querySelector('.bg-cover');
      const productTitle = productCardTemplate.querySelector('.font-bold');
      const productDescription = productCardTemplate.querySelector('.text-gray-600');
      const productPrice = productCardTemplate.querySelector('.flex');

      productImage.style.backgroundImage = `url('${product.image}')`;
      productTitle.textContent = product.title;
      productDescription.textContent = product.description;
      productPrice.innerHTML = `<span class="text-gray-900 font-semibold">$${product.price}</span>
                                <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Add to Cart</button>`;

      productContainer.appendChild(productCardTemplate);
  }
}

renderProductCards();