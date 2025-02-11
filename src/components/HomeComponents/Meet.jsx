import React from 'react'
import rated1 from "../../assets/rated1.png"
import rated2 from "../../assets/rated2.png"
import rated3 from "../../assets/rated3.png"
import Wrapper from '../reasurable/Wrapper'

const Meet = () => {
  return (
   <Wrapper>
     <div className='py-5 px-2 font-[Axiforma]'>
        <h1 className="text-5xl font-bold text-center mb-10">
  Meet Our Top
  <span className="italic font-[600] text-[#174949] "> Rated Doctors</span> 
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Card 1 */}
  
  <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
    {/* Image */}
    <div className="w-full h-auto">
      <img
        src={rated1}
        alt="rated1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Dr. Naomi jr.MD</h1>
      <h6 className="text-sm font-medium mb-2">Head of Psychiatrist</h6>
      <p className="text-[#aab8ba] leading-relaxed mb-4">
        Expert in diagnose, treat, and prevent mental health disorders, provide therapy.
      </p>
      <div className="flex justify-center">
        <button className="flex items-center text-[#6ca59e] px-4 py-2 rounded-md border border-[#6ca59e] hover:bg-[#6ca59e] hover:text-white">
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
    {/* Image */}
    <div className="w-full h-auto">
      <img
        src={rated2}
        alt="rated2"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Dr. Jim Beglinei</h1>
      <h6 className="text-sm font-medium mb-2">Head of Neurologist</h6>
      <p className="text-[#aab8ba] leading-relaxed mb-4">
        Expert in diagnosis and treatment of disorders affecting the nervous system.
      </p>
      <div className="flex justify-center">
        <button className="flex items-center text-[#6ca59e] px-4 py-2 rounded-md border border-[#6ca59e] hover:bg-[#6ca59e] hover:text-white">
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
    {/* Image */}
    <div className="w-full h-auto">
      <img
        src={rated3}
        alt="rated3"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Dr. Lisa Chen</h1>
      <h6 className="text-sm font-medium mb-2">Head of Emergency Medical Specialist</h6>
      <p className="text-[#aab8ba] leading-relaxed mb-4">
        Expert in emergency airway procedures, ensures patient safety and respiratory.
      </p>
      <div className="flex justify-center">
        <button className="flex items-center text-[#6ca59e] px-4 py-2 rounded-md border border-[#6ca59e] hover:bg-[#6ca59e] hover:text-white">
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
    {/* Image */}
    <div className="w-full h-auto">
      <img
        src={rated1}
        alt="rated1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Dr. Guru Maraji</h1>
      <h6 className="text-sm font-medium mb-2">Emergency Medicine Specialist</h6>
      <p className="text-[#aab8ba] leading-relaxed mb-4">
        Expert in emergency airway procedures, ensuring patient safety.
      </p>
      <div className="flex justify-center">
        <button className="flex items-center text-[#6ca59e] px-4 py-2 rounded-md border border-[#6ca59e] hover:bg-[#6ca59e] hover:text-white">
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>


    </div>
   </Wrapper>
    
  )
}

export default Meet