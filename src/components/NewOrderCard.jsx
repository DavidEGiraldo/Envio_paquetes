import React, { useState } from "react";
import OrderForm from "./OrderForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewOrderCard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5000/orders/create", formData)
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
            Nueva Orden
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
          <OrderForm formData={formData} setFormData={setFormData} />
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button className="btn btn-success float-right" type="submit">
            Crear orden
          </button>
        </div>
        {/* /.card-footer*/}
      </div>
    </form>
  );
}
