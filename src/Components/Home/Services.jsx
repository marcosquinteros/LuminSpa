import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { MdWatchLater } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ResenasServicio from "./Resenas";

const Services = () => {
  const [servicios, setServicios] = useState([]);
  const [mostrarResenas, setMostrarResenas] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [calificacionesDelServicio, setCalificacionesDelServicio] = useState(
    []
  );

  const cargarCalificacionesDelServicio = async (servicioId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/calificaciones?servicioId=${servicioId}`
      );
      setCalificacionesDelServicio(response.data);
      setMostrarResenas(true);
    } catch (error) {
      console.error("Error al cargar las calificaciones del servicio:", error);
    }
  };

  const handleVerResenas = (servicioId) => {
    setServicioSeleccionado(servicioId);
    setMostrarResenas(true);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/servicios")
      .then((response) => {
        setServicios(response.data);
      })
      .catch((error) => {
        console.error("error getting services", error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <Row className="img-services services-container mb-5">
      {servicios.map((servicio, index) => (
        <Row
          data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
          key={index}
          className="bg-light my-2"
        >
          <Col lg={6} md={6} className="order-lg-1 img-services ">
            <img
              src={servicio.image}
              className="img-fluid "
              alt={servicio.nombre}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Col>
          <Col lg={6} md={6} className="order-lg-1 order-md-2">
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
              <Link to="" className="lumin-btn btn my-2 px-5">
                Reservar
              </Link>
              <button onClick={() => handleVerResenas(servicio.id)}>
                Ver Reseñas
              </button>
              {mostrarResenas && servicio.id === servicioSeleccionado && (
                <ResenasServicio
                  servicioId={servicio.id}
                  calificaciones={calificacionesDelServicio}
                />
              )}
            </article>
          </Col>
        </Row>
      ))}
    </Row>
  );
};

export default Services;
