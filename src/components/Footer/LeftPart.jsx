//import { Link } from "react-router-dom";

export default function LeftPartFooter() {
  return (
    <nav className="flex justify-around">
      <ul className="flex">
        <li className="no-underline  text-slate-600 hover:bg-sky-300 bg-gray-100 px-2">
          {/* <Link to="/">Stops</Link> */}
          <a>Stops</a>
        </li>
        <li className="no-underline text-slate-600 hover:bg-sky-300 bg-gray-100 px-2">
          {/* <Link to="/">Teachers</Link> */}
          <a href>Teachers</a>
        </li>

        <li className="no-underline text-slate-600 hover:bg-sky-300 bg-gray-100 px-2">
          {/* <Link to="/">Expectations</Link> */}
          <a>Expectations</a>
        </li>
      </ul>
    </nav>
  );
}
