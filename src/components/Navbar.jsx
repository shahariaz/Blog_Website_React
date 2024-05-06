import React from "react";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa6";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { Link, NavLink } from "react-router-dom";
import About from "../pages/About";
const Navbar = () => {
  const navItems = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",

      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/blogs",

      element: <Blogs />,
    },
    {
      path: "/services",

      element: <Services />,
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header className="bg-black">
      <nav className="px-4 py-4">
        <Link to="/" className="text-xl font-bold text-white">
          Design<span className="text-orange-500">DK</span>
        </Link>
        {/* Navitems for Lg devices*/}
        <ul className="md:flex gap-12 test-lg hidden">
          {navItems.map(({ path, element }) => (
            <li key={path}>
              <NavLink className="text-white" to={path}>
                {element}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Menu Icons */}
        <div className="text-white lg:flex gap-4 items-center hidden ">
          <Link to="/" className="hover:text-orange-500">
            <FaFacebook />
          </Link>
          <Link to="/" className="hover:text-orange-500">
            <FaDribbble />
          </Link>
          <Link to="/" className="hover:text-orange-500">
            <FaTwitter />
          </Link>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Log in
          </button>
          {/* mobile menu btn */}
          <div>
            <button>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
