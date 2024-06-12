import React, { useState } from "react";
import "./DataForm2.css";

const PersonalDataForm = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [otherArea, setOtherArea] = useState("");

  const areas = [
    "Postulación a Fondos estatales",
    "Gestión de Redes sociales",
    "Programación web",
    "Marketing digital",
  ];

  const toggleSelection = (area) => {
    setSelectedAreas((prevState) =>
      prevState.includes(area)
        ? prevState.filter((item) => item !== area)
        : [...prevState, area]
    );
  };

  return (
    <div className="container-fluid app-container">
      <div className="row">
        <div className="col-md-9 main-content">
          <div className="DatosPersonales">Datos Personales</div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="NombrePyme">Nombre de tu Pyme/Empresa*</label>
                <input type="text" className="form-control Rectangulo2" />
              </div>
              <div className="form-group">
                <label className="RolPyme">N° Rol Pyme/Empresa</label>
                <input type="text" className="form-control Rectangulo3" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="AreasMejora">
                  Áreas a mejorar <br /> (Seleccione una o más alternativas)
                </label>
                <div className="button-grid">
                  {areas.map((area) => (
                    <button
                      key={area}
                      className={`btn-custom ${
                        selectedAreas.includes(area) ? "selected" : ""
                      }`}
                      onClick={() => toggleSelection(area)}
                    >
                      {area}
                    </button>
                  ))}
                  <div className="form-group">
                    <label className="Otro">Otro (especifique)</label>
                    <input
                      type="text"
                      className="form-control Rectangulo5"
                      value={otherArea}
                      onChange={(e) => setOtherArea(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDataForm;
