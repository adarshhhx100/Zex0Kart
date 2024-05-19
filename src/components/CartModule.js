import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function CartProduct({ title, price, imageUrl, quantity, removeFromCart }) {
  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
  <div>
    <img src={imageUrl} alt={title} style={{ width: "100px", marginRight: "10px" }} />
    <div>
      <div className="fw-bold">{title}</div>
      <div>Rs.{price}</div>
      <div>Quantity: {quantity}</div>
    </div>
  </div>
  <Button variant="danger" onClick={() => removeFromCart(title)}>Remove</Button>
</ListGroup.Item>

  );
}

function Cart({ cartProducts, removeFromCart }) {
  return (
    <Container>
    <h2 className="text-center mt-4">Cart</h2><br/>
    <ListGroup>
      {cartProducts.map((product, index) => (
        <ListGroup.Item key={index}>
          <CartProduct {...product} removeFromCart={removeFromCart} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
  );
}

export default Cart;
