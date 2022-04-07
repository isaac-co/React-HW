/*
Autor: Isaac Cortés
Recuadro para mostrar los puntos
*/

import '../styles/Puntos.css'

const Puntos = (props) => {
  return(
    <div className="puntos-tenis">
        {props.valor}
    </div>
  );
};

export default Puntos;