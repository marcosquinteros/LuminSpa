import React, { useState } from 'react'
import Products from './Products';

const StoreCat = () => {
    const [data, setData] = useState(Products);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        if (category === "all") {
            setData(Products);
        } else {
        const result = Products.filter((curData) => {
            return curData.categoria === category;
        });
        setData(result);
        }
    }

    return (
        <>
            <h1 className="text-center mt-3">Catalogo</h1>
            <div className="container-fluid mx-2">
                <div className="col d-flex align-items-start">
                    <div className="m-3 mx-5">
                        <label htmlFor="categoryDropdown">Selecciona una categoría:</label>
                        <select
                            id="categoryDropdown"
                            className="form-select"
                            value={selectedCategory}
                            onChange={handleCategoryChange}>
                            <option value="all">Todo</option>
                            <option value="cabello">Cabello</option>
                            <option value="cara">Cara</option>
                            <option value="cuerpo">Cuerpo</option>
                        </select>
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center col-12">
                    {data.map((values) => {
                        const { image, nombre, precio, descuento } = values;
                        return (
                            <>
                                <div className="col-md-3 m-5 d-flex align-items-center justify-content-center" key={image}>
                                    <div className="card card-content mb-3">
                                        <img className="card-img-top" src={image} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h5 className="card-title">{nombre}</h5>
                                            <p>Precio original: ${precio}</p>
                                            <p className="card-dicount">
                                                Precio con descuento: $
                                                {(
                                                    precio -
                                                    (precio * descuento) / 100
                                                ).toFixed(2)}
                                            </p>
                                            <a href="../html/404.html" className="buy-button">Añadir al Carrito</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default StoreCat;