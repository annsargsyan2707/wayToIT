import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1546074177-ffdda98d214f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485359466996-ba9d9b4958b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex justify-center items-center py-8 relative w-[700px] ">
      <img src={images[currentIndex]} className="w-[700px] h-96" />
      <div className="flex justify-between">
        <button
          onClick={prevImage}
          className="absolute bottom-1/2 left-1 text-fuchsia-500   font-bold text-xl"
        >
          {"<"}
        </button>
        <button
          onClick={nextImage}
          className="absolute bottom-1/2 right-1 text-fuchsia-500   font-bold text-xl"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
