import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from "react-router-dom";

const StoreCat = ({ categoria }) => {
  const [data, setData] = useState(Products);

  useEffect(() => {
    if (categoria === "all") {
      setData(Products);
    } else {
      const result = Products.filter((curData) => {
        return curData.categoria === categoria;
      });
      setData(result);
    }
  }, [categoria]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    if (newCategory === "all") {
      setData(Products);
    } else {
      setData(Products.filter((curData) => curData.categoria === newCategory));
    }
  };

  return (
    <>
      <h1 className="text-center mt-3">Catálogo</h1>
      <div className="container-fluid mx-2">
        <div className="col d-flex align-items-start">
          <div className="m-3 mx-5">
            <label htmlFor="categoryDropdown">Selecciona una categoría:</label>
            <select
              id="categoryDropdown"
              className="form-select"
              value={categoria}
              onChange={handleCategoryChange}
            >
              <option value="all">Todo</option>
              <option value="cabello">Cabello</option>
              <option value="cara">Cara</option>
              <option value="cuerpo">Cuerpo</option>
            </select>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          {data.map((product, index) => {
            const { image, nombre, precio, descuento } = product;
            const final_price = (precio - (precio * descuento) / 100).toFixed(2);
            return (
              <div
                className="col col-md-3 m-1 d-flex align-items-center justify-content-center"
                key={image}
              >
                <div className="card card-content mb-3">
                  <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p>Precio original: ${precio}</p>
                    <p className="card-dicount">{final_price}</p>
                    <Link
                      to={`/Store/product/${product.id}`}
                      className="buy-button"
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StoreCat;
