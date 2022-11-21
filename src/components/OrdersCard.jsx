import React from "react";
import OrdersTable from "./OrdersTable";

export default function OrdersCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Listado de órdenes</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i className="fas fa-minus" />
          </button>
        </div>
      </div>
      <div className="card-body table-responsive p-0" style={{height: '60vh'}}>
        <OrdersTable/>
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <a href="newOrder" class="btn btn-sm btn-info float-right">Agregar nueva órden</a>
      </div>
      {/* /.card-footer*/}
    </div>
  );
}
