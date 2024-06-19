import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/Main/About/About.jsx";
import Sticky from "./components/Header/Sticky.jsx";
import Home from "./components/Main/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Sticky />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
