import React from 'react'
import logo from "../assets/icons/Vector 1.png"
import face from "../assets/facebook.png"
import ig from "../assets/instagram.png"
import x from "../assets/twitter.png"
import line from "../assets/icons/Line 5 (1).png"
import Wrapper from './reasurable/Wrapper'

const Footer = () => {
  return (
    <div className='mx-auto container '>
      <div className='bg-[#E8F2F3] py-10'>
           <Wrapper>
           <div className=' grid md:grid-cols-2 justify-center font-[Axiforma] px-2'>
              <div className=''>
              <div className="flex gap-3">
                           <img src={logo} alt="Logo" className=" cursor-pointer "/>
                           <h1 className="text-[#232323] text-2xl font-bold">Healty You</h1>
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
              <div className='text-[#000000] font-medium'>
              <h1 className='pb-2 md:hover:underline'>Healthcare Services</h1>
              <h1 className='pb-2 md:hover:underline'>Find Doctors</h1>
              <h1 className='pb-2 md:hover:underline'>Departments</h1>
              </div>
               </div>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl'>Company</h1>
              <div className='text-[#000000] font-medium'>
              <h1 className='pb-2 md:hover:underline'>Home</h1>
              <h1 className='pb-2 md:hover:underline'>About us</h1>
              <h1 className='pb-2 md:hover:underline'>Contact Us</h1>
              </div>
               </div>
               <div>
               <h1 className='text-[#0C4C51] pb-2 font-semibold text-xl'>Explore</h1>
              <div className='text-[#000000] font-medium'>
              <h1 className='pb-2 md:hover:underline'>Blogs & Feeds</h1>
              <h1 className='pb-2 md:hover:underline'>Privacy Police</h1>
              <h1 className='pb-2 md:hover:underline'>FAQ</h1>
              </div>
               </div>
              </div>
            </div>
           </Wrapper>
           <div className='pt-5'>
            <img src={line} alt='' className='w-full'/>
            <h1 className='text-[#000000] text-center pt-4'>Copyright @ MSFT Pro 2023</h1>
           </div>
    </div>
    </div>
  )
}

export default Footer