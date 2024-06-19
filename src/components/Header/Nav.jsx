import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-around">
      <ul className="flex">
        <li className="no-underline hover:text-sky-300 text-gray-100 px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="no-underline bg-slate-600 hover:text-sky-300 text-gray-100 px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="no-underline bg-slate-600 hover:text-sky-300 text-gray-100 px-2">
          <Link to="/">Stops</Link>
        </li>
        <li className="no-underline bg-slate-600 hover:text-sky-300 text-gray-100 px-2">
          <Link to="/">Teachers</Link>
        </li>
        <li className="no-underline bg-slate-600 hover:text-sky-300 text-gray-100 px-2">
          <Link to="/">Friends</Link>
        </li>
        <li className="no-underline bg-slate-600 hover:text-sky-300 text-gray-100 px-2">
          <Link to="/">Expectations</Link>
        </li>
        <li className="no-underline hover:text-sky-300 text-gray-100 px-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
