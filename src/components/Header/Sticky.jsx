import { useState, useEffect } from "react";

import { Focus } from "lucide-react";
import Nav from "./Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Sticky() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex  justify-between px-8 py-4  fixed w-screen ${
        isScrolled ? "bg-slate-600" : "bg-slate-800"
      } `}
    >
      <div className="flex items-center gap-2">
        <Focus color="#479BE4" className="px-1 size-8" />
        <p className="text-gray-100 font-semibold">
          Way To <span className="text-[#479BE4]">IT</span>
        </p>
      </div>
      <Nav />
    </div>
  );
}
