import React from "react";
import doctor from "../../assets/images/naomi.png";
import dot from "../../assets/icons/Ellipse 4 (3).png";
import checkbox from "../../assets/icons/Vector (47).png";
import locate from "../../assets/icons/Group (2).png";
import clock from "../../assets/icons/Frame 1171278901 (4).png";
import good from "../../assets/icons/Frame 1171278901 (5).png";
import house from "../../assets/icons/Frame 1171278901 (2).png";
import star from "../../assets/icons/Frame 1171278906.png";
import love from "../../assets/icons/Frame 1171278901 (6).png";
import infinity from "../../assets/icons/Frame 1171278909.png";
import quote from "../../assets/icons/Frame 1171278910.png";
import deepgood from "../../assets/icons/Frame 1171278901 (3).png";
import message from "../../assets/icons/Group 1000002443.png";
import phone from "../../assets/icons/Group 1000002444.png";
import video from "../../assets/icons/Group 1000002445.png";

const DoctorDetails = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-8 md:py-10 border-[#767680] border-1 mx-4 sm:mx-6 md:mx-10 lg:mx-20 my-6 sm:my-8 md:my-10 rounded-lg">
      <div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6 sm:mb-8 md:mb-10">
          {/* Doctor Image and Details */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <img
                src={doctor}
                alt="Doctor"
                className="md:w-20 md:h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex flex-row bg-[#D5FAF1] gap-2 items-center text-xs sm:text-sm md:text-[15px] w-fit px-2 py-1 rounded-lg">
                <img src={dot} alt="Available" className="w-2 h-2" />
                Available
              </button>
              <p className="font-semibold flex flex-row gap-2 text-base sm:text-lg md:text-[20px]">
                Dr. Naomi Jr. <img src={checkbox} alt="Verified" className="w-5 h-5"/>
              </p>
              <p className="text-xs sm:text-sm md:text-[16px] text-[#0C4C51] font-semibold">
                Psychiatrist
              </p>
              <p className="text-xs sm:text-sm md:text-[16px]">
                Speak: English, French, German
              </p>
              <button className="flex flex-row items-center gap-1">
                <img src={locate} alt="Location" className="w-3 h-4" />
                <p className="text-xs sm:text-sm md:text-[16px]">
                  Anywhere St, Any City, 12345
                </p>
              </button>
            </div>
          </div>

          {/* Doctor Availability and Ratings */}
          <div className="flex flex-col gap-2">
            <button className="flex flex-row gap-2 text-xs sm:text-sm md:text-[15px]">
              <img src={clock} alt="Clock" className="w-5 h-5" /> Full Time, Online Therapy
              Available
            </button>
            <button className="flex flex-row gap-2 text-xs sm:text-sm md:text-[15px]">
              <img src={good} alt="Good" className="w-5 h-5" /> 94% Recommended
            </button>
            <button className="flex flex-row gap-2 text-xs sm:text-sm md:text-[15px] mb-3">
              <img src={house} alt="Hospital" className="w-5 h-5" /> Royal Prince Alfred
              Hospital
            </button>
            <button className="flex flex-row gap-2 items-center">
              <img src={star} alt="Star" className=""/>
              <p className="text-xs sm:text-sm md:text-[15px]">5.0 <span className="underline">150 Reviews</span></p>
            </button>
          </div>

          {/* Actions and Price */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-end gap-2">
              <img src={love} alt="Love" className="w-6 h-6" />
              <img src={infinity} alt="Infinity" className="w-6 h-6" />
              <img src={quote} alt="Quote" className="w-6 h-6" />
            </div>
            <div className="flex flex-row gap-2 justify-end">
              <img src={deepgood} alt="Deepgood" className="w-5 h-5" />
              <p className="text-xs sm:text-sm md:text-[15px] font-semibold">
                Accepting New Patients
              </p>
            </div>
            <div className="flex flex-row gap-2 justify-end">
              <button className="flex flex-row bg-[#F2F5F9] items-center justify-center text-xs sm:text-[12px] gap-1 px-2 py-1.5 rounded-lg">
                <img src={message} alt="Message" className="w-4 h-4" /> Chat
              </button>
              <button className="flex flex-row bg-[#F2F5F9] items-center justify-center text-xs sm:text-[12px] gap-1 px-2 py-1.5 rounded-lg">
                <img src={phone} alt="Phone" className="w-4 h-4" /> Audio calls
              </button>
              <button className="flex flex-row bg-[#F2F5F9] items-center justify-center text-xs sm:text-[12px] gap-1 px-2 py-1.5 rounded-lg">
                <img src={video} alt="Video" className="w-4 h-4" /> Video calls
              </button>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-[16px] flex justify-end font-semibold">
                Price: $100 - $200 for a session
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#767680] border-0.5" />

        {/* Book Now Button */}
        <div>
          <button className="w-full hover:bg-[#147d84d0] bg-[#147C84] h-14 text-white rounded-lg mt-6 sm:mt-8 md:mt-10 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;