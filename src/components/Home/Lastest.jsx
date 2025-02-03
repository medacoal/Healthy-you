import React from 'react'
import Wrapper from '../reasurable/Wrapper'
import workout from "../../assets/images/Frame 1171278661.png"
import calender from "../../assets/icons/calendar.png"
import time from "../../assets/icons/clock.png"

const Lastest = () => {
  return (
   <Wrapper>
      <div className='px-2 text-[#000000] font-[Axiforma]'>
      <div className=" md:text-5xl text-4xl pb-8 text-center">
          <h1 className="font-semibold">
          Latest Health{' '}
            <span className="font-serif italic text-[#5a8385] font-medium">
            News and Tips
            </span>
          </h1>
        </div>

        <div className='grid md:grid-cols-3 gap-4 font-General Sans'>
         <div className='hover:border rounded-lg md:w-[300px] lg:w-[370px] shadow-lg p-2 cursor-pointer'>
        <div className='w-full'>
        <img src={workout} alt='' className='w-[400px] '/>
        <h1 className=' text-2xl  text-[#2E2E2E] pt-3 pr-4 font-semibold'>The Benefits of Mindfulness Meditation for Stress and Anxiety</h1>
        </div>
        {/* lg:w-[383.12px] md:w-[250px] */}
         <div className='text-[#535353] flex gap-5  pt-2'>
          <div className='flex gap-2'>
          <img src={calender} alt='' className='h-5 w-5'/>
          <h1>02 Jan, 2025</h1>
          </div>
          <div className='flex gap-2'>
            <img src={time} alt='' className='h-5 w-5'/>
            <h1>1 min read</h1>
          </div>
         </div>
         </div>
         <div className='hover:border rounded-lg  md:w-[300px] lg:w-[370px] shadow-lg p-2 cursor-pointer flex flex-col justify-between'>
        <div className='w-full'>
        <img src={workout} alt='' className='w-[400px] '/>
        <h1 className=' font-semibold text-2xl  text-[#2E2E2E] pt-3 pr-4'>Healthy Eating on a Budget: Tips and Strategies   </h1>
        </div>
         <div className='text-[#535353] flex gap-5   pt-2'>
          <div className='flex gap-2'>
          <img src={calender} alt='' className='h-5 w-5'/>
          <h1>02 Jan, 2025</h1>
          </div>
          <div className='flex gap-2'>
            <img src={time} alt='' className='h-5 w-5'/>
            <h1>1 min read</h1>
          </div>
         </div>
         </div>
         <div className='hover:border rounded-lg  md:w-[300px] lg:w-[370px] shadow-lg p-2 cursor-pointer'>
        <div className='w-f'>
        <img src={workout} alt='' className='w-[400px] '/>
        <h1 className=' font-semibold text-2xl  text-[#2E2E2E] pt-3 pr-4'>The Importance of Regular Cancer Screenings and Early Detection</h1>
        </div>
         <div className='text-[#535353] flex gap-5  pt-2 '>
          <div className='flex gap-2'>
          <img src={calender} alt='' className='h-5 w-5'/>
          <h1>02 Jan, 2025</h1>
          </div>
          <div className='flex gap-2'>
            <img src={time} alt='' className='h-5 w-5'/>
            <h1>1 min read</h1>
          </div>
         </div>
         </div>
        </div>
       
      </div>
      </Wrapper>
  )
}

export default Lastest