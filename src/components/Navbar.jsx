import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="relative z-20 flex items-center justify-between p-2 bg-gradient-to-r from-pink-500 to-pink-600 shadow-md">
      {/* Logo / Title */}
      <div className="text-3xl font-bold text-white">{props.title}</div>

      {/* Links */}
      <div className="flex gap-8 text-lg font-semibold text-white">
        <Link to="/" className="hover:text-yellow-200 transition">
          Home
        </Link>
        <Link to="/features" className="hover:text-yellow-200 transition">
          Features
        </Link>
        <Link to="/contact" className="hover:text-yellow-200 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
