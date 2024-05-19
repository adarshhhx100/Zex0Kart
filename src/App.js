import React, { useState } from "react";
<<<<<<< HEAD
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Product from "./components/Product";
import CartComponent from "./components/CartModule"; // Import the Cart component
import "bootstrap/dist/css/bootstrap.min.css";
=======
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import CartComponent from './components/CartMod'; // Import the Cart component

import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 0b2b52d17359d4bb758d9c2e684ff85b84d27ab8

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const initialCartProducts = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 2,
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const addToCart = (title) => {
    const selectedProduct = productsArr.find(product => product.title === title);
  if (selectedProduct) {
    const existingProductIndex = cartProducts.findIndex(product => product.title === title);
    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].quantity++;
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts(prevCartProducts => [...prevCartProducts, { ...selectedProduct, quantity: 1 }]);
    }
  }
  };

  const removeFromCart = (title) => {
    setCartProducts(cartProducts.filter((product) => product.title !== title));
  };

  const totalProductsInCart = cartProducts.reduce((total, product) => total + (product.quantity || 1), 0);


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
              My🛒 <span className="badge bg-primary">{totalProductsInCart}</span>
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <h2 className="text-center mt-4">Products</h2>
      <br />
      <Container>
        <div className="row justify-content-center">
          {productsArr.map((product, index) => (
            <div
              key={index}
              className="col-md-6 mb-4 d-flex align-items-center justify-content-center"
            >
              <Product {...product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </Container>
      {showCart && (
        <CartComponent
          cartProducts={cartProducts}
          removeFromCart={removeFromCart}
        />
      )}{" "}
      {/* Conditionally render the Cart component */}
    </div>
  );
}


export default App;
