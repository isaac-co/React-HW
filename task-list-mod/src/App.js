// Autor: Joan Daniel Guerrero García
// Descripción: Administra una lista de tareas

import { useEffect } from 'react';
import './App.css';
import ListaTareas from './components/ListaTareas';
import ProveedorTareas from './components/ProvedorTareas';

function App() {

  useEffect(() => {
    console.log("Inicia la aplicación")
  }, );

  return (
    <ProveedorTareas>
    <div className="App">
      <ListaTareas />
    </div>
    </ProveedorTareas>
  );
}

export default App;
