import React from "react";
import doctor from "../../assets/images/naomi.png";
import dot from "../../assets/icons/Ellipse 4 (4).png";
import checkbox from "../../assets/icons/Vector (47).png";
import locate from "../../assets/icons/Group (2).png";
import clock from "../../assets/icons/Frame 1171278901 (4).png";
import good from "../../assets/icons/Frame 1171278901 (5).png";
import house from "../../assets/icons/Frame 1171278901 (2).png"
import star from "../../assets/icons/Frame 1171278906.png";

const Profile = () => {
  return (
    <div className="px-4   pb-6 pt-10 bg-white rounded-lg mx-auto">
      <div className="flex flex-col md:flex-row  lg:gap-36 gap-10">
        {/* Doctor's Image & Availability */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="md:w-50 lg:w-60 flex-shrink-0">
            <img src={doctor} alt="Doctor" className="w-full rounded-lg"/>
          </div>
          <div className="flex flex-col space-y-3.5 w-full">
            <button className="flex items-center bg-[#D5FAF1] gap-2 py-1 px-3 w-fit rounded-lg">
              <img src={dot} alt="Available" className="w-2 h-2" />
              <p className="text-sm sm:text-base">Available</p>
            </button>
            <div className=" ">
              <p className="font-semibold flex items-center gap-2 text-lg sm:text-xl">
                Dr. Naomi Jr.
                <img src={checkbox} alt="Verified" className="w-5 h-5" />
              </p>
              </div>
              <div>
              <p className="text-[#0C4C51] font-semibold text-sm sm:text-base   px-2 rounded-md">
                Psychiatrist
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 text-sm sm:text-base">
            
              <img src={locate} alt="Location" className="w-4 h-4" />
              <p className="font-semibold">Anywhere St, Any City, 12345</p>
          
            </div>
          </div>
        </div>

        {/* Doctor Availability and Ratings */}
        <div className="flex flex-col space-y-3.5 text-[#000000] w-full text-sm sm:text-base">
          <button className="flex items-center gap-2 font-semibold">
            <img src={clock} alt="Clock" className="w-6 h-6 sm:w-8 sm:h-8"/>
            <span>Full Time, Online Therapy Available</span>
          </button>
          <button className="flex items-center gap-2 font-semibold">
            <img src={good} alt="Good" className="w-6 h-6 sm:w-8 sm:h-8"/>
            <span>94% Recommended</span>
          </button>
          <button className="flex items-center gap-2 font-semibold">
            <img src={house} alt="Hospital" className="w-6 h-6 sm:w-8 sm:h-8"/>
            <span>Royal Prince Alfred Hospital</span>
          </button>
          <button className="flex items-center gap-2">
            <img src={star} alt="Star" className="w-16 sm:w-20" />
            <p className="text-sm sm:text-base font-semibold">5.0 <span className="underline">150 Reviews</span></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;