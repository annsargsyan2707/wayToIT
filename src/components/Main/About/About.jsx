import React from "react";
import Slider from "./Slider.jsx";

export default function About({ id }) {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-slate-800"
      id={id}
    >
      <h3 className="text-sky-500 flex justify-center py-2 font-bold text-xl">
        About us
      </h3>

      <p className=" flex justify-center text-gray-300 py-2 font-semibold">
        We are people who have the courage to start something
      </p>
      <Slider />
    </div>
  );
}
