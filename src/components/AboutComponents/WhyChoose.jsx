import React from 'react'
// import { FaHeartbeat } from 'react-icons/fa';
import sampleImage from '../../assets/image.png';

const WhyChoose = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
  <div className="flex flex-col md:flex-row items-center">
    
    {/* Left Section - Icon, Heading, Paragraph */}
    <div className="md:w-1/2 text-left">
      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight mb-2">
        Why 
        <span className="italic font-[600] text-[#174949] ml-2">Choose Us</span>
      </h1>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


    {/* First Block */}
    
    {/* First Block */}
    <div className="flex items-start space-x-4">
    <div className="w-20 h-20 bg-[#174949] rounded-full flex items-center justify-center overflow-hidden">
  <img
    src="/src/assets/vector5.png"
    alt="Icon"
    className="w-10 h-10 filter brightness-0 invert"
  />
</div>

      <div>
        <h3 className="text-xl font-semibold text-[#174949] leading-snug mb-2">
          Experience medical professionals
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          We believe in treating each patient as an individual, taking the time to understand your unique health.
        </p>
      </div>
    </div>


    {/* Second Block */}
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 bg-[#174949] rounded-full flex items-center justify-center">
        <img
          src="/src/assets/vector5.png"
          alt="Icon"
          className="w-6 h-6 filter brightness-0 invert"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#174949] leading-snug mb-1">
          Comprehensive Care
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Holistic healthcare solutions tailored to your needs.
        </p>
      </div>
    </div>

    {/* Third Block */}
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 bg-[#174949] rounded-full flex items-center justify-center">
        <img
          src="/src/assets/vector5.png"
          alt="Icon"
          className="w-6 h-6 filter brightness-0 invert"
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
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 bg-[#174949] rounded-full flex items-center justify-center">
        <img
          src="/src/assets/vector5.png"
          alt="Icon"
          className="w-6 h-6 filter brightness-0 invert"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#174949] leading-snug mb-1">
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
<div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
  <img
    src={sampleImage}
    alt="Healthcare"
    className="max-w-full h-auto rounded-md shadow-md"
  />
</div>

  </div>
</section>

  )
}
 export default WhyChoose;