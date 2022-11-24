import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <strong>
        MisionTIC 2022 - Ciclo 4a - 
        <Link to="https://github.com/DavidEGiraldo/envio_paquetes">
          InstaYa - Plataforma de recogida de paquetes  
        </Link>
        .
      </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0.0
      </div>
    </footer>
  );
}
