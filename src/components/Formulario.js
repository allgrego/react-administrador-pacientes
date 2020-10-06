import React, {Fragment, useState} from 'react';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    
    //crear State de citas 
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha: '',
        hora:'',
        sintomas:''
    });

    const[error,actualizarError] = useState(false);


    //Funcion que se ejecuta cada que el usuario ejecuta en un input
    const actualizarState = e => { //se le envía un evento e como parámetro a la función
            //console.log(e.target.value); 
            //e.target.name muestra el campo donde el usuario está escribiendo
            //e.target.value lo que el usuario escribe
        actualizarCita({
            //hay que copiar el state actual antes de escribir, para no perder info
            ...cita,//copia de objeto actual
            [e.target.name]:e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    
    //Cuando el usuario presiona agregar cita
    const submitCita = e =>{ //si un solo parámetro se pueden omitir las ()
        e.preventDefault();//Previene acción por default
        
        // Validar
        if(mascota.trim() ===''||propietario.trim() ===''||fecha.trim() ===''||hora.trim() ===''||sintomas.trim() ===''){
            actualizarError(true);
            return; //Para que no siga ejecutando el código
        }

        //Eliminar el mensaje previo
        actualizarError(false);

        // Asignar ID
        cita.id=uuid();
        
        // Crear cita
        crearCita(cita);

        //Reiniciar form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha: '',
            hora:'',
            sintomas:''
        })

    }

    return (  
        <Fragment>
            <h2>Crear cita</h2>

            {error? <p className="alerta-error">Todos los campos son obligatorios</p> :null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de Mascota</label>
                <input
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre de mascota"
                    onChange = {actualizarState}
                    value = {mascota}
                /> 

                <label>Nombre del Dueño</label>
                <input
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre de dueño de la mascota"
                    onChange = {actualizarState}
                    value = {propietario}
                /> 

                <label>Fecha</label>
                <input
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {fecha}
                /> 

                <label>Hora</label>
                <input
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {hora}
                /> 

                <label>Síntomas</label>
                <textarea
                    className = "u-full-width"
                    name="sintomas"
                    onChange = {actualizarState}
                    value = {sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}
 

    Formulario.propTypes = {
        crearCita: PropTypes.func.isRequired
    }

export default Formulario;