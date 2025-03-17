const apiUrl = 'https://fakestoreapi.com/products/1';

let productId = '';
const input = document.querySelector('input');
const products = document.querySelector('products');
const btn = document.querySelector('btn');

btn.addEventListener('click', () => {
  productId = input.value;
  fetch(apiUrl)
    .then(response => response.json)
      .then(data => {
        products.innerHTML = `
          `
      })
})

// fetch('https://fakestoreapi.com/products/1')
//   .then(response => response.json())
//   .then(data => console.log(data));