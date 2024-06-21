import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/Main/About/About.jsx";
import Sticky from "./components/Header/Sticky.jsx";
import Home from "./components/Main/Home/Home.jsx";
import Contact from "./components/Main/Contact/Contact.jsx";
import LeftPartFooter from "./components/Footer/LeftPart.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="h-screen">
//         <Sticky />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<div>Contact</div>} />
//         </Routes>
//         <LeftPartFooter />
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <div className="h-screen">
      <Sticky />
      <Home id={"secHome"} />
      <About id={"secAbout"} />
      <Contact id={"secContact"} />
      <LeftPartFooter />
    </div>
  );
}
export default App;

// import React, { useRef, useState, useEffect } from "react";

// function App() {
//   const countRef = useRef(0);
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     countRef.current += 1;
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     console.log("countRef:", countRef.current);
//   });

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default App;
