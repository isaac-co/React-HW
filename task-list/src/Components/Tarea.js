// Autor: Isaac Cortés
// Un renglón que representa una tarea
import {MdDeleteForever} from "react-icons/md";
import "../Styles/Tarea.css"

const Tarea = (props) => {  
    const estilo = "tarea-contenedor" + (props.completada ? " completada" : "")
    return (
        <div className={estilo}>
            <div className="tarea-texto" onClick={() => props.completarTarea(props.id)}>
                {props.texto}
            </div>
            <div className="tarea-contenedor-icono">
                <MdDeleteForever/>
            </div>
        </div>
    );
};

export default Tarea;