import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-lumin.png";
import { toast } from "react-toastify";

import { MdShoppingCart, MdMenu } from "react-icons/md";
import "./layout.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex">
        <div className="d-flex justify-content-between">
          <Link to="/" className="d-flex align-items-center my-3">
            <img src={Logo} className="w-25" alt="" />
          </Link>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="navbarNav"
            aria-expanded={open}
            className="navbar-toggler lumin-btn "
          >
            <MdMenu size={30} />
          </Button>
        </div>
      </div>
      <Collapse in={open}>
        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/Categories" className="nav-link">
                Tienda
              </Link>
            </li>
            <div className="btns d-flex justify-content-between">
              <li className="nav-item">
                <button
                  className="btn cart"
                  onClick={() => {
                    toast.warning("Esta funcion aun está en desarrollo 🤖");
                  }}
                >
                  <MdShoppingCart size={23} />
                </button>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn lumin-btn">
                  Ingresar
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </Collapse>
    </nav>
  );
};

export default Navbar;
