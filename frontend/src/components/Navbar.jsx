import React from "react";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="bg-blue-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="#">
              <img className="h-10" src={Logo} alt="logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
