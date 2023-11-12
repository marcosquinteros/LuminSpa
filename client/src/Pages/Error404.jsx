import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/404animation.json";
const Error404 = () => {
  return (
    <div className=" bg-light">
      <div className=" d-flex justify-content-center">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 700, height: 500 }}
        />
      </div>
      <h3>Lo sentimos</h3>
      <p>La pagina que está buscando no existe</p>
      <button className="lumin-btn btn my-3">Volver al incio</button>
    </div>
  );
};

export default Error404;
