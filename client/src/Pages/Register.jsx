import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterC = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState(" ");

  const IsValid = () => {
    let isproceed = true;
    let errormessage = "Todos los campos son obligatorios: ";
    if (name == null || name == "") {
      isproceed = false;
      errormessage += "Name. ";
    }
    if (id == null || id == "") {
      isproceed = false;
      errormessage += "Usuario. ";
    }
    if (pass == null || pass == "") {
      isproceed = false;
      errormessage += "Contraseña. ";
    }
    if (pass2 == null || pass2 == "") {
      isproceed = false;
      errormessage += "Confirmar Contraseña. ";
    }
    if (email == null || email == "") {
      isproceed = false;
      errormessage += "Email. ";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    }
    return isproceed;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let regobj = { id, name, pass, pass2, email, sex };

    if (IsValid()) {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registro existoso: ");
        })
        .catch((err) => {
          toast.error("Error:" + err.message);
        });
    }
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleSumbit} className="contenedor-register-login">
        <div className="contenedor-form-register">
          <div className="row gy-5">
            <div className="col-lg-6">
              <h1 className="titulo-register mt-4"> Registro </h1>
              <p> Brindanos un par de datos para comenzar. </p>
              <hr />
              <div>
                <div className="col-lg-12">
                  <p className="texto-register-login"> Nombre Completo </p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                    type="text"
                    name="nombre"
                    id="input"
                    className="form-control"
                  />
                </div>
              </div>

              <br />

              <div className="col-lg-12">
                <div className="row gy-5">
                  <div>
                    <label className="texto-register-login">Sexo</label>
                    <br />
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        checked={sex === "masculino"}
                        onChange={(e) => setSex(e.target.value)}
                        name="flexRadioDefault"
                        value="masculino"
                      />
                      <label
                        id="masculino"
                        className="form-check-label"
                        htmlFor="masculino"
                      >
                        {" "}
                        Masculino{" "}
                      </label>

                      <input
                        className="form-check-input"
                        type="radio"
                        checked={sex === "femenino"}
                        onChange={(e) => setSex(e.target.value)}
                        name="flexRadioDefault"
                        value="femenino"
                      />
                      <label
                        id="femenino"
                        className="form-check-label"
                        htmlFor="femenino"
                      >
                        {" "}
                        Femenino{" "}
                      </label>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>

              <div className="col-lg-12">
                <p className="texto-register-login"> E-mail </p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="input"
                  placeholder=""
                  type="email"
                  name="user_email"
                  className="form-control"
                />
              </div>

              <div>
                <div className="col-lg-12">
                  <p className="texto-register-login"> Usuario </p>
                  <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    id="input"
                    placeholder=""
                    type="text"
                    name="username"
                    className="form-control "
                  />{" "}
                </div>
              </div>
              <div className="col-lg-12">
                <p className="texto-register-login"> Contraseña </p>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  id="input"
                  placeholder=""
                  type="text"
                  name="password"
                  className="form-control "
                />{" "}
              </div>

              <div>
                <div className="col-lg-6">
                  <p className="texto-register-login">
                    {" "}
                    Ingrese la contraseña de nuevo{" "}
                  </p>
                  <input
                    value={pass2}
                    onChange={(e) => setPass2(e.target.value)}
                    id="input"
                    placeholder=""
                    type="text"
                    name="password2"
                    className="form-control "
                  />{" "}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="container text-start">
                  <input
                    type="submit"
                    value="Enviar"
                    className="boton-submit"
                  />
                </div>
              </div>
              <div className="link-register">
                <Link to="/login" className="link-register-login">
                  ¿Ya tenés una cuenta? Apretá acá para ingresar.
                </Link>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="contenedor-imagen-register ">
                <div className="imagen-register">
                  <img
                    src="https://res.cloudinary.com/dehmb7i5p/image/upload/v1697472156/codigo360/pexels-yan-krukau-7011186_uhjuws.jpg"
                    alt=""
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterC;
