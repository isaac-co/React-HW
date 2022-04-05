import './App.css';
import GanadorOscar from './components/GanadorOscar';

function App() {

  const arrOscares = [
    {
      texto: "Mejor actor",
      ganador: "Will Smith",
      nominados: "Javier Bardem y Benedict Cumberbatch",
      foto: "mejor-actor"
    },
    {
      texto: "Mejor dirección",
      ganador: "Jane Campion",
      nominados: "Ryusuke Hamaguchi",
      foto: "mejor-direccion"
    }
  ];

  return (
    <div className="App">
      {
        arrOscares.map(
          (oscar) => (
            <GanadorOscar datos={oscar}/>
          )
        )
      }
    </div>
  );
}

export default App;
