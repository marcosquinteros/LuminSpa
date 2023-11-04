import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const CalificacionConEstrellas = ({ calificacion }) => {
  const estrellas = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= calificacion) {
      estrellas.push(<FaStar key={i} />);
    } else {
      estrellas.push(<FaRegStar key={i} />);
    }
  }

  return <div>{estrellas}</div>;
};

export default CalificacionConEstrellas;
