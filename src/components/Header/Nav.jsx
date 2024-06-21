//import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-around px-1">
      <ul className="flex px-1">
        <li className="no-underline hover:text-sky-300 text-gray-100 px-2">
          {/* <Link to="/">Home</Link> */}
          <a href="#secHome">Home</a>
        </li>
        <li className="no-underline bg-slate-600 hover:text-sky-300 text-gray-100 px-2">
          {/* <Link to="/about">About</Link> */}
          <a href="#secAbout">About</a>
        </li>

        <li className="no-underline hover:text-sky-300 text-gray-100 px-2">
          {/* <Link to="/contact">Contact</Link> */}
          <a href="secContact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
