import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const productos = [
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163028/z6cie3eyedslgaida7dr.png",
    nombre: "Crema Hidratante",
    precio: 20.99,
    descuento: 15,
  },
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163027/ti48aqfw5yas0erdz0d9.png",
    nombre: "Champú Reparador",
    precio: 12.5,
    descuento: 10,
  },
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163028/lttyeixbx3rzhqgijobc.png",
    nombre: "Protector Solar SPF",
    precio: 18.75,
    descuento: 0,
  },
  {
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163027/ddehiqm7hxb64anscmcy.png",
    nombre: "Mascarilla Capilar",
    precio: 9.99,
    descuento: 20,
  },
];

const HomeCards = () => {
  return (
    <div className="cards-container">
      <div
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          display: "flex",
          scrollBehavior: "smooth",
        }}
        className="my-5 "
      >
        {productos.map((producto, index) => (
          <div
            key={index}
            style={{
              scrollSnapAlign: "start",
              width: "100%",
              maxWidth: "300px",
            }}
            className="col-lg-3 col-md-6 m-2 "
          >
            <div className="card h-100 card-content">
              <img className="card-img-top" src={producto.image} alt="" />
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
      </div>
      <Button className="btn lumin-btn">Ir a la tienda</Button>
    </div>
  );
};

export default HomeCards;
