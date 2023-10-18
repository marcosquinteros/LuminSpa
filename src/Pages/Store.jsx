import React from "react";
import Productos from "../Components/Store/Productos";
import Dropdown_btn from "../Components/Store/Dropdown_btn";

const Store = () =>{
  return(
  <div className="container-fluid column p-0 overflow-x-hidden">
    <div className="container-fluid d-flex justify-content-start-lg mt-3 mx-3">
      <Dropdown_btn />
    </div>
    <div className="container-fluid column pt-5">
        <Productos />
    </div>
  </div>
  )
}

export default Store;