import React from "react";
import productos from "../Components/Store/Productos";
import Dropdown_btn from "../Components/Store/Dropdown_btn";

const Store = () =>{

  return(
  <div className="container-fluid column p-0">
    <div className="container-fluid d-flex justify-content-start-lg">
      <Dropdown_btn />
    </div>
    <div className="container-fluid column bg-primary">
      <div className="container-fluid mt-5 h-75">
        <div className="cards-container">
          <div
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          display: "flex",
          scrollBehavior: "smooth",
        }}
          className="my-5 "
          />
        </div>
      <div className="container-fluid mt-5 h-75">
        layer 2
      </div>
    </div>
  </div>
</div>
  )
}

export default Store;