import React from "react";
import image from '../assets/2149856264 1.png'

const Expert = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
        {/* Text  */}
        <div className="md:w-1/2 text-left space-y-4 mt-10">
        <h1 className="text-6xl font-bold">
  Expert Healthcare, just a{" "}
  <span className="italic font-[600] text-[#174949] ">click away</span> 
</h1>

          <p className="text-lg font py-6">Connect with certified doctors for personalized consulatations from the comfort of your home </p>
          <div className="flex items-center space-x-8">
  {/* Book an Appointment */}
  <div className="bg-[#174949] text-white px-6 py-3 rounded-lg shadow-md">
    Book an Appointment
  </div>

  {/* How it Works */}
  <div className="flex items-center space-x-2">
    <div className=" text-[#174949] font-normal text-lg">How it Works</div>
    
  </div>
</div>

<div className="flex items-center space-x-4 pt-7">

  <div className="text-4xl font-bold">
  12<span className="text-[#174949]">+</span>
</div>


  {/* Vertical Rule */}
  <div className="h-8 border-l-2 border-[#9e9e9e]"></div>

  {/* Supporting Text */}
  <div className="leading-relaxed text-[#9e9e9e]">
    Years helping patients online
  </div>
</div>

        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/src/assets/2149856264 1.png"
            alt="image"
            className="max-w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Expert;
