import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Wrapper from "../reasurable/Wrapper";
import right from "../../assets/icons/Stockholm-icons (1).png";
import Profile from "./Profile";
import Payment from "./Payment";
import Info from "./Info";
import { useParams } from "react-router-dom";

const Booking = () => {
    const { doctorId } = useParams(); 
    console.log(doctorId);
    
  const navigate = useNavigate(); 

  return (
    <Wrapper>
      <div className="px-2 pt-24">
        <div className="flex font-medium gap-3 cursor-pointer" onClick={() => navigate("/book")}>
          <img src={right} alt="Go Back" className="w-7 h-8 py-1" />
          <h1 className="text-[#0E0A2D] text-xl">Go Back</h1>
        </div>
        <div className="bg-[#F9F9F9] rounded-2xl p-6 mb-10 w-full lg:w-[1100px] justify-center mx-auto">
          <div className="space-y-10 w-full mx-auto">
            <Profile doctorId={`${doctorId}`} />
            <div className="md:flex flex-col md:flex-row mx-auto  w-full md:gap-40 lg:gap-96 pb-10 hidden">
              <Payment />
              <Info />
            </div>
            <div className="flex flex-col  w-full gap-16 pb-10 md:hidden">
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


