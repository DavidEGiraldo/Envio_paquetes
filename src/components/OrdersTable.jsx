import React from "react";

export default function OrdersTable() {
  return (
    <table className="table table-striped table-hover table-head-fixed">
      <thead>
        <tr>
          <th style={{ width: 110 }}># Servicio</th>
          <th>Fecha</th>
          <th>Ciudad Entrega</th>
          <th>Dirección Entrega</th>
          <th>Estado</th>
          <th style={{ width: 40 }}>Opciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">

      </tbody>
    </table>
  );
}
