import { Row, Col } from "react-bootstrap";
import React from "react";
import Formulario from "../Components/Contacto/Formulario";

const Contacto = () => {
//     return (
//         <div className="container home-container">
//             <Row className="d-flex justify-content-center align-items-center">
//                 <h1 className="hero-home mt-5 mb-0">Contáctanos</h1>
//                 <p className="subtitulo-contacto">Estamos aquí para ayudarte.</p>
//                 <Col
//                     lg={5}
//                     md={12}
//                     className="d-flex justify-content-center align-items-center flex-column"
//                 >
//                     <img
//                     src="https://res.cloudinary.com/daac4llxh/image/upload/v1697516626/spa-contacto_vxca0g.jpg"
//                     alt="image"
//                     className="imagen-contacto"
//                     />
//                 </Col>
//                 <Col 
//                     lg={5}
//                     md={12}
//                     className="d-flex justify-content-center align-items-center" 
//                 >
//                     <Formulario />
//                 </Col>
//             </Row>
//         </div>
//     );
// };

    return (
        <div className="container text-center">
                <h1 className="hero-home mt-5 mb-0">Contáctanos</h1>
                <p className="subtitulo-contacto">Estamos aquí para ayudarte.</p>
            <div className="contenedor-register-login mt-5 mb-5">
            <div className="row gy-3">
        
            <div className="col-lg-6">
                <img src="https://res.cloudinary.com/daac4llxh/image/upload/v1697516626/spa-contacto_vxca0g.jpg" alt="" className="login-img"/>
            </div>
            <div className="col-lg-6 " >
                <Formulario />
            </div>
        
            </div>
            </div>
        </div>
);
};

export default Contacto;





