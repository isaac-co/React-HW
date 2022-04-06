import "../styles/Noticia.css"

const Noticia = (props) => {
  return(
    <div className="noticia">
      <div className="noticia-fuente">{props.datos.fuente}</div>
      <div className="noticia-titulo"> {props.datos.titulo} </div>
      <div className="container">
      <div className="noticia-body">{props.datos.body}</div>  
      <img src={require(`../images/${props.datos.foto}.jpg`)} alt="Foto"/>
      </div>
      <div className="noticia-fecha">{props.datos.fecha}</div>
    </div>
  );
};


export default Noticia;