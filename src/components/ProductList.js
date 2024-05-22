import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Product({ title, price, imageUrl, addToCart }) {
  const navigate = useNavigate();

  const handleShowProduct = () => {
    navigate(`/product/${title}`);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} onClick={handleShowProduct} style={{ cursor: "pointer" }} />
      <Card.Body>
        <Card.Title onClick={handleShowProduct} style={{ cursor: "pointer" }}>{title}</Card.Title>
        <Card.Text>Rs. {price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(title)}>
          Add Product
        </Button>
      </Card.Body>
    </Card>
  );
}

function ProductList({ products, addToCart }) {
  return (
    <Container>
      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Product {...product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductList;
