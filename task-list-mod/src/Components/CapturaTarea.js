// Autor: Isaac Cortés
// Forma para capturar una nueva tarea

import { useContext, useState } from "react";
import "../styles/CapturaTarea.css"
import { v4 as uuidv4 } from 'uuid';
import { ContextoTarea } from "./ProvedorTareas";

const CapturaTarea = (props) => { 

    //Contexto
    const [, agregarTarea, ] = useContext(ContextoTarea);
    
    // El valor del input se guarda en el estado
    const [descripcionTarea, setDescripcionTarea] = useState("");

    // Atiende el evento de cambio en el input (onChange)
    const cambioEntradaHandler = (event) => {
        setDescripcionTarea(event.target.value);
        console.log(descripcionTarea);
    };

    // Atiende el click del boton (Agregar tarea)
    const agregarTareaHandler = (event) => {
        event.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: descripcionTarea,
            completada: false
        };
        agregarTarea(tareaNueva)
        props.mostrarContenido();
    };

    return (
        <form className="tarea-forma">
            <input className="tarea-input" 
            type="text"
            placeholder="Escribe una nueva tarea"
            name="texto" 
            onChange={cambioEntradaHandler} />
            <button className="tarea-boton" 
            onClick={agregarTareaHandler}>Agregar tarea</button>
            <button className="tarea-boton" 
            onClick={() => props.mostrarContenido()}>Cancelar</button>
        </form>
    );
 };

export default CapturaTarea;