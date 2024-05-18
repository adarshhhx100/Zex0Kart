import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartProduct({ title, price, imageUrl, quantity, removeFromCart }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Rs.{price} <br />
          Quantity: {quantity}
        </Card.Text>
        <Button variant="danger" onClick={() => removeFromCart(title)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

function Cart({ cartProducts, removeFromCart }) {
  return (
    <Container>
      <h2>Cart</h2>
      <div className="cart-list">
        {cartProducts.map((product, index) => (
          <CartProduct key={index} {...product} removeFromCart={removeFromCart} />
        ))}
      </div>
    </Container>
  );
}

export default Cart;
