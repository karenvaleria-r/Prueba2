
import React, { useState } from "react";
import Header from "./components/Header";
import PersonalDataForm from "./components/PersonalDataForm";
import NextButton from "./components/NextButton";
import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import ImagenRegistro from "./assets/ImagenRegistro.png";

// Componente principal de la aplicación
function App() {
  // Definición de estados usando useState para manejar las contraseñas y mensajes de error
  const [password, setPassword] = useState(""); // Estado para almacenar la contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para almacenar la confirmación de la contraseña
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // Estado para almacenar el mensaje de error si las contraseñas no coinciden

  // Manejador para el cambio en el campo de contraseña
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Actualiza el estado de la contraseña
  };

  // Manejador para el cambio en el campo de confirmación de contraseña
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value; // Obtiene el valor del campo de confirmación de contraseña
    setConfirmPassword(newConfirmPassword); // Actualiza el estado de confirmación de la contraseña

    // Verifica si las contraseñas no coinciden y actualiza el mensaje de error en consecuencia
    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    // Contenedor principal de la aplicación
    <div className="container-fluid app-container">
      <div className="row">
        {/* Columna izquierda con la imagen de registro */}
        <div className="col-md-3 rectangulo-container">
          <div className="rectangulo1">
            <img src={ImagenRegistro} alt="Descripción de la imagen" />
          </div>
        </div>
        {/* Columna derecha con el contenido principal */}
        <div className="col-md-9 main-content">
          <Header /> {/* Componente de encabezado Registra tu Pyme y Bolas */}
          {/* Componente de formulario de datos personales, se pasan estados y manejadores como props */}
          <PersonalDataForm
            password={password}
            confirmPassword={confirmPassword}
            confirmPasswordError={confirmPasswordError}
            handlePasswordChange={handlePasswordChange}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
          />
          <NextButton /> 
        </div>
      </div>
    </div>
  );
}

export default App; 
