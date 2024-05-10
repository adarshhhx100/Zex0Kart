import React from "react";

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

function Product({ title, price, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Z-Kart</h1>
      <h2>Products</h2>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
