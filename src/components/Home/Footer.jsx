import React from 'react'
import Wrapper from '../reasurable/Wrapper'
import logo from "../../assets/icons/Vector 1.png"
import face from "../../assets/icons/facebook.png"
import ig from "../../assets/icons/instagram.png"
import x from "../../assets/icons/twitter.png"

const Footer = () => {
  return (
    <div className='bg-[#E8F2F3] py-10 mt-10'>
        <Wrapper>
            <div className='grid md:grid-cols-2 text-center md:text-start '>
              <div>
              <div className='flex gap-3 pb-3 justify-center md:justify-start'>
                <img src={logo} alt=''/>
               <h1 className='font-bold text-xl font-Roboto'>HealthyYou</h1>
               </div>
               <h1 className='font-Axiforma font-medium lg:w-[429px]'>Health care refers to the efforts that medical professionals make to restore our physical and mental well-being.</h1>
               <div className='flex gap-2 pt-3 justify-center md:justify-start'>
                <img src={face} alt='' className='cursor-pointer'/>
                <img src={ig} alt='' className='cursor-pointer'/>
                <img src={x} alt='' className='cursor-pointer'/>
               </div>
              </div>
              
              <div className='grid md:grid-cols-3 grid-cols-3 pt-3'>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl '>Overview</h1>
              <div className='text-[#000000] font-Axiforma font-medium'>
              <h1 className='pb-2 md:hover:underline'>Healthcare Services</h1>
              <h1 className='pb-2 md:hover:underline'>Find Doctors</h1>
              <h1 className='pb-2 md:hover:underline'>Departments</h1>
              </div>
               </div>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl'>Company</h1>
              <div className='text-[#000000] font-Axiforma font-medium'>
              <h1 className='pb-2 md:hover:underline'>Home</h1>
              <h1 className='pb-2 md:hover:underline'>About us</h1>
              <h1 className='pb-2 md:hover:underline'>Contact Us</h1>
              </div>
               </div>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl'>Explore</h1>
              <div className='text-[#000000] font-Axiforma font-medium'>
              <h1 className='pb-2 md:hover:underline'>Blogs & Feeds</h1>
              <h1 className='pb-2 md:hover:underline'>Privacy Police</h1>
              <h1 className='pb-2 md:hover:underline'>FAQ</h1>
              </div>
               </div>
              </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Footer