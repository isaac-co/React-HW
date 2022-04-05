/* Renglón completo de la lista de ganadores */
// Autor: Su servilleta, Isaac Cortés
import Titulo from './Titulo';
import "../styles/Ganador-oscar.css"

const GanadorOscar = (props) => {
    return (
        <div className="contenedor-oscar">
          <Titulo texto={props.datos.texto}/>
            <div className="ganador-oscar">
              Ganador: <b>{props.datos.ganador}</b>
            </div>
            <div className="nominados-oscar">
              Nominados: {props.datos.nominados}
            </div>
            <img src={require(`../images/${props.datos.foto}.jpg`)} alt="Foto"/>
        </div>
    );
};

export default GanadorOscar;