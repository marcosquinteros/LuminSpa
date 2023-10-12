import { Row, Col, Button } from "react-bootstrap";
import "./../Components/Home/home.css";
import { Link } from "react-router-dom";
import HomeCards from "../Components/Home/homeCards";
const Home = () => {
  return (
    <div className="container home-container">
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={6} md={12}>
          <h1 className="hero-home">Amor propio, Piel radiante</h1>
          <Link className="btn cta-btn">Ver servicios</Link>
        </Col>
        <Col lg={6} md={12} className="d-flex justify-content-center">
          <img
            className="img-fluid w-75"
            src="src\assets\images\Rectangle1.png"
            alt=""
          />
        </Col>
      </Row>
      <Row>
        <HomeCards />
      </Row>
    </div>
  );
};

export default Home;
