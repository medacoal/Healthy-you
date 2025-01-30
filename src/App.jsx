import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FindDoctor from './pages/FindDoctor';
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
          <Route path="/FindDoctor" element={<FindDoctor />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
