import { Focus } from "lucide-react";
import Nav from "./Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Sticky() {
  return (
    <div className="flex justify-between px-6 py-4 bg-slate-600">
      <div className="flex items-center gap-2">
        <Focus color="#479BE4" className="px-1 size-8" />
        <p className="text-fuchsia-300 font-semibold">Way To IT</p>
      </div>
      <Nav />
    </div>
  );
}
