import React, { useLayoutEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Login() {
  useLayoutEffect(() => {
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.add("sidebar-mini");
      document.body.classList.remove("login-page");
    }
  }, []);
  return (
    <div className="login-box">
      <div className="login-logo">
        <NavLink to="/">
          <b>Insta</b>Ya
        </NavLink>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">
            Inicia sesión para ingresar a la plataforma
          </p>
          <form action="" method="post">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
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
                className="form-control"
                placeholder="Contraseña"
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
            <NavLink to="/register" className="text-center">
              Registrarse en la plataforma
            </NavLink>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  );
}
