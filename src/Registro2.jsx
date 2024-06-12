import React  from "react";
import Header from "./components/Header";
import NextButton from "./components/NextButton";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ImagenRegistro from "./assets/ImagenRegistro.png";

import DataForm2 from "./components/DataForm2";



function Registro2() {
  return (
    <div className="container-fluid app-container">
      <div className="row">
        <div className="col-md-3 rectangulo-container">
          <div className="rectangulo1">
            <img src={ImagenRegistro} alt="Imagen de registro" />
          </div>
        </div>
        <div className="col-md-9 main-content">
          <Header /> 
          <DataForm2/>
        </div>
      </div>
    </div>
  );
}

export default Registro2
