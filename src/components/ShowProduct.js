import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ShowProduct({ products }) {
  const { productId } = useParams();
  const product = products.find(p => p.title === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: Rs. {product.price}</Card.Text>
          <div>
            <h5>Additional Images:</h5>
            <div className="d-flex flex-wrap">
              {product.additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`Additional ${index}`} style={{ width: "100px", margin: "5px" }} />
              ))}
            </div>
          </div>
          <div>
            <h5>Reviews:</h5>
            <ListGroup>
              {product.reviews.map((review, index) => (
                <ListGroup.Item key={index}>{review}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ShowProduct;
