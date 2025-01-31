import React from "react";
import image from "../../assets/images/2149856264 1.png"
import Wrapper from "./reasurable/Wrapper";

const Expert = () => {
  return (
   <Wrapper>
     <section className="py-10 px-2 text-[#000000] font-[Axiforma]">
      <div className="flex flex-col-reverse md:flex-row items-center ">
        {/* Text  */}
        <div className=" space-y-4 mt-10">
        <h1 className="lg:text-6xl lg:w-[600px] text-4xl font-bold">
  Expert Healthcare, Just a{" "}
  <span className="italic font-[600] text-[#174949] ">Click Away</span> 
</h1>

          <p className="text-lg font py-6 lg:w-[574.92px]">Connect with certified doctors for personalized consulatations from the comfort of your home </p>
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
        <div className="md:w-2/3 flex justify-center md:justify-end">
          <img
            src={image}
            alt="image"
            className="max-w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
   </Wrapper>
  );
};

export default Expert;
