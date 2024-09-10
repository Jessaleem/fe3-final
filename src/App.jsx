
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favorites from "./Routes/Favorites";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;
