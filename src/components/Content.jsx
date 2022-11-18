import React from "react";

export default function Content() {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Inicio - Listado de órdenes</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="">Inicio</a>
                </li>
                <li className="breadcrumb-item active">Listado de órdenes</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th style={{ width: 100 }}># Servicio</th>
                <th>Fecha</th>
                <th>Ciudad Entrega</th>
                <th>Dirección Entrega</th>
                <th>Estado</th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              
            </tbody>
          </table>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
}
