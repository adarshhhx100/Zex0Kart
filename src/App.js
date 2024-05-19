import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Product from "./components/ProductList";
import About from "./components/About";
import Home from "./components/Home"; // Import Home component
import CartComponent from "./components/CartModule"; 
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Router>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Z Kart '-' </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-warning" onClick={handleCartClick}>
                My🛒 <span className="badge bg-primary">{totalProductsInCart}</span>
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product products={productsArr} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {showCart && (
          <CartComponent
            cartProducts={cartProducts}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
