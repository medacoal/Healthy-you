import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../src/assets/Frame 1171278601.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to top on page change
  useEffect(() => {
    scrollToTop();
  }, [location]);

  // Handle navigation with scroll-to-top behavior
  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload(); // Refresh the page if already on home
    } else {
      navigate("/"); // Navigate to home
      setTimeout(() => window.location.reload(), 100); // Delay refresh for smooth transition
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick}>
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" onClick={(e) => handleNavigation(e, "/")} className="hover:text-[#065757] px-3 py-2">
              Home
            </a>
            <a href="/about" onClick={(e) => handleNavigation(e, "/about")} className="hover:text-[#065757] px-3 py-2">
              About
            </a>
            <a href="/FindDoctor" onClick={(e) => handleNavigation(e, "/FindDoctor")} className="hover:text-[#065757] px-3 py-2">
              Find Doctor
            </a>
            <a href="/Blog" onClick={(e) => handleNavigation(e, "/Blog")} className="hover:text-[#065757] px-3 py-2">
              Blog
            </a>
            <a href="/contact" onClick={(e) => handleNavigation(e, "/contact")} className="hover:text-[#065757] px-3 py-2">
              Contact Us
            </a>
          </div>

                <div className="hidden md:flex space-x-4">
            <a href="/login" className="hover:bg-[#174949] text-[#174949] hover:text-white px-4 py-2 rounded">
              Login
            </a>
            <a href="/SignUp" className="hover:bg-[#174949] text-[#174949] hover:text-white px-4 py-2 rounded">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg py-3">
            <a href="/" onClick={(e) => { handleNavigation(e, "/"); setIsOpen(false); }} className="block px-4 py-2 hover:bg-[#E8F2F3]">
              Home
            </a>
            <a href="/about" onClick={(e) => { handleNavigation(e, "/about"); setIsOpen(false); }} className="block px-4 py-2 hover:bg-[#E8F2F3]">
              About
            </a>
            <a href="/FindDoctor" onClick={(e) => { handleNavigation(e, "/FindDoctor"); setIsOpen(false); }} className="block px-4 py-2 hover:bg-[#E8F2F3]">
              Find Doctor
            </a>
            <a href="/Blog" onClick={(e) => { handleNavigation(e, "/Blog"); setIsOpen(false); }} className="block px-4 py-2 hover:bg-[#E8F2F3]">
              Blog
            </a>
            <a href="/contact" onClick={(e) => { handleNavigation(e, "/contact"); setIsOpen(false); }} className="block px-4 py-2 hover:bg-[#E8F2F3]">
              Contact Us
            </a>
            <hr />
            <a href="/login" className="block px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white" onClick={() => setIsOpen(false)}>
              Login
            </a>
            <a href="/SignUp" className="block px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white" onClick={() => setIsOpen(false)}>
              Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;