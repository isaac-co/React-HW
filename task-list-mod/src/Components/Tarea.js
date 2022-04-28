// Autor: Isaac Cortés
// Descripción: Un renglón que representa una tarea

import "../styles/Tarea.css"
import {TiDelete} from "react-icons/ti"
import { useContext } from "react";
import { ContextoTarea } from "./ProvedorTareas";

const Tarea = (props) => { 

    // Contexto
    const [, , completarTarea, eliminarTarea] = useContext(ContextoTarea)

    const estilo = "tarea-contenedor" + (props.completada ? " completada" : "");
    return (
        <div className= {estilo}>
            <div className="tarea-texto" onClick={() => completarTarea(props.id)}>
                {props.texto}
            </div>
            <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(props.id)}>
                <TiDelete />
            </div>
        </div>
    );
};

 export default Tarea;