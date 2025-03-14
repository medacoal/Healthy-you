import React from "react";
import image from "../assets/images/2149856264 1.png"
import Wrapper from "./reasurable/Wrapper";
import arrow from "../assets/icons/Arrow up-right.png"
import { Link } from "react-router-dom";
const Expert = () => {
  return (
   <Wrapper>
    <section className="pt-24 px-2 text-[#000000] font-[Axiforma] lg:container lg:mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center">
      <div className="mt-6 md:hidden">
          <img
            src={image}
            alt="image"
            className="max-w-full h-auto rounded-2xl"
          />
        </div>
        {/* Text  */}
        <div className="  text-center md:text-start">
        <h1 className="lg:text-6xl lg:w-[600px] text-3xl font-bold">
  Expert Healthcare, Just a{" "}
  <span className="italic font-[600] text-[#174949] ">Click Away</span> 
</h1>

<p className="text-lg font py-4 lg:w-[574.92px]">Connect with certified doctors for personalized consulatations from the comfort of your home </p>
          <div className="flex items-center lg:space-x-8 space-x-6">
  {/* Book an Appointment */}
  <Link to="/finddoctor" className="bg-[#0C4C51] hover:bg-[#147C84] w-[190px] text-white py-3  text-center rounded-lg cursor-pointer ">
    Book an Appointment
  </Link>

  {/* How it Works */}
  <a href="/about" className="flex items-center space-x-1">
  <div className="text-[#174949] font-normal text-lg">Get to Know Us</div>
  <img src={arrow} alt="Arrow Icon"/>
</a>

</div>

<div className="flex items-center space-x-4 pt-7 justify-center md:justify-start">

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
        <div className="md:w-2/3 lg:flex justify-center md:justify-end hidden md:block">
          <img
            src={image}
            alt="image"
            className="max-w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
   </Wrapper>
   
  );
};

export default Expert;
