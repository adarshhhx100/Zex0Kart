import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

function Product({ title, price, imageUrl, quantity, addToCart }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Rs. {price} <br />
          {quantity !== undefined && `Quantity: ${quantity}`}
        </Card.Text>
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
          <div key={index} className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
            <Product {...product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductList;
