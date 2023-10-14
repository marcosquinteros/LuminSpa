import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carrusel1 from "../../assets/images/carrusel1.jpg";
import Carrusel2 from "../../assets/images/carrusel2.jpg";
import Carrusel3 from "../../assets/images/carrusel3.jpg";
const Carrousel = () => {
  return (
    <div className="carousel-container w-100  my-4">
      <Carousel fade>
        <Carousel.Item interval={1700}>
          <img src={Carrusel1} alt="" className="img-fluid" />
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={Carrusel2} alt="" className="img-fluid" />
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={Carrusel3} alt="" className="img-fluid" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
