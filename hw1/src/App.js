import './App.css';
import Noticia from './components/Noticia';

function App() {

  const noticias = [
    {
      titulo: "Coalition accused of sitting on environment report to avoid delivering ‘more bad news’",
      fuente: "The Guardian",
      fecha: "21 hours ago",
      foto: "guardian",
      body: "She accused the government of sitting on the report because it would deliver “more bad news” and “would drive home the environmental..."
    },
    {
      titulo: "Los narcos me contactaron, dijo el Cochiloco no confundir con Cochi la adorable perrita que es tendencia en Tik Tok",
      fuente: "BBC",
      fecha: "6 hours ago",
      foto: "cochi",
      body: "A festival organised to encourage young people in east London to get vaccinated against Covid saw just 435 people jabbed."
    },
    {
      titulo: "WFU in the news: March 28-April 3 | Wake Forest News",
      fuente: "Wake Forest News",
      fecha: "19 hours ago",
      foto: "wfu",
      body: "Dave and Catherine Clawson will make it possible for even more students to benefit from the transformational opportunity to attend Wake Forest with a $250,000 gift to create a new scholarship."
    },
    {
      titulo: "Sri Lanka MPs leave Gotabaya Rajapaksa-led coalition",
      fuente: "BBC",
      fecha: "1 day ago",
      foto: "sri",
      body: "More than 40 MPs have left Sri Lankan President Gotabaya Rajapaksa's coalition government. MPs from parties aligned with Mr Rajapaksa's Sri Lanka Podujana Peramuna (SLPP) led coalition said they would now independently represent themselves."
    },
  ];

  return (
    <div className="App">
      {
        noticias.map(
          (noticia) => (
            <Noticia datos={noticia}/>
          )
        )
      }
    </div>
  );
  }

export default App;
