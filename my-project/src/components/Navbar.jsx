import React from "react";
import t2c from "../images/T2C.png";
const Navbar = () => {
  return (
    <div className="absolute top-0">
      {/* Navigation Bar */}
      <div className=" w-full flex items-center justify-between px-6 sm:px-10 lg:px-20 bg-transparent">
        {/* Logo */}
        <img src={t2c} alt="T2C Logo" className="w-32 sm:w-40" />

        {/* Navigation Links */}
        <div className="hidden lg:flex bg-black/80 text-white rounded-full px-6 py-2 space-x-4">
          <a href="/" className="hover:text-blue-400">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400">
            About
          </a>
          <a href="/services" className="hover:text-blue-400">
            Services
          </a>
          <a href="/blogs" className="hover:text-blue-400">
            Blogs
          </a>
          <a href="/news" className="hover:text-blue-400">
            News
          </a>
          <a href="/contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Get Started Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
