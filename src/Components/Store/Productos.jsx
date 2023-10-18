import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col, Button } from "react-bootstrap";

const productos = [
  {
      image:
        "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163028/z6cie3eyedslgaida7dr.png",
      nombre: "Crema Hidratante",
      precio: 20.99,
      descuento: 15,
      categoria: "cara"
    },
    {
      image:
        "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163027/ti48aqfw5yas0erdz0d9.png",
      nombre: "Champú Reparador",
      precio: 12.5,
      descuento: 10,
      categoria: "cabello"
    },
    {
      image:
        "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163028/lttyeixbx3rzhqgijobc.png",
      nombre: "Protector Solar SPF",
      precio: 18.75,
      descuento: 0,
      categoria: "cara"
    },
    {
      image:
        "https://res.cloudinary.com/dmmviigbv/image/upload/v1697163027/ddehiqm7hxb64anscmcy.png",
      nombre: "Mascarilla Capilar",
      precio: 9.99,
      descuento: 20,
      categoria: "cabello"
    },
    {
      image:
        "URL de la imagen 1",
      nombre: "Producto de Cuidado Corporal 1",
      precio: 15.99,
      descuento: 10,
      categoria: "cuerpo",
    },
    {
      image:
        "URL de la imagen 2",
      nombre: "Producto de Cuidado Corporal 2",
      precio: 9.5,
      descuento: 5,
      categoria: "cuerpo",
    },
    {
      image:
        "URL de la imagen 3",
      nombre: "Producto de Cuidado Corporal 3",
      precio: 14.25,
      descuento: 15,
      categoria: "cuerpo",
    },
    {
      image:
        "URL de la imagen 4",
      nombre: "Producto de Cuidado Corporal 4",
      precio: 12.99,
      descuento: 0,
      categoria: "cuerpo",
    },
    {
      image:
        "URL de la imagen 5",
      nombre: "Producto de Cuidado Corporal 5",
      precio: 8.75,
      descuento: 10,
      categoria: "cuerpo",
    },
];

const Productos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const productosPorFila = [];
  for (let i = 0; i < productos.length; i += 3) {
    productosPorFila.push(productos.slice(i, i + 3));
  }
  return (
    <div className="cards-container">
      {productosPorFila.map((fila, filaIndex) => (
        <div
          key={filaIndex}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flexDirection: "row",
            scrollBehavior: "smooth",
            overflow: "hidden",
            marginTop: filaIndex > 0 ? "2rem" : "0", // Espaciado entre filas
          }}
          className="my-5 justify-content-center"
        >
          {fila.map((producto, index) => (
            <div
              key={index}
              style={{
                scrollSnapAlign: "start",
                flex: "1",
                maxWidth: "300px",
                margin: "0.5rem",
              }}
              data-aos="fade-up"
              className="col-lg-4 col-md-6 mx-5"
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
      ))}
    </div>
  );
};

export default Productos;