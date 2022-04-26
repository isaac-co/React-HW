// Autor: Isaac Cortés
// Nao vou ler muito texto

import { Fragment, useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import "../Styles/ListaTareas.css"
import { RiAddCircleFill } from "react-icons/ri";

const ListaTareas = (props) => { 

    // Estado de Captura
    const [capturando, setCapturando] = useState(false);

    // Arreglo de objetos (tareas)
    const [arrTareas, setArrTareas] = useState([]);

    // Agrega una tarea nueva (se ejecuta desde CapturaTarea)
    const agregarTarea = (nuevaTarea) => {
        if (nuevaTarea.texto.trim().length > 0) {
            const arrTareasNuevo = [nuevaTarea, ...arrTareas];
            setArrTareas(arrTareasNuevo);
        }
        setCapturando(false);
    };

    const completarTarea = (id) => {
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
        return tarea;
        })
        setArrTareas(arrTareasNuevo);
    };

    const eliminarTarea = (id) => {
        const arrTareasNuevo = arrTareas.filter( 
            (tarea) => tarea.id !== id 
            );
        setArrTareas(arrTareasNuevo);
    };

    return(
        <Fragment>
            {capturando && (
                <CapturaTarea onSubmit={agregarTarea} onCancel={() => setCapturando(false)}/>
            )}
            {!capturando && (
                <button onClick={() => setCapturando(true)} className="captura-boton">
                <RiAddCircleFill />{" "}
                </button>
            )}

            <div className="lista-tareas-contenedor">
                {
                    arrTareas.map((tarea)=> (
                        <Tarea texto={tarea.texto} completada={tarea.completada}
                        completarTarea={completarTarea} 
                        eliminarTarea={eliminarTarea}
                        id={tarea.id}/>
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