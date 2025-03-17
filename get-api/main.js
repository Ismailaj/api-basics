// const apiUrl = `https://fakestoreapi.com/products/${productId}`;

const input = document.querySelector('input');
// let productId = input.value;
const products = document.querySelector('.products');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let productId = input.value;
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  fetch(apiUrl)
    .then(response => response.json())
      .then(data => {
        products.innerHTML = `
          <h2>${data.title}</h2>
          <img style="width:200px;" src="${data.image}">
          <p>${data.description}</p>
          <p>${data.price}</p>
          <p>${data.rating.rate} (${data.rating.count} reviews)</p>
          
        `
      });
      productId = "";
});

// fetch('https://fakestoreapi.com/products/1')
//   .then(response => response.json())
//   .then(data => console.log(data));