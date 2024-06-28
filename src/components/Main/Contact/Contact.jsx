import {
  Anchor,
  Contact,
  Facebook,
  Instagram,
  Mails,
  NotebookPen,
} from "lucide-react";
//import { Contact } from "lucide-react";
//import { Facebook } from "lucide-react";

export default function ContactUs({ id }) {
  return (
    <div
      id={id}
      className="bg-slate-800 flex flex-col items-center justify-between px-8 py-4 text-cyan-600 "
    >
      <h2 className="text-5xl shadow-inner font-semibold mb-6 ">
        Our Contacts
      </h2>

      <div className="flex  text-[#f1dbca] justify-between w-full">
        <div className="flex flex-col text-[#f1dbca]  p-4 gap-4 justify-center items-center">
          <Contact className="size-24" color="#FF8236" />
          <h2 className="text-cyan-600 text-2xl py-4 font-normal">FIND US</h2>
          <span className="flex gap-6">
            <Facebook /> <Instagram /> <Mails />
          </span>
          <span className="flex flex-col justify-start items-center">
            <p>@ACA</p>
            <p>@ITBITI</p>
          </span>
        </div>
        <div className="flex flex-col text-[#f1dbca]  p-4 gap-4 justify-center items-center">
          <NotebookPen className="size-24" color="#FF8236" />
          <h2 className="text-cyan-600 text-2xl py-4 font-normal">
            START A NEW CASE
          </h2>
        </div>
        <div>bbb</div>
      </div>
    </div>
  );
}
