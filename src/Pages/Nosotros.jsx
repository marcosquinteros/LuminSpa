import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

const Nosotros = () => {
    return (
        <div className="container">
            <Row className="section1">
                <Col md={6}>
                    <h1>¿Quiénes Somos?</h1>
                    <p>Somos LuminSpa, nuestra pasión es resaltar la belleza natural de cada persona.
                        Nos dedicamos a proporcionar servicios de estética de alta calidad y cuidado de la piel para ayudar
                        a nuestros clientes a sentirse seguros y hermosos. 
                        Nuestro equipo de expertos en belleza se enorgullece de ofrecer tratamientos personalizados
                        y un ambiente acogedor. Creemos en la importancia de cuidar tanto el cuerpo como la mente.</p>
                </Col>
                <Col md={6}>
                    <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1697694768/galeria-lumin_sm0eyt.gif" className="img-fluid" alt="Imagen 1" />
                </Col>
            </Row>
        
            <Row className="section2">
                <Col md={6}>
                    <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1697697300/aparatos-lumin_g8kndd.jpg" className="img-fluid" alt="Imagen 2" />
                </Col>
                <Col md={6}>
                    <h2>Nuestros Servicios</h2>
                    <p>En LuminSpa nos enorgullece ofrecer una amplia gama de productos y servicios de alta calidad 
                        diseñados para realzar tu belleza y bienestar. Nuestra pasión por la estética y el cuidado 
                        personal nos impulsa a brindar soluciones personalizadas que te harán sentir confiado y radiante.
                    </p>
                </Col>
            </Row>
        
            <Row className="section3">
                <Col md={6}>
                    <h3>Contacto</h3>
                    <p>Información de contacto.</p>
                </Col>
                <Col md={6}>
                    <img src="imagen3.jpg" className="img-fluid" alt="Imagen 3" />
                </Col>
            </Row>
        </div>
    )
}


export default Nosotros;





