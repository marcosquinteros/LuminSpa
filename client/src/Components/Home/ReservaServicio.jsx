import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Modal, Button, ToastContainer } from "react-bootstrap";
import { AiFillCalendar } from "react-icons/ai";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { toast } from "react-toastify";
const ReservaServicio = ({ servicio, onReservar }) => {
  const [fechaReserva, setFechaReserva] = useState(null);
  const [show, setShow] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  initMercadoPago("TEST-0415562c-63d7-4fd6-be12-218fa2b95f3d");
  const createPreference = async (name, price) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: name,
          price: price,
          quantity: 1,
        }
      );
      const { id } = response.data;
      return id;
    } catch (err) {
      console.log(err);
    }
  };
  const handleBuy = async (name, price) => {
    const id = await createPreference(name, price);
    if (id) {
      setPreferenceId(id);
      setNotificationMessage("Reservacion exitosa!");
      setShowNotification(true);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleReservar = () => {
    if (fechaReserva) {
      const reserva = {
        servicio: servicio.nombre,
        fecha: fechaReserva,
        hora: fechaReserva.getHours() + ":" + fechaReserva.getMinutes(),
      };

      localStorage.setItem("reserva", JSON.stringify(reserva));

      onReservar();
      handleClose(); // Cierra el modal después de hacer la reserva
    } else {
      alert("Por favor, selecciona una fecha y hora para la reserva.");
    }
  };
  return (
    <div>
      <button className="btn mt-2 lumin-btn px-5" onClick={handleShow}>
        Reservar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-between m-2">
            <h4>{servicio.nombre}</h4>
            <h2 className="border px-3 py-1"> ${servicio.precio}</h2>
          </div>
          {/* <hr /> */}
          <div className="d-flex align-items-center ">
            {/* <p className="m-2">Eleji la fecha</p> */}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <AiFillCalendar size={30} />
            <DatePicker
              className="mx-2"
              selected={fechaReserva}
              onChange={(date) => setFechaReserva(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
            />
            <Button
              className="lumin-btn"
              onClick={() => handleBuy(servicio.nombre, servicio.precio)}
            >
              Reservar
            </Button>
          </div>
          {/* <hr /> */}
        </Modal.Body>
        <Modal.Footer>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </Modal.Footer>
      </Modal>
      {showNotification && (
        <div className="notification-container">
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default ReservaServicio;
