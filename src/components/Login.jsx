import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.add("sidebar-mini");
      document.body.classList.remove("login-page");
    };
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    axios
      .post("http://localhost:5000/users/login", loginData)
      .then((response) => {
        console.log(response.data);
      });

    //navigate("/")
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setLoginData({ ...loginData, [e.target.id]: value });
  };

  return (
    <div className="login-box">
      <div className="login-logo">
        <Link to="/">
          <b>Insta</b>Ya
        </Link>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">
            Inicia sesión para ingresar a la plataforma
          </p>
          <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={loginData.email || ""}
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
                value={loginData.password || ""}
                onChange={handleOnChange}
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
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recordarme</label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Ingresar
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <p className="mb-1">
            <Link to="#">Olvidé mi contraseña</Link>
          </p>
          <p className="mb-0">
            <Link to="/register" className="text-center">
              Registrarse en la plataforma
            </Link>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  );
}
