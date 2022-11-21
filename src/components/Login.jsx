import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("login-page");
  }, []);
  return (
    <div className="login-box">
      <div className="login-logo">
        <a href="/">
          <b>Insta</b>Ya
        </a>
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
            <a href="">Olvidé mi contraseña</a>
          </p>
          <p className="mb-0">
            <a href="register" className="text-center">
              Registrarse en la plataforma
            </a>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  );
}
