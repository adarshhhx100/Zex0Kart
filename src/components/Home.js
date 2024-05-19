import React from "react";
import "./Home.css";
import ListGroup from "react-bootstrap/ListGroup";


function Home() {
  return (
    <div>
      <header>
        <center>
          <h1 className="custom-font"> Z-Kart </h1>
          <h3>We are here to serve you out ⚡</h3>
        </center>
      </header>

      <ListGroup>
        <ListGroup.Item>
          <div className="list-item-content">Cras justo odio</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-item-content">Dapibus ac facilisis in</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-item-content">Morbi leo risus</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-item-content">Cras justo odio</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-item-content">Porta ac consectetur ac</div>
        </ListGroup.Item>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      <footer className="footer">
        <p>© 2024 Z-Kart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
