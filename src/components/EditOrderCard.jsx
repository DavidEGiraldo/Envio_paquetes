import React, { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";

export default function EditOrderCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    fecha: "",
    hora: "",
    estado: "Guardado",
    ancho: "",
    alto: "",
    largo: "",
    peso: "",
    isDelicado: false,
    nombreRemitente: "",
    idRemitente: "",
    direccionRecogida: "",
    ciudadRecogida: "",
    nombreDestinatario: "",
    idDestinatario: "",
    direccionEnvio: "",
    ciudadEnvio: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/orders/" + id).then((response) => {
      console.log(response.data);
      const fechaFormat = dateFormat(response.data.fecha, "dd-mm-yyyy");
      response.data["fecha"] = fechaFormat;
      setOrder(response.data);
    });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(order);
    axios
      .put("http://localhost:5000/orders/edit/" + id, order)
      .then((response) => {
        console.log(response.data);
      });
    navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title" id="cardTitle">
            Editar Orden #{id} con destino a: {order.ciudadEnvio} -{" "}
            {order.direccionEnvio}
          </h3>
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
        <div className="card-body">
          {order ? <OrderForm formData={order} setFormData={setOrder} /> : null}
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button className="btn btn-warning float-right" type="submit">
            Actualizar orden
          </button>
        </div>
        {/* /.card-footer*/}
      </div>
    </form>
  );
}
