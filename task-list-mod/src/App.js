// Autor: Joan Daniel Guerrero García
// Descripción: Administra una lista de tareas

import './App.css';
import ListaTareas from './components/ListaTareas';
import ProveedorTareas from './components/ProvedorTareas';

function App() {
  return (
    <ProveedorTareas>
    <div className="App">
      <ListaTareas />
    </div>
    </ProveedorTareas>
  );
}

export default App;
