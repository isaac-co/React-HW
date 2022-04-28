/*
Autor: Isaac Cortés
Encapsula el arreglo de tareas y las operaciones sobre el arrelgo
*/

import { createContext, useState} from "react";

// Crea el contexto 'global'
export const ContextoTarea = createContext();

const ProveedorTareas = ( {children} ) => {
    // Datos
    const [arrTareas, setArrTareas] = useState([]);

    // Métodos
    // Agregar
    const agregarTarea = (tarea) => {
        if (tarea.texto.trim().length > 0) {
            setArrTareas([tarea, ...arrTareas]);
        }
    };

    // Completar
    const completarTarea = (id) => {
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setArrTareas(arrTareasNuevo);
    };

    // Eliminar
    const eliminarTarea = (id) => {
        //props.eliminarTarea(props.id);
        const arrTareasNuevo = arrTareas.filter( 
            (tarea) => tarea.id !== id
        );
        setArrTareas(arrTareasNuevo);
    };

    return(
        <ContextoTarea.Provider value={[arrTareas, agregarTarea, completarTarea, eliminarTarea]}>
            {children}
        </ContextoTarea.Provider>
    );
};

export default ProveedorTareas;