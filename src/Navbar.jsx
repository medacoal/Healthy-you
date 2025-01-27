import React, { useState } from "react";
import logo from "../src/assets/icons/Frame 1171278601.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-[#000000] sticky top-0 z-50 bg-white shadow-md container mx-auto">
    <div className=" px-2">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" />
        </div>
  
        {/* Centered Menu Items */}
        <div className="hidden md:flex lg:space-x-4 mx-auto">
          <a href="/" className="hover:text-[#174949] px-3 py-2 rounded">
            Home
          </a>
          <a href="/about" className="hover:text-[#174949] px-3 py-2 rounded">
            About
          </a>
          <a href="/FindDoctor" className="hover:text-[#174949] px-3 py-2 rounded">
            Find Doctor
          </a>
          <a href="/Blog" className="hover:text-[#174949] px-3 py-2 rounded">
            Blog
          </a>
          <a href="/contact" className="hover:text-[#174949] px-3 py-2 rounded">
            Contact Us
          </a>
        </div>
  
        {/* Right-Aligned Login and Register */}
        <div className="hidden md:flex space-x-4">
          <a href="/login" className="hover:bg-[#174949] text-[#174949] hover:text-white px-3 py-2 rounded">
            Login
          </a>
          <a href="/SignUp" className="hover:bg-[#174949] text-[#174949] hover:text-white px-3 py-2 rounded">
            Sign Up
          </a>
        </div>
        

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#doctor"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Talk to Doctor
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#login"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
          <a
            href="#register"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
