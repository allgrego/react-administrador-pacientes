import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = []; //Si no hay citas en LocalStorage => citasIniciales es un empty array
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el State cambie
  useEffect(()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    } else {
      localStorage.setItem('citas',JSON.stringify([]));
    }

  },[citas]) //Cada vez que el State de citas cambie se ejecutará el useEffect

  // Función que toma citas actuales y agrega la nueva
  const crearCita = cita => {
    
    guardarCitas([...citas,cita]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length===0?'Agrega tus citas':'Administra tus citas';


  return(
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario
                crearCita = {crearCita}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita =>(
                
                <Cita
                  key = {cita.id}  
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />

              ))}
          </div>
        </div>
      </div>
    
    </Fragment>
  );
}

export default App;
