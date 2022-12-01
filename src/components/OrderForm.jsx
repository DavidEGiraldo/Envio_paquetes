import React from "react";
import { useLocation } from "react-router-dom";

export default function OrderForm({ formData, setFormData }) {
  function isDisabled() {
    let location = useLocation();
    if (location.pathname === "/newOrder") {
      return true;
    } else {
      return false;
    }
  }

  const handleOnChange = (e) => {
    const value = e.target.value
    setFormData({...formData, [e.target.id]: value})
  }

  return (
    <div>
      <div className="row g-3 justify-content-center">
        {/* Date */}
        <div className="form-group col-6 col-lg-4">
          <label htmlFor="reservationdate" className="form-label">
            Fecha:
          </label>
          <div
            className="input-group date"
            id="reservationdate"
            data-target-input="nearest"
          >
            <input
              type="text"
              className="form-control datetimepicker-input"
              data-target="#reservationdate"
              value={formData.fecha}
              onBlur={(e) => {
                setFormData({ ...formData, fecha: e.target.value });
              }}
              onChange={(e) => {
                setFormData({ ...formData, fecha: e.target.value });
              }}
            />
            <div
              className="input-group-append"
              data-target="#reservationdate"
              data-toggle="datetimepicker"
            >
              <div className="input-group-text">
                <i className="fa fa-calendar" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-6 col-lg-4">
          <label htmlFor="timepicker" className="form-label">
            Hora:
          </label>
          <div
            className="input-group date"
            id="timepicker"
            data-target-input="nearest"
          >
            <input
              type="text"
              className="form-control datetimepicker-input"
              data-target="#timepicker"
              value={formData.hora}
              onBlur={(e) => {
                setFormData({ ...formData, hora: e.target.value });
              }}
              onChange={(e) => {
                setFormData({ ...formData, hora: e.target.value });
              }}
            />
            <div
              className="input-group-append"
              data-target="#timepicker"
              data-toggle="datetimepicker"
            >
              <div className="input-group-text">
                <i className="far fa-clock" />
              </div>
            </div>
          </div>
          {/* /.input group */}
        </div>
        {/* /.form group */}
        <div className="form-group col-6 col-lg-4">
          <label htmlFor="estado" className="form-label">
            Estado
          </label>
          <select
            id="estado"
            className="form-control"
            disabled={isDisabled()}
            value={formData.estado}
            onChange={handleOnChange}
          >
            <option value="Guardado">Guardado</option>
            <option value="Cancelado">Cancelado</option>
            <option valur="Cumplido">Cumplido</option>
          </select>
        </div>
      </div>
      <hr />
      <h4 className="text-center">Detalles del paquete</h4>
      <div className="row row-cols-2 g-3 justify-content-center align-items-center">
        <div className="col-xl-2">
          <div className="row p-3">
            <div className="col-auto">
              <label htmlFor="ancho" className="col-form-label">
                Ancho
              </label>
            </div>
            <div className="col">
              <input
                type="number"
                id="ancho"
                className="form-control"
                aria-describedby="unidadAncho"
                value={formData.ancho}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-auto">
              <span id="unidadAncho" className="form-text">
                cm.
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="row p-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="alto" className="col-form-label">
                Alto
              </label>
            </div>
            <div className="col">
              <input
                type="number"
                id="alto"
                className="form-control"
                aria-describedby="unidadAlto"
                value={formData.alto}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-auto">
              <span id="unidadAlto" className="form-text">
                cm.
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="row p-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="largo" className="col-form-label">
                Largo
              </label>
            </div>
            <div className="col">
              <input
                type="number"
                id="largo"
                className="form-control"
                aria-describedby="unidadLargo"
                value={formData.largo}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-auto">
              <span id="unidadLargo" className="form-text">
                cm.
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="row p-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="peso" className="col-form-label">
                Peso
              </label>
            </div>
            <div className="col">
              <input
                type="number"
                id="peso"
                className="form-control"
                aria-describedby="unidadPeso"
                value={formData.peso}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-auto">
              <span id="unidadPeso" className="form-text">
                Kg.
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-auto">
          <div className="row p-3 align-items-center">
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                id="isDelicado"
                checked={formData.isDelicado}
                onChange={() => {
                  setFormData({ ...formData, isDelicado : !formData.isDelicado });
                }}
              />
              <label htmlFor="isDelicado" className="custom-control-label">
                Contenido delicado
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-center">Detalles de recogida</h4>
      <div className="row g-3 justify-content-center align-items-center">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="nombreRemitente" className="form-label">
              Nombre completo del remitente
            </label>
            <input
              type="text"
              id="nombreRemitente"
              className="form-control"
              value={formData.nombreRemitente}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="idRemitente" className="form-label">
              Identificación del remitente
            </label>
            <input
              type="number"
              id="idRemitente"
              className="form-control"
              value={formData.idRemitente}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="direccionRecogida" className="form-label">
              Dirección de recogida
            </label>
            <input
              type="text"
              id="direccionRecogida"
              className="form-control"
              value={formData.direccionRecogida}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="ciudadRecogida" className="form-label">
              Ciudad de recogida
            </label>
            <input
              type="text"
              id="ciudadRecogida"
              className="form-control"
              value={formData.ciudadRecogida}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-center">Detalles de envío</h4>
      <div className="row g-3 justify-content-center align-items-center">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="nombreDestinatario" className="form-label">
              Nombre completo del destinatario
            </label>
            <input
              type="text"
              id="nombreDestinatario"
              className="form-control"
              value={formData.nombreDestinatario}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="idDestinatario" className="form-label">
              Identificación del destinatario
            </label>
            <input
              type="number"
              id="idDestinatario"
              className="form-control"
              value={formData.idDestinatario}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="direccionEnvio" className="form-label">
              Dirección de envío
            </label>
            <input
              type="text"
              id="direccionEnvio"
              className="form-control"
              value={formData.direccionEnvio}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="ciudadEnvio" className="form-label">
              Ciudad de envío
            </label>
            <input
              type="text"
              id="ciudadEnvio"
              className="form-control"
              value={formData.ciudadEnvio}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
