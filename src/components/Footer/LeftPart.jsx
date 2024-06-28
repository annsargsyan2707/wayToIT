import { Link } from "react-router-dom";

export default function LeftPartFooter() {
  return (
    <nav className="flex justify-end bg-slate-700 h-14  ">
      <ul className="flex justify-end  px-8 items-center gap-1">
        <li className="no-underline  text-gray-100 hover:bg-teal-500 bg-teal-600 rounded px-2 py-2 h-2/3">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="no-underline  text-teal-500 hover:bg-teal-700 bg-slate-700 rounded px-2 py-2">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
