import React, {Fragment} from 'react';

const Formulario = () => {
    return (  
        <Fragment>
            <h2>Crear cita</h2>

            <form>
                <label>Nombre de Mascota</label>
                <input
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre de mascota"
                /> 

                <label>Nombre del Dueño</label>
                <input
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre de dueño de la mascota"
                /> 

                <label>Fecha</label>
                <input
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                /> 

                <label>Hora</label>
                <input
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                /> 

                <label>Síntomas</label>
                <textarea
                    className = "u-full-width"
                    name="sintomas"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;