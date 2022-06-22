import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Home from "../../pages/home/Home";
import Gallery from "../../components/Gallery";
import Services from "../../components/Services";
import LogIn from "../../pages/LogIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
