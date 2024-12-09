import React from "react";
import t2c from "../images/T2C.png";

const Footer = () => {
  return (
    <div>
      <footer className="py-10 px-4 text-slate-400 bg-gray-900">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Address */}
          <div className="text-center md:text-left">
            <img
              src={t2c}
              alt="Company Logo"
              className="mx-auto md:mx-0 mb-4 w-40"
            />
            <p className="text-lg font-semibold text-white">TSquaredC Ltd.</p>
            <p>
              161, Basavanagar
              <br />
              Bangalore, Karnataka.
            </p>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-video"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-12">
            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-50">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Why Choose
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-50">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Values
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-center md:text-left">
              © 2024 TSquaredC | All Rights Reserved.
            </p>

            {/* Privacy and Terms */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
