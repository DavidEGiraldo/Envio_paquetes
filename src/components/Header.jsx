import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" data-widget="pushmenu" to="#" role="button">
            <i className="fas fa-bars" />
          </NavLink>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>
            Inicio
          </NavLink>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <Link to="login" className="nav-link active">
            <p><i class="fas fa-sign-out-alt"></i> Cerrar sesión</p>
          </Link>
 
        </li>
      </ul>
    </nav>
  );
}
