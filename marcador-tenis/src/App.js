import { useState } from 'react';
import './App.css';
import Titulo from './components/Titulo'
import Puntos from './components/Puntos'
import Boton from './components/Boton';

function App() {
  // Estado de los puntos de los jugadores
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);

  // Handlers para los botones
  const botonAHandler = (event) => {
    if (puntosA < 30) {
      setPuntosA(puntosA + 15);
    } else if (puntosA == 40 && puntosB != 40) {
      alert("Gana Jugador 1");
      botonResetHandler();
    } else {
      setPuntosA(puntosA + 10); // Asíncrono
    }

    if (puntosA == 40 && puntosB == 40) {
      setPuntosA('AD');
      setPuntosB(''); 
    } else if (puntosB == 'AD') {
      setPuntosA('DEUCE');
      setPuntosB('DEUCE');
    } else if (puntosA == 'AD') {
      alert("Gana Jugador 1");
      botonResetHandler();
    } else if (puntosA == 'DEUCE') {
      setPuntosA('AD');
      setPuntosB(''); 
    }
  };

  const botonBHandler = (event) => {
    if (puntosB < 30) {
      setPuntosB(puntosB + 15);
    } else if (puntosB == 40 && puntosA != 40) {
      alert("Gana Jugador 2");
      botonResetHandler();
    } else {
      setPuntosB(puntosB + 10); // Asíncrono
    }

    if (puntosA == 40 && puntosB == 40) {
      setPuntosB('AD');
      setPuntosA(''); 
    } else if (puntosA == 'AD') {
      setPuntosA('DEUCE');
      setPuntosB('DEUCE');
    } else if (puntosB == 'AD') {
      alert("Gana Jugador 2");
      botonResetHandler();
    } else if (puntosA == 'DEUCE') {
      setPuntosB('AD');
      setPuntosA(''); 
    }
  };
  
  const botonResetHandler = (event) => {
    setPuntosA(0);
    setPuntosB(0);
  };
  
  return (
    <div className="App">
      <div className='container-puntos'>
        <Titulo texto="Aleks Synteks"/>
        <Puntos valor={puntosA}/>
        <Titulo texto="Isák Zimbwabe"/>
        <Puntos valor={puntosB}/>
      </div>
      <div className='container-buttons'>
        <Boton texto="ᵃ" onClick={botonAHandler}/>
        <Boton texto="ᵇ" onClick={botonBHandler}/>
        <Boton texto="Reset" onClick={botonResetHandler}/>
      </div>
    </div>
  );
}

export default App;
