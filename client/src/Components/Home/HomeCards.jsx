import { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const productos = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163028/z6cie3eyedslgaida7dr.png",
    nombre: "Crema Hidratante",
    precio: 20.99,
    descuento: 15,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163027/ti48aqfw5yas0erdz0d9.png",
    nombre: "Champú Reparador",
    precio: 12.5,
    descuento: 10,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163028/lttyeixbx3rzhqgijobc.png",
    nombre: "Protector Solar SPF",
    precio: 18.75,
    descuento: 0,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163027/ddehiqm7hxb64anscmcy.png",
    nombre: "Mascarilla Capilar",
    precio: 9.99,
    descuento: 20,
  },
];

const HomeCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
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
            data-aos="fade-up"
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
                <Link
                  to={`/Store/product/${producto.id}`}
                  className="buy-button"
                >
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/categories" className="btn lumin-btn px-5">
        Ir a la tienda
      </Link>
    </div>
  );
};

export default HomeCards;
