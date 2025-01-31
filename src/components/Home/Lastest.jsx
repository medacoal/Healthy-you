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
         <div className='hover:border rounded-lg md:w-[300px] lg:w-[400px] shadow-lg p-2 cursor-pointer'>
        <div className='w-f'>
        <img src={workout} alt='' className='w-[400px] '/>
        <h1 className=' font-medium text-xl lg:w-[383.12px] md:w-[250px] text-[#2E2E2E] pt-3 '>TThe Benefits of Mindfulness Meditation for Stress and Anxiety</h1>
        </div>
         <div className='text-[#535353] flex gap-5 justify-between  pt-2'>
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
         <div className='hover:border rounded-lg  md:w-[300px] lg:w-[400px] shadow-lg p-2 cursor-pointer'>
        <div className='w-f'>
        <img src={workout} alt='' className='w-[400px] '/>
        <h1 className=' font-medium text-xl md:w-[383.12px] text-[#2E2E2E] pt-3 '>Healthy Eating on a Budget: Tips and Strategies   </h1>
        </div>
         <div className='text-[#535353] flex gap-5 justify-between  pt-2'>
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
         <div className='hover:border rounded-lg  md:w-[300px] lg:w-[400px] shadow-lg p-2 cursor-pointer'>
        <div className='w-f'>
        <img src={workout} alt='' className='w-[400px] '/>
        <h1 className=' font-medium text-xl md:w-[383.12px] text-[#2E2E2E] pt-3 '>The Importance of Regular Cancer Screenings and Early Detection</h1>
        </div>
         <div className='text-[#535353] flex gap-5 justify-between  pt-2'>
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