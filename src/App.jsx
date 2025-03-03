import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import BlogDetails from "./components/Blog/BlogDetails";
import About from "./pages/About";
import FindDoctor from "./pages/FindDoctor";
import DoctorProfile from "./components/Doctors/DoctorProfile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
// import Book from "./components/Modals/Book";
import Booking from "./components/Doctors/Booking";
import DoctorDetails from './components/Doctors/DoctorDetail';

// Layout with Navbar & Footer
const LayoutWithNavAndFooter = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar & Footer */}
        <Route element={<LayoutWithNavAndFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* <Route path="/healthy-eating" element={<HealthyEating />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Authentication Pages (No Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/book" element={<Book />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
