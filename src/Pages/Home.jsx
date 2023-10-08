import { Row, Col, Button } from "react-bootstrap";
import "./../Components/Home/home.css";
const Home = () => {
  return (
    <div className="container home-container">
      <Row className="d-flex ">
        <Col lg={6} md={12}>
          <h1 className="hero-home">Amor propio, Piel radiante</h1>
          <Button>Ver servicios</Button>
        </Col>
        <Col lg={6} md={12}>
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1577746838851-816a43ca8733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
