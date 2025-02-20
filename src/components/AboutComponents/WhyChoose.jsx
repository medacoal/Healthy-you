import React from 'react'
// import { FaHeartbeat } from 'react-icons/fa';
import sampleImage from '../../assets/image.png';
import Icon1 from '../../assets/Vector5.png'
import Icon3 from '../../assets/Vector4.png'
import Icon2 from '../../assets/Vector2.png';
import Icon4 from '../../assets/Vector6.png';
import Wrapper from '../reasurable/Wrapper';

const WhyChoose = () => {
  return (
    <Wrapper>
      <section className=" container mx-auto px-2 py-10 ">
  <div className="flex flex-col md:flex-row items-center justify-between">
  <div className="mb-6 md:hidden">
  <img
    src={sampleImage}
    alt="Healthcare"
    className=" rounded-md"
  />
</div>

    
    <div className="text-left items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight ">
        Why 
        <span className="italic font-[600] text-[#174949] ml-2">Choose Us</span>
      </h1>

      <section className=" mx-auto  py-10 lg:w-[752px] lg:h-[527.99px] lg:pt-24 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-5">

    <div className="flex flex-col gap-6 items-start text-center md:text-start">
    <div className="w-16 h-16 bg-[#174949] flex items-center justify-center mx-auto md:mx-0 rounded-full">
  <img
    src={Icon1}
    alt="Icon"
    className="w-8 h-8 brightness-0 invert "
  />
</div>
      <div>
        <h3 className="text-xl font-semibold text-[#174949] mb-2">
          Experience medical professionals
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          We believe in treating each patient as an individual, taking the time to understand your unique health.
        </p>
      </div>
    </div>


    {/* Second Block */}
    <div className="flex flex-col gap-6 items-start text-center md:text-start">
    <div className="w-16 h-16 bg-[#174949] flex items-center justify-center mx-auto md:mx-0 rounded-full">
  <img
    src={Icon2}
    alt="Icon"
    className="w-8 h-8 brightness-0 invert"
  />
</div>
      <div>
        <h3 className="text-xl font-semibold text-[#174949] mb-1">
          Comprehensive Care
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Holistic healthcare solutions tailored to your needs.
        </p>
      </div>
    </div>

    {/* Third Block */}
    <div className="flex  flex-col gap-6 items-start text-center md:text-start">
    <div className="w-16 h-16 bg-[#174949] flex items-center justify-center rounded-full  mx-auto md:mx-0">
  <img
    src={Icon3}
    alt="Icon"
    className="w-8 h-8 brightness-0 invert"
  />
</div>
      <div>
        <h3 className="text-xl font-semibold text-[#174949] leading-snug mb-1">
          Convenient Appointments
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Book appointments at your convenience, anytime, anywhere.
        </p>
      </div>
    </div>

    {/* Fourth Block */}
    <div className="flex flex-col gap-6 items-start text-center md:text-start">
    <div className="w-16 h-16 bg-[#174949] flex items-center justify-center rounded-full  mx-auto md:mx-0">
  <img
    src={Icon4}
    alt="Icon"
    className="w-8 h-8 brightness-0 invert"
  />
</div>
      <div>
        <h3 className="text-xl font-semibold text-[#174949] mb-1">
          Trusted Expertise
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Years of experience delivering high-quality healthcare services.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>

   {/* Right Section - Image */}
<div className="mt-6 md:mt-0 hidden md:block">
  <img
    src={sampleImage}
    alt="Healthcare"
    className=" rounded-md"
  />
</div>

  </div>
</section>
    </Wrapper>
  )
}
 export default WhyChoose;