/*
Autor: Isaac Cortés
Título de los puntos
*/

import "../styles/Titulo.css";

const Titulo = (props) => {
  return ( 
    <div className="titulo-tenis">
      {props.texto}
    </div>
  );
};

export default Titulo;
