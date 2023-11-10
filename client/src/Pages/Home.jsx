import { Row, Col, Button } from "react-bootstrap";
import "../Components/Home/home.css";
import { useEffect } from "react";
import star from "../assets/star.svg";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import HomeCards from "../Components/Home/homeCards";
import Carrousel from "../Components/Home/Carrousel";
import Services from "../Components/Home/Services";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="container home-container">
      <Row
        data-aos="fade-right"
        className="d-flex justify-content-center align-items-center"
      >
        <Col
          lg={6}
          md={12}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          {/* <svg className="swing-svg">
            <image href={star} width="150" height="150" />
          </svg> */}
          <h1 className="hero-home my-2 p-2">Amor propio, Piel radiante</h1>
          <Link
            to="services"
            spy={true}
            // smooth={true}
            duration={600}
            offset={0}
            className="btn lumin-btn px-5"
          >
            Ver servicios
          </Link>
        </Col>
        <Col lg={6} md={12} className="d-flex ">
          <Carrousel />
        </Col>
      </Row>
      <Row>
        <HomeCards />
      </Row>
      <hr />
      <div id="services" className="servicios-container">
        <h1 className=" p-2">Nuestros servicios</h1>
        <Services />
      </div>
    </div>
  );
};

export default Home;
