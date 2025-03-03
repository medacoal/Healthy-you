import React from 'react'
import logo from "../assets/icons/Vector 1.png"
import face from "../assets/facebook.png"
import ig from "../assets/instagram.png"
import x from "../assets/twitter.png"
import line from "../assets/icons/Line 5 (1).png"
import Wrapper from './reasurable/Wrapper'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-[#E8F2F3] py-10'>
          
           <div className=' grid md:grid-cols-2 justify-center font-[Axiforma] px-2 lg:mx-auto lg:container'>
              <div className=''>
              <div className="flex gap-3">
                           <img src={logo} alt="Logo" className=" cursor-pointer "/>
                           <h1 className="text-[#232323] text-2xl font-bold">HealthyYou</h1>
                           </div>
               <h1 className=' font-medium lg:w-[429px]'>Health care refers to the efforts that medical professionals make to restore our physical and mental well-being.</h1>
               <div className='flex gap-2 pt-3'>
                <img src={face} alt='' className='cursor-pointer'/>
                <img src={ig} alt='' className='cursor-pointer'/>
                <img src={x} alt='' className='cursor-pointer'/>
               </div>
              </div>
              
              <div className='grid md:grid-cols-3 grid-cols-2 gap-3 pt-3'>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl '>Overview</h1>
              <div className='text-[#000000] font-medium flex flex-col'>
              <h1 className='pb-2 cursor-pointer hover:text-[#065757]'>Healthcare Services</h1>
              <Link to="/finddoctor" onClick={(e) => handleNavigation(e, "/FindDoctor")} className="hover:text-[#065757] pb-2">
              Find Doctor
            </Link>
              <h1 className='pb-2 hover:text-[#065757] cursor-pointer'>Departments</h1>
              </div>
               </div>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl'>Company</h1>
              <div className='text-[#000000] font-medium flex flex-col'>
              <Link to="/" onClick={(e) => handleNavigation(e, "/")} className="hover:text-[#065757] pb-2">
              Home
            </Link>
            <Link to="/about" onClick={(e) => handleNavigation(e, "/about")} className="hover:text-[#065757] pb-2">
              About
            </Link>
            <Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")} className="hover:text-[#065757] pb-2">
              Contact Us
            </Link>
              </div>
               </div>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl'>Explore</h1>
              <div className='text-[#000000] font-medium flex flex-col'>
              <Link to="/blog" onClick={(e) => handleNavigation(e, "/Blog")} className="hover:text-[#065757] pb-2">
              Blog
            </Link>
              <h1 className='pb-2 cursor-pointer hover:text-[#065757]'>Privacy Police</h1>
              <h1 className='pb-2 cursor-pointer hover:text-[#065757]'>FAQ</h1>
              </div>
               </div>
              </div>
            </div>
          
           <div className='pt-5'>
            <img src={line} alt='' className='w-full'/>
            <h1 className='text-[#000000] text-center pt-4'>Copyright @ MSFT Pro 2023</h1>
           </div>
    </div>
    </div>
  )
}

export default Footer