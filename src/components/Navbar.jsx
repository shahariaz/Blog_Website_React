import { useState } from "react";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { Link, NavLink } from "react-router-dom";
import About from "../pages/About";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //NavItems
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/contact",
      link: "Contact",
    },
    {
      path: "/blogs",

      link: "Blogs",
    },
    {
      path: "/services",

      link: "Services",
    },
  ];
  return (
    <header className="bg-black text-white fixed top-0 right-0 left-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Design<span className="text-orange-500">DK</span>
        </Link>
        {/* Navitems for Lg devices*/}
        <ul className="md:flex gap-12 test-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={path}
              >
                {link}
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
        </div>
        {/* mobile menu btn */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* This menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink onClick={toggleMenu} className="text-black" to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
