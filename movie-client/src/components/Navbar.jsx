import logo from "../assets/movieLogo.png";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Nav links on the right */}
      <div className="flex space-x-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-black hover:text-gray-700 font-medium ${
              isActive ? "border-b-2 border-black" : ""
            }`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `text-black hover:text-gray-700 font-medium ${
              isActive ? "border-b-2 border-black" : ""
            }`
          }
        >
          MOVIE
        </NavLink>
        <NavLink
          to="/showtime"
          className={({ isActive }) =>
            `text-black hover:text-gray-700 font-medium ${
              isActive ? "border-b-2 border-black" : ""
            }`
          }
        >
          SHOWTIME
        </NavLink>
        <NavLink
          to="/top-rated"
          className={({ isActive }) =>
            `text-black hover:text-gray-700 font-medium ${
              isActive ? "border-b-2 border-black" : ""
            }`
          }
        >
          TOP RATED
        </NavLink>
        <NavLink
          to="/my-movies"
          className={({ isActive }) =>
            `text-black hover:text-gray-700 font-medium ${
              isActive ? "border-b-2 border-black" : ""
            }`
          }
        >
          MY MOVIES
        </NavLink>
      </div>
    </div>
  );
}
