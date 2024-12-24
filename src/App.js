import { BrowserRouter as Router } from "react-router-dom";  // Import Router
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { useState } from "react";
import { logo, logo2, material, notres } from "./components/data";
import About from "./components/About";
import OfficeWrap from "./components/OfficeWrap";
import Services from "./components/Services";
import Notre from "./components/Notre";
import Footer from "./components/Footer";

function App() {
  const [item, setItem] = useState(material);
  const [items, setItems] = useState(logo);
  const [itemx, setItemx] = useState(logo2);
  const [notre, setNotre] = useState(notres);

  return (
    <Router>  {/* Wrap the entire app with Router */}
      <div>
        <Navbar />
        <main>
          <div id="hero">
            <Hero item={item} />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="office-wrap">
            <OfficeWrap />
          </div>
          <div id="services">
            <Services items={items} itemx={itemx} />
          </div>
          <div id="notre">
            <Notre notre={notre} />
          </div>
          <div id="">
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
