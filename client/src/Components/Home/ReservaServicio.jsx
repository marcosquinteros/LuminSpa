import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservaServicio = ({ servicio, onReservar }) => {
  const [fechaReserva, setFechaReserva] = useState(null);

  const handleReservar = () => {
    if (fechaReserva) {
      const reserva = {
        servicio: servicio.nombre,
        fecha: fechaReserva,
        hora: fechaReserva.getHours() + ":" + fechaReserva.getMinutes(),
      };

      localStorage.setItem("reserva", JSON.stringify(reserva));

      onReservar();
    } else {
      alert("Por favor, selecciona una fecha y hora para la reserva.");
    }
  };

  return (
    <div>
      <button className="lumin-btn btn my-2 px-5" onClick={handleReservar}>
        Reservar
      </button>
      <DatePicker
        className="mx-2"
        selected={fechaReserva}
        onChange={(date) => setFechaReserva(date)}
        showTimeSelect
        dateFormat="dd/MM/yyyy h:mm aa"
      />
    </div>
  );
};

export default ReservaServicio;
