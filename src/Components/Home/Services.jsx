import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { MdWatchLater } from "react-icons/md";

const servicios = [
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697324095/upfsyt2jnkl5obxjz6bx.jpg",
    nombre: "Tratamiento Facial",
    descripcion:
      "Un tratamiento facial completo que rejuvenece y revitaliza la piel de tu rostro.",
    precio: "$80",
    duracion: "90 minutos",
    diasDisponibles: ["Martes", "Jueves", "Sábado"],
  },
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697324095/bl5yckp9fmucnponxpjl.jpg",
    nombre: "Tratamiento Capilar",
    descripcion:
      "Un tratamiento capilar que cuida tu cabello y cuero cabelludo.",
    precio: "$50",
    duracion: "45 minutos",
    diasDisponibles: ["Lunes", "Miércoles", "Viernes", "Sábado"],
  },
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697324095/l858g8owedjhqyvbjpmm.jpg",
    nombre: "Tratamiento Corporal",
    descripcion:
      "Un tratamiento corporal relajante que revitaliza tu piel y alivia la tensión muscular.",
    precio: "$60",
    duracion: "60 minutos",
    diasDisponibles: ["Lunes", "Miércoles", "Viernes"],
  },
];

const Services = () => {
  return (
    <Row>
      {servicios.map((servicio, index) => (
        <Row key={index} className="bg-light my-2">
          <Col lg={6} md={6}>
            <img
              src={servicio.image}
              className="img-fluid"
              alt={servicio.nombre}
            />
          </Col>
          <Col lg={6} md={6}>
            <article className="servicio text-start">
              <h3 className="my-4">{servicio.nombre}</h3>
              <hr />
              <p>{servicio.descripcion}</p>
              <p>
                {" "}
                <strong className="px-3"> {servicio.precio}</strong>
              </p>
              <div className="duration d-flex align-items-center">
                <MdWatchLater size={28} />{" "}
                <span className="mx-2">{servicio.duracion}</span>
              </div>
              <p>
                {" "}
                <del> {servicio.diasDisponibles.join(", ")}</del>
              </p>
              <button className="lumin-btn btn my-2 px-5">Reservar</button>
            </article>
          </Col>
        </Row>
      ))}
    </Row>
  );
};

export default Services;
