import axios from "axios";
import React, { useState } from "react";

const ResenasServicio = ({ servicioId, calificaciones }) => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarResena = async () => {
    if (nombre && mensaje && calificacion > 0) {
      // Construye el objeto de reseña
      const nuevaResena = {
        servicioId,
        calificacion,
        comentario: mensaje,
        usuario: nombre,
      };

      try {
        const response = await axios.post(
          "http://localhost:3001/calificaciones",
          nuevaResena
        ); // Ajusta la URL al servidor JSON

        if (response.status === 201) {
          actualizarCalificaciones([...calificaciones, response.data]);
        } else {
          console.error("No se pudo agregar la reseña.");
        }
      } catch (error) {
        console.error("Error al agregar la reseña:", error);
      }
    }
  };

  return (
    <div>
      <h4>Reseñas del Servicio</h4>
      {calificaciones.map((resena, index) => (
        <div key={index}>
          <p>Calificación: {resena.calificacion}</p>
          <p>Comentario: {resena.comentario}</p>
        </div>
      ))}
      <h4>Deja tu reseña</h4>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button onClick={enviarResena}>Enviar Reseña</button>
    </div>
  );
};

export default ResenasServicio;
