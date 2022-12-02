import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  useLayoutEffect(() => {
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.add("sidebar-mini");
      document.body.classList.remove("login-page");
    };
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setRegisterData({ ...registerData, [e.target.id]: value });
  };

  return (
    <div className="register-box">
      <div className="register-logo">
        <Link to="/">
          <b>Insta</b>Ya
        </Link>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Registrarse en la plataforma</p>
          <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Nombre completo"
                value={registerData.name}
                onChange={handleOnChange}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={registerData.email}
                onChange={handleOnChange}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Contraseña"
                value={registerData.password}
                onChange={handleOnChange}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirma la contraseña"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  <label htmlFor="agreeTerms">
                    Acepto los <Link to="#">términos</Link>
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Registro
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <Link to="/login" className="text-center">
            Ya estoy registrado
          </Link>
        </div>
        {/* /.form-box */}
      </div>
      {/* /.card */}
    </div>
  );
}
