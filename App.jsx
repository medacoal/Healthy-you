import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import HealthyEating from "../src/components/Blog/HealthyEating";
import About from './pages/About';
import FindDoctor from './pages/FindDoctor';
import DoctorProfile from './components/Doctors/DoctorProfile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

const LayoutWithNavandFooter = () => (
  <div className="">
    <Navbar />
    <Outlet/>
    <Footer/>
  </div>
)
const App = () => {
  return (
    <Router>
      
      <main className="">
        <Routes>
          <Route element={<LayoutWithNavandFooter/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/Doctor-Profile/:id" element={<DoctorProfile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/healthy-eating" element={<HealthyEating />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </main>
      
    </Router>
  );
};

export default App;