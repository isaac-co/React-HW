import { Route, Routes} from  "react-router-dom";
import { About, Contact, Events, Home, Products, NotFound, History, Services} from "./components/Paginas"
import NavBar from "./components/NavBar.js"

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path= "/" element ={<Home />} />
          <Route path= "/about" element ={<About />}>
            <Route path= "services" element ={<Services />} />
            <Route path= "history" element ={<History />} />
          </Route>
          <Route path= "/products" element ={<Products />} />
          <Route path= "/events" element ={<Events />} />
          <Route path= "/contactus" element ={<Contact />} />
          <Route path= "*" element ={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;