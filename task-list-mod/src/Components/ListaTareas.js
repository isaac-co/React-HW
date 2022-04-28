// Autor: Isaac Cortés
// Encapsula la forma de captura y los controles de las tareas

import "../styles/ListaTareas.css"
import {RiAddCircleFill} from "react-icons/ri"
import { Fragment, useContext, useState } from "react";
import CapturaTarea from "./CapturaTarea";
import { ContextoTarea } from "./ProvedorTareas";
import Tarea from "./Tarea";

const ListaTareas = (props) => { 

    // Tomar arreglo de tareas del contexto
    const [arrTareas, ] = useContext(ContextoTarea);

    const [mostrarCaptura, setMostrarCaptura] = useState(false);

    const mostrarContenido = () => {
        setMostrarCaptura(!mostrarCaptura);
    };

    return (
        <Fragment>
            {
                mostrarCaptura && <CapturaTarea mostrarContenido={mostrarContenido} />
            }
            {
                !mostrarCaptura && 
                <div className="captura-boton" onClick={mostrarContenido}>
                    <RiAddCircleFill />
                </div>
            }
            <div className="lista-tareas-contenedor">
                {
                    arrTareas.map((tarea) => (
                        <Tarea texto={tarea.texto} 
                        completada ={tarea.completada}
                        id={tarea.id} />
                    ))
                }
                {
                    arrTareas.length === 0 && <h1>No hay tareas</h1>
                }
            </div>
        </Fragment>
    );
 };

 export default ListaTareas;
