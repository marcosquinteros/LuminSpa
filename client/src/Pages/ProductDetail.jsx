import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Products from "../Components/Store/Products";
function ProductDetail() {
  const { id } = useParams();
  const [preferenceId, setPreferenceId] = useState(null);
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
    }
  };

  const getProductById = (productId) => {
    return Products.find((product) => product.id.toString() === productId);
  };

  const product = getProductById(id);
  const final_price = (
    product.precio -
    (product.precio * product.descuento) / 100
  ).toFixed(2);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-container container">
      <Row className="m-2 bg-light">
        <Col sm={12} md={6}>
          <img
            src={product.image}
            className="img-fluid border"
            alt={product.nombre}
          />
        </Col>
        <Col sm={12} md={6}>
          <h3 className="text-start mt-4">{product.nombre}</h3>
          <h5 className="category-prod text-start">{product.categoria}</h5>
          <hr />
          <div className="d-flex  p-2">
            <div className=" d-flex flex-column align-items-start">
              <div className="card-text">
                <p className="card-dicount">
                  <del>${product.precio.toFixed(2)}</del>
                  <strong className="mx-2">{product.descuento}%</strong>
                </p>
                <div className="card-price">
                  <p className="">${final_price}</p>
                </div>
              </div>
              <button
                onClick={() => handleBuy(product.nombre, final_price)}
                className="buy-button px-5"
              >
                Comprar
              </button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </div>
          </div>
          <h5 className="description-prod text-start mt-3">{product.descripcion}</h5>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
