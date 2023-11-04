import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdWatchLater } from "react-icons/md";
import axios from "axios";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReviewsAccordion from "./ReviewsAccordion";

const Services = () => {
  const [servicios, setServicios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [calificacionesDelServicio, setCalificacionesDelServicio] = useState(
    []
  );
  const [nuevaResena, setNuevaResena] = useState({
    usuario: "",
    comentario: "",
    calificacion: 0,
  });

  const calcularPromedioCalificaciones = (servicioId) => {
    const calificaciones = calificacionesDelServicio.filter(
      (calificacion) => calificacion.servicioId === servicioId
    );
    if (calificaciones.length === 0) return 0;

    const sumatoriaCalificaciones = calificaciones.reduce(
      (total, calificacion) => total + calificacion.calificacion,
      0
    );
    return sumatoriaCalificaciones / calificaciones.length;
  };

  const cargarCalificacionesDelServicio = async (servicioId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/calificaciones?servicioId=${servicioId}`
      );
      setCalificacionesDelServicio(response.data);
      setMostrarModal(true);
    } catch (error) {
      console.error("Error al cargar las calificaciones del servicio:", error);
    }
  };

  const handleVerResenas = (servicioId) => {
    setServicioSeleccionado(servicioId);
    cargarCalificacionesDelServicio(servicioId);
  };

  const enviarResena = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/calificaciones",
        {
          servicioId: servicioSeleccionado,
          ...nuevaResena,
        }
      );

      if (response.status === 201) {
        setCalificacionesDelServicio([
          ...calificacionesDelServicio,
          response.data,
        ]);

        const promedio = calcularPromedioCalificaciones(servicioSeleccionado);
        setServicios((prevServicios) =>
          prevServicios.map((servicio) =>
            servicio.servicioId === servicioSeleccionado
              ? { ...servicio, promedioCalificaciones: promedio }
              : servicio
          )
        );

        setNuevaResena({ usuario: "", comentario: "", calificacion: 0 });
        setMostrarModal(false);
      } else {
        console.error("No se pudo agregar la reseña.");
      }
    } catch (error) {
      console.error("Error al agregar la reseña:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/servicios")
      .then((response) => {
        setServicios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los servicios", error);
      });
  }, [nuevaResena]);

  return (
    <Row className="img-services services-container mb-5">
      {servicios.map((servicio, index) => (
        <Row
          key={index}
          data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
          className="bg-light my-2"
        >
          <Col lg={6} md={6} className="img-services">
            <img
              src={servicio.image}
              className="img-fluid"
              alt={servicio.nombre}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Col>
          <Col lg={6} md={6}>
            <article className="servicio text-start">
              <h3 className="mt-4">{servicio.nombre}</h3>
              <Rating
                count={servicio.promedioCalificaciones}
                // value={servicio.promedioCalificaciones}
                size={24}
                edit={false}
                color="#FFD700"
                color2="#D3D3D3"
              />
              <hr />
              <p>{servicio.descripcion}</p>
              <p>
                <strong className="px-3"> {servicio.precio}</strong>
              </p>
              <div className="duration d-flex align-items-center">
                <MdWatchLater size={28} />
                <span className="mx-2">{servicio.duracion}</span>
              </div>
              <p>
                <del> {servicio.diasDisponibles.join(", ")}</del>
              </p>
              <Link to="" className="lumin-btn btn my-2 px-5">
                Reservar
              </Link>
              <button
                className="lumin-btn-secondary btn"
                onClick={() => handleVerResenas(servicio.servicioId)}
              >
                Calificar
              </button>
              <ReviewsAccordion
                resena={nuevaResena}
                servicioId={servicio.servicioId}
              />
            </article>
          </Col>
        </Row>
      ))}

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Dejá tu reseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mx-1" controlId="formUsuario">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                value={nuevaResena.usuario}
                onChange={(e) =>
                  setNuevaResena({ ...nuevaResena, usuario: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mx-1" controlId="formComentario">
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tu comentario"
                value={nuevaResena.comentario}
                onChange={(e) =>
                  setNuevaResena({ ...nuevaResena, comentario: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mx-1" controlId="formCalificacion">
              <Form.Label>Calificación</Form.Label>
              <Rating
                value={nuevaResena.calificacion}
                count={5}
                onChange={(value) =>
                  setNuevaResena({ ...nuevaResena, calificacion: value })
                }
                size={24}
                activeColor="#FFD700"
              />
            </Form.Group>
            <Button className="btn lumin-btn" onClick={enviarResena}>
              Enviar Reseña
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default Services;
