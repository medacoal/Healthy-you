import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Wrapper from "../reasurable/Wrapper";
import right from "../../assets/icons/Stockholm-icons (1).png";
import Profile from "./Profile";
import Payment from "./Payment";
import Info from "./Info";

const Booking = () => {
  const navigate = useNavigate(); 

  return (
    <Wrapper>
      <div className="px-2 pt-24">
        <div className="flex font-medium gap-3 cursor-pointer" onClick={() => navigate("/book")}>
          <img src={right} alt="Go Back" className="w-7 h-8 py-1" />
          <h1 className="text-[#0E0A2D] text-xl">Go Back</h1>
        </div>
        <div className="bg-[#F9F9F9] rounded-2xl p-6 mb-10 lg:w-[1000px] lg:mx-auto">
          <div className="space-y-10 lg:w-[900px] mx-auto">
            <Profile />
            <div className="md:flex flex-col md:flex-row lg:mx-auto lg:w-[900px] w-full lg:gap-72 pb-10 hidden">
              <Payment />
              <Info />
            </div>
            <div className="flex flex-col md:flex-row lg:mx-auto lg:w-[900px] w-full gap-16 pb-10 md:hidden">
              <Info />
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Booking;
