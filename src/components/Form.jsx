import React from 'react';

const Form = () => {
    return (
        <article className="DatosPersonales">
            <h2>Datos Personales</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="nombreCompleto" className="NombreCompleto">Nombre Completo* (representante empresa)</label>
                        <input type="text" id="nombreCompleto" className="form-control Rectangulo2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="region" className="Region">Región*</label>
                        <input type="text" id="region" className="form-control Rectangulo3" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaNacimiento" className="FechaNacimiento">Fecha de Nacimiento (DD/MM/AAAA)*</label>
                        <input type="date" id="fechaNacimiento" className="form-control Rectangulo4" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contrasena" className="Contrasena">Contraseña*</label>
                        <input type="password" id="contrasena" className="form-control Rectangulo5" />
                    </div>
                    <div className="DatosContrasena">
                        Debe tener:<br />
                        1 Mayúscula<br />
                        8 caracteres como mínimo
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="rut" className="Rut">Rut*</label>
                        <input type="text" id="rut" className="form-control Rectangulo6" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correo" className="Correo">Correo electrónico*</label>
                        <input type="email" id="correo" className="form-control Rectangulo7" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genero" className="Genero">Género*</label>
                        <select id="genero" className="form-control Rectangulo8">
                            <option value="" disabled selected>Seleccione su género</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmeContrasena" className="ConfirmeContrasena">Confirme Contraseña*</label>
                        <input type="password" id="confirmeContrasena" className="form-control Rectangulo9" />
                    </div>
                </div>
            </div>
            {/* <div className="center-button">
                <form action="registro-pyme-2.html" method="get">
                    <button className="cta-button" type="submit">Siguiente</button>
                </form>
            </div> */}
        </article>
    );
}

export default Form;
