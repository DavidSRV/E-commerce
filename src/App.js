import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Inicio from "./pages/inicio/Inicio";
import About from "./pages/others/About";
import Collection from "./pages/others/Collections";
import Contact from "./pages/others/Contact";
import Men from "./pages/others/Men";
import Women from "./pages/others/Women";
import "./_AppStyle.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/E-commerce" element={<Inicio />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/About" element={<About />} />
        <Route path="/Women" element={<Women />} />
      </Routes>
    </div>
  );
}

export default App;
