import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/Main/About/About.jsx";
import Sticky from "./components/Header/Sticky.jsx";
import Home from "./components/Main/Home/Home.jsx";
import Contact from "./components/Main/Contact/Contact.jsx";
import LeftPartFooter from "./components/Footer/LeftPart.jsx";
import SignIn from "./components/Footer/SignIn.jsx";
import SignUp from "./components/Footer/SignUp.jsx";

function MainLayout() {
  return (
    <>
      <Sticky />
      <Home id="secHome" />
      <About id="secAbout" />
      <Contact id="secContact" />
      <LeftPartFooter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<MainLayout />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
