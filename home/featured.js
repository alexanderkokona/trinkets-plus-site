const articles = [
  {
    id: 1,
    title: "Turtle Duck",
    price: "$20",
    description: "From Avatar: The Last Airbender",
    imgSrc: "img/turtle-duck.jpg",
    imgAlt: "Turtle Duck",
    genre: "Trinkets",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Pidgeon",
    price: "$15",
    description: "A derpy boy",
    imgSrc: "img/pidgeon.jpg",
    imgAlt: "pidgeon",
    genre: "Trinkets",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
  id: 3,
  title: "Custom DnD Mini",
  price: "$50",
  description: "Send an STL file or give a description of what you are looking for!",
  imgSrc: "img/dndmini1.jpg",
  imgAlt: "dndmini1",
  genre: "DnD",
  stars: "⭐⭐⭐⭐⭐"
  },
];

const container = document.querySelector('#products-container');

function renderArticle(item) {
  const article = document.createElement('article');
  article.classList.add('products');

  const template = `
    <div class="products-content">
      <h2>${item.title}</h2>
      <img src="${item.imgSrc}" alt="${item.imgAlt}" />
      <p>${item.description}</p>
    </div>
    <div class="products-meta">
      <p>${item.price}</p>
      <p>${item.genre}</p>
      <p>${item.stars}</p>
      <button class="add-to-cart">Add to Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>
  `;

  article.innerHTML = template;
  container.appendChild(article);
}

articles.forEach(renderArticle);