import React, { useState } from "react";
import Back from "./images/Background.svg";
import t2c from "./images/T2C.png";
import MobileMenu from "./components/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DashboardPage from "./components/DashboardPage";
import TurboTechnologyPage from "./components/TurboTechnologyPage ";
import AboutTSquaredC from "./components/AboutTSquaredC";
import ChooseTSquaredC from "./components/ChooseTSquaredC";
import Business from "./components/Business";
import TestimonialSlider from "./components/TestimonialSlider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import bridge from "./images/Tsbridge.png";
import chain from "./images/pichainlogo.png";
import ken2 from "./images/logo-dark.png";
import optimile from "./images/optimile.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  function handleClick(event) {
    navigate("/about");
  }

  return (
    <div>
      <div className="relative">
        {/* Background Image */}
        <img
          src={Back}
          alt="Background"
          className="w-full h-screen object-cover"
        />

        {/* Navigation Bar */}
        <div className="absolute top-5 w-full flex items-center justify-between px-4 sm:px-10 lg:px-20">
          {/* Logo */}
          <img src={t2c} alt="T2C Logo" className="w-28 sm:w-36 lg:w-40" />

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
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
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}

        {/* Hero Section */}
        <div className="absolute top-1/3 w-full px-6 sm:px-10 lg:px-20 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            The Future of Tech <br />
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6">
            From concept to market, T²C supercharges your tech journey with
            top-tier talent.
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full shadow-md hover:bg-gray-900 transition">
            Let’s Build Everything Extraordinary
          </button>

          {/* Trusted Logos Section */}
          <div className="mt-10">
            <p className="text-slate-200 text-sm">TRUSTED BY THE BEST</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
              <img src={bridge} alt="TS Bridge" className="w-20 h-auto" />
              <img src={chain} alt="PiChain" className="w-20 h-auto" />
              <img src={ken2} alt="Ken42" className="w-20 h-auto" />
              <img src={optimile} alt="Optimile" className="w-20 h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <DashboardPage />
      <TurboTechnologyPage />
      <AboutTSquaredC />
      <ChooseTSquaredC />
      <Business />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
