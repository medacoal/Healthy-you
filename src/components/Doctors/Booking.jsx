import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Wrapper from "../reasurable/Wrapper";
import right from "../../assets/icons/Stockholm-icons (1).png";
import Profile from "./Profile";
import Payment from "./Payment";
import Info from "./Info";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  

  return (
   
      <div className="w-11/12 container mx-auto pt-24">
        <Link className="flex font-medium gap-3 cursor-pointer" to={`/doctor-profile/${id}`}>
          <img src={right} alt="Go Back" className="w-7 h-8 py-1" />
          <h1 className="text-[#0E0A2D] text-xl">Go Back</h1>
        </Link>
        <div className="bg-[#F9F9F9] rounded-2xl p-11 mb-10 w-full  justify-center ">
          <div className="space-y-10 w-full ">
            <Profile />
            <div className="md:flex flex-col md:flex-row   w-full justify-between  hidden">
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
    
  );
};

export default Booking;


