import React, { useState } from "react";
import { Menu, X, SquareCode } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", link: "Home" },
    { id: "about", link: "About" },
    { id: "skills", link: "Skills" },
    { id: "works", link: "Works" },
    { id: "contact", link: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center z-50 bg-transparent">
      <header
        className="w-full flex justify-between items-center py-1 px-4 md:py-4 md:max-w-7xl font-inter rounded-full bg-black/10 backdrop-blur-lg text-white
         shadow-lg transition-all duration-300 mt-1 md:my-3 gap-5"
      >
        {/* Logo */}
        <div className="flex gap-2 items-center cursor-pointer">
          <SquareCode className="w-6 h-6 md:w-8 md:h-8" />
          <h2 className="font-bold text-lg md:text-xl">JulianRos</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                  activeClass="active-link"
                  className="cursor-pointer transition-colors hover:text-neutral-500"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent/20 transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/5 max-w-xs md:hidden bg-black text-white flex flex-col items-end p-6 z-50 shadow-lg transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-8 p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Close Menu"
          >
            <X />
          </button>

          <ul className="flex flex-col gap-6 text-right text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer transition-colors"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
