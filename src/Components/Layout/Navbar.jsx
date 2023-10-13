import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "./layout.css";
const Navbar = () => {
  return (
    <nav className="d-flex p-3 bg-white justify-content-between">
      <div className="nav-left d-flex align-items-center ">
        <h5>LuminSpa</h5>
        <button className="btn mx-3 btn lumin-btn">Servicios</button>
      </div>
      <div className="nav-right d-flex align-items-center">
        <button className="btn cart mx-3">
          <MdShoppingCart size={23} />
        </button>
        <button className="btn lumin-btn">Ingresar</button>
      </div>
    </nav>
  );
};

export default Navbar;
