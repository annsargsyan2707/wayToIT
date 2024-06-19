import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/Main/About/About.jsx";
import Sticky from "./components/Header/Sticky.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Sticky />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
