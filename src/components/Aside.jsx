import React from "react";

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        <img
          src="logo_InstaYa.png"
          alt="InstaYa Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-normal">InstaYa</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="usuario.png"
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
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-list" />
                <p>
                  Opciones
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/" className="nav-link active">
                    <i className="fas fa-table nav-icon" />
                    <p>Listado de órdenes</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="newOrder" className="nav-link">
                    <i className="fas fa-plus-circle nav-icon" />
                    <p>Agregar una órden</p>
                  </a>
                </li>
              </ul>
            </li>
            <hr />
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>
                  Cerrar sesión
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
