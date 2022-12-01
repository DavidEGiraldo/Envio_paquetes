import React from "react";
import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <NavLink to="/" className="brand-link">
        <img
          src="/logo_InstaYa.png"
          alt="InstaYa Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-normal">InstaYa</span>
      </NavLink>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/usuario.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a className="d-block">
              Nombre de usuario
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <NavLink to="#" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>
                <i className="nav-icon fas fa-list" />
                <p>
                  Opciones
                  <i className="right fas fa-angle-left" />
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>
                    <i className="fas fa-table nav-icon" />
                    <p>Listado de órdenes</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="newOrder" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>
                    <i className="fas fa-plus-circle nav-icon" />
                    <p>Agregar una órden</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink to="login" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>
                  Cerrar sesión
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
