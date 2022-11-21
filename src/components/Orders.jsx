import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import OrdersCard from "./OrdersCard";

export default function Orders() {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Inicio</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Inicio</a>
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
            <OrdersCard />
          </div>

          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>

      <Footer />
    </div>
  );
}
