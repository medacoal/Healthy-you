import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import HealthyEating from "../src/components/Blog/HealthyEating";
import About from './pages/About';
import FindDoctor from './pages/FindDoctor';
import DoctorDetail from '../src/components/Doctors/DoctorDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/doctor-detail/:id" element={<DoctorDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/healthy-eating" element={<HealthyEating />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </main>
     
    </Router>
  );
};

export default App;
