import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartComponent from './components/CartMod'; // Import the Cart component
import 'bootstrap/dist/css/bootstrap.min.css';

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

const initialCartProducts = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 2,
  }
];

function Product({ title, price, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>Rs.{price}</p>
      </div>
    </div>
  );
}

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const removeFromCart = (title) => {
    setCartProducts(cartProducts.filter(product => product.title !== title));
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Z Kart 🛒</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-warning" onClick={handleCartClick}>
              My🛒
            </Button>
          </Nav>
        </Container>
      </Navbar>
      
      <h2>Products</h2>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>

      {showCart && <CartComponent cartProducts={cartProducts} removeFromCart={removeFromCart} />} {/* Conditionally render the Cart component */}
    </div>
  );
}

export default App;
