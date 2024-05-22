import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ShowProduct from "./components/ShowProduct"; // Import ShowProduct component
import CartComponent from "./components/CartModule";
import "bootstrap/dist/css/bootstrap.min.css";

// Your product data array
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    additionalImages: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      // Add more additional images here if needed
    ],
    reviews: [
      "Great product!",
      "Very satisfied with the quality.",
      // Add more reviews here if needed
    ]
  },
  // Add more products here if needed
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const addToCart = (title) => {
    const selectedProduct = productsArr.find(product => product.title === title);
    if (selectedProduct) {
      setCartProducts(prevCartProducts => [...prevCartProducts, selectedProduct]);
    }
  };

  const removeFromCart = (title) => {
    setCartProducts(cartProducts.filter((product) => product.title !== title));
  };

  const totalProductsInCart = cartProducts.length;

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
              <Nav.Link as={Link} to="/contact">Contact Us!</Nav.Link>
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
          <Route path="/products" element={<ProductList products={productsArr} addToCart={addToCart} />} />
          <Route path="/product/:productId" element={<ShowProduct products={productsArr} />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
