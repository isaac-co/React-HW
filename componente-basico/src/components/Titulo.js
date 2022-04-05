import "../styles/Titulo.css"

const Titulo = (props) => {
  return(
    <div className="titulo-oscar">
    <p>{props.texto}</p>
    </div>
  );
  };

export default Titulo;