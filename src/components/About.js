import Container from "react-bootstrap/Container";
import Figure from 'react-bootstrap/Figure';
import aboutImg from './images/aboutImg.jpg';

function About() {
  return (
    <div>
      <header>
      <center>
      <h1> Z-Kart </h1>
    </center>
    </header>
<br/>
<Container className="mt-4 d-flex flex-column align-items-center">
        <Figure className="text-center">
          <Figure.Image
            width={371}
            height={480}
            alt="Placeholder"
            src={aboutImg}
            className="rounded-circle"
          />
          <Figure.Caption className="mt-2 caption-style">
            <h2>Accha!! mere baare mein jaane aaye ho?? </h2>
          </Figure.Caption>
        </Figure>
      </Container>

      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>
          Author: Desh Ka Vidyawaan<br />
          <a href="mailto:nobody@lapata.com">bhaag@kyaDekhRahaHai.com</a>
        </p>
      </footer>
    </div>
  );
}

export default About;
