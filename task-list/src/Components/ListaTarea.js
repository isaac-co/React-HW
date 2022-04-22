// Autor: Isaac Cortés
// Nao vou ler muito texto

import { useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import "../Styles/ListaTareas.css"

const ListaTareas = (props) => { 
    // Arreglo de objetos (tareas)
    const [arrTareas, setArrTareas] = useState([]);

    // Agrega una tarea nueva (se ejecuta desde CapturaTarea)
    const agregarTarea = (nuevaTarea) => {

        const arrTareasNuevo = [nuevaTarea, ...arrTareas];
        setArrTareas(arrTareasNuevo);
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

    return(
        <div>
            <CapturaTarea onSubmit={agregarTarea}/>
            <div className="lista-tareas-contenedor">
                {
                    arrTareas.map((tarea)=> (
                        <Tarea texto={tarea.texto} completada={tarea.completada}
                        completarTarea={completarTarea} id={tarea.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ListaTareas;