import React, { useState } from "react";
import Advisors from "./About/Advisors";
import Team from "./About/Team";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu"; // Import MobileMenu
import t2c from "./images/T2C.png";
import Back from "./images/Background.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AchieveAndMission = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate();
  function handleClick(event) {
    navigate("/");
  }

  return (
    <div className="relative">
      {/* Background Image */}
      <img src={Back} alt="Background" className="w-full h-96 object-cover" />

      <div className="relative flex items-center justify-center text-center">
        <h1 className="text-5xl lg:text-6xl absolute bottom-28 font-semibold bg-gradient-to-r from-blue-100 to-blue-950 bg-clip-text text-transparent pb-6">
          About Us
        </h1>
      </div>

      {/* Navigation Bar */}
      <div className="absolute top-5 w-full flex items-center justify-between px-6 sm:px-10 lg:px-20">
        {/* Logo */}
        <img src={t2c} alt="T2C Logo" className="w-32 sm:w-40" />

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(true)} // Open menu
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex bg-black/80 text-white rounded-full px-6 py-2 space-x-4">
          <a href="/" className="hover:text-blue-400">
            Home
          </a>
          <a
            href="/about"
            onClick={handleClick}
            className="hover:text-blue-400"
          >
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Services
          </a>
          <a href="#" className="hover:text-blue-400">
            Blogs
          </a>
          <a href="#" className="hover:text-blue-400">
            News
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Get Started Button */}
        <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base">
          Get Started
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu onClose={() => setIsMenuOpen(false)} /> // Pass close handler
      )}

      {/* Main Content */}
      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Section 1 */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h4 className="uppercase text-sm text-gray-400 tracking-wide">
                Our Approach
              </h4>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 pb-20">
              What we want to <span className="text-blue-500">achieve</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nulla velit, maximus sit amet suscipit in, fermentum id est.
              Suspendisse consequat ornare elit.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nulla velit, maximus sit amet suscipit in, fermentum id est.
              Suspendisse consequat ornare elit.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nulla velit, maximus sit amet suscipit in, fermentum id est.
              Suspendisse consequat ornare elit.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nulla velit, maximus sit amet suscipit in, fermentum id est.
              Suspendisse consequat ornare elit.
            </p>
            <div className="flex items-center gap-2 mb-2 pt-20">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h4 className="uppercase text-sm text-gray-400 tracking-wide">
                Our Mission
              </h4>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Why that's important to <span className="text-blue-500">us</span>
            </h2>
          </div>
        </div>
      </div>

      <Advisors />
      <Team />
      <Footer />
    </div>
  );
};

export default AchieveAndMission;
