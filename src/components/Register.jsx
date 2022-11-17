import React, { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("register-page");
  }, []);
  return (
    <div className="register-box">
      <div className="register-logo">
        <a href="../../index3.html">
          <b>Insta</b>Ya
        </a>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Registrarse en la plataforma</p>
          <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre completo"
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
                    Acepto los <a href="#">términos</a>
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
          <a href="login.html" className="text-center">
            Ya estoy registrado
          </a>
        </div>
        {/* /.form-box */}
      </div>
      {/* /.card */}
    </div>
  );
}
