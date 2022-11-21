import React from "react";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">
            Inicio
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <a href="#" className="nav-link active">
            <p><i class="fas fa-sign-out-alt"></i> Cerrar sesión</p>
          </a>
 
        </li>
      </ul>
    </nav>
  );
}
