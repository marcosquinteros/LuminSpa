import React from "react";
import productos from "../Components/Store/Productos";

class Store extends React.Component {
  render() {
    const categoria = this.props.match.params.categoria;

    const productosFiltrados = productos.filter(
      (producto) => producto.categoria === categoria
    );

    return (
      <div>
        <h2>Tienda - Categoría: {categoria}</h2>
        <ul>
          {productosFiltrados.map((producto, index) => (
            <li key={index}>{producto.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Store;