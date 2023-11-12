import { Row, Col } from "react-bootstrap";
import React from "react";
import Formulario from "../Components/Contacto/Formulario";

const Contacto = () => {
    return (
        <div className="container text-center">
            <div className="contenedor-register-login mt-5 mb-5">
            <div className="row gy-3">
        
            <div className="col-lg-6">
                <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1697516626/spa-contacto_vxca0g.jpg" alt="" className="login-img mt-3"/>
            </div>
            <div className="col-lg-6 " >
                <h1 className="mt-5 mb-0">Contáctanos</h1>
                <p className="subtitulo-contacto">Estamos aquí para ayudarte.</p>
                <Formulario />
            </div>
        
            </div>
            </div>
        </div>
);
};

export default Contacto;





