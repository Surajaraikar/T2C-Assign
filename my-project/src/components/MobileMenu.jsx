import React from "react";

const MobileMenu = ({ onClose }) => {
  const menuItems = ["Home", "About Us", "Expertise", "Insight"];

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Header with Logo and Close Button */}
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-white font-bold text-lg flex items-center gap-2">
          <span className="text-3xl font-extrabold">tc</span>
          <span className="text-sm leading-5">
            Start
            <br />
            Big.
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose} // Close menu
          className="text-white text-2xl focus:outline-none"
        >
          &times;
        </button>
      </div>

      {/* Menu Items */}
      <div className="mt-10 px-5 space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="text-white text-lg font-medium border-b border-gray-700 pb-3"
          >
            {item}
          </div>
        ))}
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
