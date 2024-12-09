import React from "react";
import t2c from "../images/T2C.png";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  const navigate = useNavigate();
  function handleClick(event) {
    navigate("/about");
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Header with Logo and Close Button */}
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-white font-bold text-lg flex items-center gap-2">
          <img src={t2c} alt="t2c" className="w-32" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose} // Close menu
          className="text-white text-5xl focus:outline-none"
        >
          &times;
        </button>
      </div>

      {/* Menu Items */}
      <div className="mt-10 px-5 space-y-6">
        <div className="text-white text-lg font-medium border-b border-gray-700 pb-3 flex flex-col gap-10">
          <a href="/" onClick={handleClick}>
            Home
          </a>
          <a href="/about">About Us</a>
          <a href="#">Expertise</a>
          <a href="#">Insight</a>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="absolute bottom-10 left-0 w-full px-5">
        <button className="w-full py-3 text-white bg-black border border-white rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition">
          Get Started
          <span className="text-xl">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
