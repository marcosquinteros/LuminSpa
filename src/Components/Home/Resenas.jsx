import axios from "axios";
import React, { useState } from "react";

const ResenasServicio = ({
  servicioId,
  calificaciones,
  actualizarCalificaciones,
}) => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);

  const enviarResena = async () => {
    if (nombre && mensaje) {
      const nuevaResena = {
        servicioId,
        comentario: mensaje,
        usuario: nombre,
      };
      console.log(nuevaResena);
      try {
        const response = await axios.post(
          "http://localhost:3001/calificaciones",
          nuevaResena
        );
        if (response.status === 201) {
          actualizarCalificaciones([...calificaciones, response.data]);
          setShowModal(false);
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
