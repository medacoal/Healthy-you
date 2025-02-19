import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../src/assets/icons/Vector 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
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
    setIsOpen(false); // Close dropdown on navigation
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
      setTimeout(() => window.location.reload(), 100);
    }
  };

  const handleLogout = () => {
    // Logic to logout user
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    // Check if the user is logged in (e.g., check localStorage or authentication context)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <nav className="fixed top-0  left-0 w-full z-50 bg-white shadow-md text-[#000000] font-[Axiforma]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick}>
              <div className="flex gap-3">
                <img src={logo} alt="Logo" className="cursor-pointer" />
                <h1 className="text-[#232323] text-2xl font-bold">HealthyYou</h1>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex lg:space-x-6">
            <Link to="/" onClick={(e) => handleNavigation(e, "/")} className="hover:text-[#065757] px-3 py-2">
              Home
            </Link>
            <Link to="/about" onClick={(e) => handleNavigation(e, "/about")} className="hover:text-[#065757] px-3 py-2">
              About
            </Link>
            <Link to="/finddoctor" onClick={(e) => handleNavigation(e, "/FindDoctor")} className="hover:text-[#065757] px-3 py-2">
              Find Doctor
            </Link>
            <Link to="/blog" onClick={(e) => handleNavigation(e, "/Blog")} className="hover:text-[#065757] px-3 py-2">
              Blog
            </Link>
            <Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")} className="hover:text-[#065757] px-3 py-2">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="hover:bg-red-600 text-red-600 hover:text-white px-4 py-2 rounded">
                Logout
              </button>
            ) : (
              <>
                <a href="/login" className="hover:bg-[#174949] text-[#174949] hover:text-white px-4 py-2 rounded">
                  Login
                </a>
                <a href="/signUp" className="hover:bg-[#174949] text-[#174949] hover:text-white px-4 py-2 rounded">
                  Sign Up
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden px-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed right-0 w-[200px] h-[300px] rounded-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a href="/" onClick={(e) => handleNavigation(e, "/")} className="block px-4 py-2 hover:bg-[#E8F2F3]">
            Home
          </a>
          <a href="/about" onClick={(e) => handleNavigation(e, "/about")} className="block px-4 py-2 hover:bg-[#E8F2F3]">
            About
          </a>
          <a href="/FindDoctor" onClick={(e) => handleNavigation(e, "/FindDoctor")} className="block px-4 py-2 hover:bg-[#E8F2F3]">
            Find Doctor
          </a>
          <a href="/Blog" onClick={(e) => handleNavigation(e, "/Blog")} className="block px-4 py-2 hover:bg-[#E8F2F3]">
            Blog
          </a>
          <a href="/contact" onClick={(e) => handleNavigation(e, "/contact")} className="block px-4 py-2 hover:bg-[#E8F2F3]">
            Contact Us
          </a>
          <hr />
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="block px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white" onClick={() => setIsOpen(false)}>
                Login
              </a>
              <a href="/SignUp" className="block px-4 py-2 text-[#174949] hover:bg-[#174949] hover:text-white" onClick={() => setIsOpen(false)}>
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
