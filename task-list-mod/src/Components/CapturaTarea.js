// Autor: Isaac Cortés
// Forma para capturar una nueva Tarea
import { useContext, useState } from "react";
import "../Styles/CapturaTarea.css"
import {v4 as uuidv4} from 'uuid';
import { ContextoTarea } from "./ListaTarea";

const CapturaTarea = (props) => {

    const arrTareas = useContext(ContextoTarea)

    // El valor del input, se guarda en el estado
    const [descripcionTarea, setDescripcionTarea] = useState("");

    // Atiende el eveneto de cambio en el input (onChange)
    const cambioEntradaHandler = (event) => {
        setDescripcionTarea(event.target.value);
    };

    // Atiende el click del botón (AgregarTarea)
    const agregarTareaHandler = (event) => {
        event.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: descripcionTarea,
            completada: false
        };
        props.onSubmit(tareaNueva); //
        arrTareas.push(tareaNueva);
        console.log(arrTareas);
    }

    return (
        <form className="tarea-forma">
            <input className="tarea.input" 
            type="text"
            placeholder="Escribe una nueva tarea"
            name="texto"
            onChange={cambioEntradaHandler}/>
            <button className="tarea-boton" onClick={agregarTareaHandler}>Agregar tarea</button>
            <button className="tarea-boton" onClick={() => props.onCancel()}>Cancelar</button>
        </form>
    );
 }

 export default CapturaTarea;