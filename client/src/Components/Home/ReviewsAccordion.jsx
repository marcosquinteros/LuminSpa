import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import axios from "axios";
import CalificacionConEstrellas from "./CalificacionConEstrellas";
const ReviewsAccordion = ({ servicioId, resena }) => {
  const [reviews, setReviews] = useState([]);

  const cargarResenasDelServicio = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/calificaciones?servicioId=${servicioId}`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error al cargar las reseñas del servicio:", error);
    }
  };

  useEffect(() => {
    cargarResenasDelServicio();
  }, [resena]);
  //   console.log(reviews);
  return (
    <Accordion className="my-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ver reseñas</Accordion.Header>
        <Accordion.Body>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div className="review-container py-1" key={index}>
                <div className="box border p-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <strong>{review.usuario} </strong>
                    <CalificacionConEstrellas
                      calificacion={review.calificacion}
                    />
                  </div>
                  <p className="mx-2">{review.comentario}</p>
                </div>
                {/* <hr /> */}
              </div>
            ))
          ) : (
            <p className="py-1">No hay reseñas disponibles.</p>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ReviewsAccordion;
