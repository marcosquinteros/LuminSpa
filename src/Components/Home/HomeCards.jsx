import React from "react";
import { Row, Col } from "react-bootstrap";

const productos = [
  {
    nombre: "Crema Hidratante Facial",
    precio: 20.99,
    descuento: 15,
  },
  {
    nombre: "Champú Reparador",
    precio: 12.5,
    descuento: 10,
  },
  {
    nombre: "Protector Solar SPF",
    precio: 18.75,
    descuento: 0,
  },
  {
    nombre: "Mascarilla Capilar Nutritiva",
    precio: 9.99,
    descuento: 20,
  },
];

const HomeCards = () => {
  return (
    <Row className="overflow-auto d-flex my-5">
      {productos.map((producto, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 card-content">
            <img
              className="card-img-top"
              src="" // Actualiza la ruta de la imagen según tus necesidades
              alt=""
            />
            <div className="card-body d-flex flex-column align-items-start">
              <h4 className="card-title">{producto.nombre}</h4>
              <div className="card-text">
                <p className="card-dicount">
                  <del>${producto.precio.toFixed(2)}</del>{" "}
                  <strong>{producto.descuento}%</strong>
                </p>
                <div className="card-price">
                  <p>
                    $
                    {(
                      producto.precio -
                      (producto.precio * producto.descuento) / 100
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
              <a href="../html/404.html" className="buy-button">
                Comprar
              </a>
            </div>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default HomeCards;
