import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
import Footer from './components/Footer';
import Navbar from './src/Navbar';
import Home from './src/pages/Home';
import About from './src/pages/About';
import FindDoctor from './src/pages/FindDoctor';
import Blog from './src/pages/Blog';
import Contact from './src/pages/Contact';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Footer from './src/components/Footer';

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
          <Route path="/doctor-detail/:id" element={<DoctorDetail />} />
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
