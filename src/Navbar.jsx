import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import logo from "../src/assets/icons/Vector 1.png";
import LogoutModal from "./components/Modals/Logout"; // Importing the Logout Modal

const Navbar = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const userFullName = auth?.user?.fullName || "";
  const userInitials = userFullName
    ? userFullName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
    : "U"; // Default to "U" if name is missing

  const handleLogout = () => {
    logout();
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-[#000000] font-[Axiforma]">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <button onClick={() => navigate("/")}>
            <div className="flex gap-3">
              <img src={logo} alt="Logo" className="cursor-pointer" />
              <h1 className="text-[#232323] text-2xl font-bold">HealthyYou</h1>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex lg:space-x-6">
            <Link to="/" className="hover:text-[#065757] px-3 py-2">Home</Link>
            <Link to="/about" className="hover:text-[#065757] px-3 py-2">About</Link>
            <Link to="/finddoctor" className="hover:text-[#065757] px-3 py-2">Find Doctor</Link>
            <Link to="/blog" className="hover:text-[#065757] px-3 py-2">Blog</Link>
            <Link to="/contact" className="hover:text-[#065757] px-3 py-2">Contact Us</Link>
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex space-x-4">
            {auth?.user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#174949] text-white rounded-full text-sm font-bold">
                    {userInitials}
                  </div>
                  <span className="text-[#174949] font-medium">{userFullName}</span>
                  <svg className={`w-5 h-5 transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-[#174949] rounded-lg shadow-lg py-2">
                    <div className="px-4 py-2 text-sm font-medium border-b">{userFullName}</div>
                    <button
                      onClick={() => setIsModalOpen(true)} // Open logout modal
                      className="w-full text-left px-4 py-2 text-sm hover:bg-[#174949] hover:text-white rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="hover:bg-[#174949] text-[#174949] hover:text-white px-4 py-2 rounded">Login</Link>
                <Link to="/signUp" className="bg-[#174949] text-white hover:text-white px-4 py-2 rounded">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden fixed right-0 w-full h-[300px] rounded-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <Link to="/" className="block px-4 py-2 hover:bg-[#E8F2F3]" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-[#E8F2F3]" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/finddoctor" className="block px-4 py-2 hover:bg-[#E8F2F3]" onClick={() => setMobileOpen(false)}>Find Doctor</Link>
            <Link to="/blog" className="block px-4 py-2 hover:bg-[#E8F2F3]" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-[#E8F2F3]" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            <hr />
            {auth?.user ? (
              <div className="px-4 py-2">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#174949] text-white rounded-full text-sm font-bold">
                    {userInitials}
                  </div>
                  <span className="text-[#174949] font-medium">{userFullName}</span>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)} // Open logout modal
                  className="w-full text-left px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white" onClick={() => setMobileOpen(false)}>Login</Link>
                <Link to="/signUp" className="block px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white" onClick={() => setMobileOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>

      {/* Logout Modal */}
      {isModalOpen && <LogoutModal onClose={() => setIsModalOpen(false)} onLogout={handleLogout} />}
    </nav>
  );
};

export default Navbar;
