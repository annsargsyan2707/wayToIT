import { useState } from "react";

const data = [
  {
    id: 1,
    src: "https://www.shutterstock.com/image-photo/lion-mane-cloud-sky-african-600nw-2272082207.jpg",
    title: "Courage",
  },
  {
    id: 2,
    src: "https://ancor.kz/upload/iblock/b8f/uw0dcyqwzb3o696aq7eoxl4gyyk3fgf2.jpg",
    title: "Purpose",
  },
  {
    id: 3,
    src: "https://www.strategiesbydesigngroup.com/wp-content/uploads/2019/07/innovation-not-creativity-1080x675.jpg",
    title: "Creativity",
  },
  {
    id: 4,
    src: "https://porady.co.ua/wp-content/uploads/2020/06/sila-vol-scho-ce-take-aktiv-zac-ya-lobovih-chastok-vpliv-harakteru-motivac-yak-rozvinuti-slabku-silu-vol-v-dm-nn-st-v-d-sili-duhu-lyudini-3.jpg",
    title: "Patience",
  },
];

export default function Home() {
  return (
    <div>
      <h3></h3>
      <div className="bg-slate-800 grid grid-cols-2 py-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center p-3 "
          >
            <h3 className="text-yellow-500 p-3 font-semibold">{item.title}</h3>
            <div className="w-[600px] h-[500px] shadow-stone-500 overflow-hidden hover:scale-105 shadow-lg">
              <img
                src={item.src}
                className="w-[600px] h-[500px] hover:shadow-lg rounded overflow-hidden  transition delay-200 duration-300 ease-in-out hover:scale-105 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
