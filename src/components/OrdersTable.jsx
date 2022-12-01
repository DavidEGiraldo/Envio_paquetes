import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";

export default function OrdersTable() {
  const [orders, setOrders] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/orders/").then((result) => {
      console.log(result);
      setOrders(result.data);
    });
  }, [update]);

  const handleDeleteClick = (orderId) => {
    axios
      .delete("http://localhost:5000/orders/delete/" + orderId)
      .then((response) => {
        console.log(response.data);
        setUpdate(!update);
      });
  };

  return (
    <table className="table table-striped table-hover table-head-fixed text-center">
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
        {orders
          ? orders.map((order, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{dateFormat(order.fecha, "dd-mm-yyyy")}</td>
                  <td>{order.ciudadEnvio}</td>
                  <td>{order.direccionEnvio}</td>
                  <td>{order.estado}</td>
                  <td className="btn-group" role="group">
                    <Link
                      className="btn btn-warning"
                      to={"/editOrder/" + order._id}
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <a
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(order._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </a>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
