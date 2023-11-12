import { Link, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();

  const validar = () => {
    let result = true;
    if (username == null || username == "") {
      result = false;
      toast.warning("Por favor ingrese un usuario");
    }
    if (password == null || password == "") {
      result = false;
      toast.warning("Por favor ingrese una contraseña");
    }
    return result;
  };

  const validLogin = (e) => {
    e.preventDefault();
    if (validar()) {
      fetch("http://localhost:3001/users/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Por favor ingresa un usuario válido");
          } else {
            if (resp.pass === password) {
              toast.success("Login exitoso!");
              sessionStorage.setItem("username", username);
              usenavigate("/");
            } else {
              toast.error("Credenciales incorrectas");
            }
          }
        })
        .catch((err) => {
          toast.error("El login falló por :" + err.message);
        });
    }
  };

  return (
    <div className="container text-center">
      <form onSubmit={validLogin} className="contenedor-register-login">
        <div className="row gy-3">
          <div className="col-lg-6">
            <img
              src="https://res.cloudinary.com/dehmb7i5p/image/upload/v1697479172/codigo360/pexels-antoni-shkraba-5205700_hrbeav.jpg"
              alt=""
              className="login-img"
            />
          </div>

          <div className="col-lg-6">
            <div className="col-lg-12">
              <h1> Log in </h1>
              <p> Ingresá tus datos para acceder. </p>
              <hr />
            </div>
            <div className="col-lg-12">
              <p className="texto-register-login"> Usuario </p>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="input"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <p className="texto-register-login"> Contraseña </p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="input"
                type="password"
                className="form-control"
              />
              <div className="col-lg-6">
                <div className="container text-start">
                  <input
                    type="submit"
                    value="Enviar"
                    className="boton-submit"
                  />
                </div>
              </div>
              <div>
                <Link to="/register" className="link-register-login">
                  ¿No creaste una cuenta? Apretá acá para registrarte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
