import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import axios from "axios";
const ReviewsAccordion = ({ servicioId }) => {
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
  }, []);
  //   console.log(reviews);
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ver reseñas</Accordion.Header>
        <Accordion.Body>
          {reviews ? (
            reviews.map((review, index) => (
              <div className="review-container" key={index}>
                {review.usuario}
              </div>
            ))
          ) : (
            <p>No hay reseñas disponibles.</p>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ReviewsAccordion;
