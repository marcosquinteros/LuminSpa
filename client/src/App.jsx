import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Store from "./Pages/Store";
import Contacto from "./Pages/Contacto";
import Nosotros from "./Pages/Nosotros";
import ProductDetail from "./Pages/ProductDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Store" element={<Store />} />
          <Route path="Store/:categoria" element={<Store />} />
          <Route path="/Store/product/:id" element={<ProductDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer pathIndex="/Inicio" pathNosotros="/Nosotros" pathError="/*" />
      </Router>
    </div>
  );
}

export default App;
