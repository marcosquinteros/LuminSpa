import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import Tarjetas from "../Components/Nosotros/Tarjetas";

const Nosotros = () => {
    return (
        <div className="container">
            <h1 className="hero-home mt-4 mb-4"> Sobre Nosostros</h1>
            <Row className="section1">
                
                <Col md={6} className=''>
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
                    <h3>Equipo de Trabajo</h3>
                    <p>Somos un equipo apasionado de jóvenes programadores que creo una
                    plataforma en línea para esta importante empresa de cosmetica como lo es LuminSpa. Nuestro
                    objetivo es facilitar y brindar una experiencia única y accesible a los amantes
                    del bienestar personal. Nos esforzamos por proporcionar una
                    experiencia de compra sin complicaciones y poder guiarlos en el camino hacia la belleza.
                    </p>
                </Col>
                <Col md={6} className="d-flex align-items-center">

                        <div className='div-integrantes'>
                            <h6>Quinteros Macrcos</h6>
                            <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1699420154/marcos_fy2uo3.jpg" className="img-integrantes" alt="img-paul" />
                            <p>Scrum Master/
                                Equipo de Desarrollo</p>
                            <h6>Urcan John Paul</h6>
                            <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1699418511/pual_l2lbze.jpg" className="img-integrantes" alt="img-paul" />
                            <p>Equipo de Desarrollo</p>
                        </div>
                        <div className='div-integrantes'>
                            <h6>Grande Matias</h6>
                            <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1699418510/bigmati_akzii4.jpg" className="img-integrantes" alt="img-paul" />
                            <p>Producto Owner/
                                Equipo de Desarrollo</p>
                            <h6>Lacki Santiago</h6>
                            <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1699420155/santiago_mhbjpk.jpg" className="img-integrantes" alt="img-paul" />
                            <p>Equipo de Desarrollo</p>
                        </div>

                </Col>
            </Row>
        </div>
    )
}


export default Nosotros;





