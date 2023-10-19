import { Row, Col, Button } from "react-bootstrap";
import React from "react";
import Formulario from "../Components/Contacto/Formulario";

const Contacto = () => {
    return (
        <div className="container home-container">
            <Row className="d-flex justify-content-center align-items-center">
                <h1 className="hero-home mt-5">Contáctanos. Tu belleza es nuestra pasión</h1>
                <Col
                    lg={5}
                    md={12}
                    className="d-flex justify-content-center align-items-center flex-column"
                >
                    <img
                    src="https://res.cloudinary.com/daac4llxh/image/upload/v1697516626/spa-contacto_vxca0g.jpg"
                    alt="image"
                    className="imagen-contacto"
                    />
                </Col>
                <Col 
                    lg={5}
                    md={12}
                    className="d-flex justify-content-center align-items-center" 
                >
                    <Formulario />
                </Col>
            </Row>
        </div>
    );
};

export default Contacto;

