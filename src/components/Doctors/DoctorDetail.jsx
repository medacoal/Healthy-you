import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../reasurable/Wrapper";
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
import { Link } from "react-router-dom";

const DoctorDetails = () => {
  const { id } = useParams(); // Get doctor ID from URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`/doctor/${id}`);
        setDoctor(response.data.doctor);
      } catch (err) {
        console.error("Error fetching doctor details:", err);
        setError("Failed to load doctor details");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading doctor profile...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <Wrapper>
      <div className="lg:px-10 md:py-10 lg:border-[#767680] lg:border-1 my-6 px-2 md:my-10 rounded-lg font-[Axiforma]">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6 sm:mb-8 md:mb-10">
          {/* Doctor Image and Details */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex gap-4">
              
            <div>
              <img src={doctor.images[0].url} alt="blog" className='w-40 h-44 rounded-lg' />
            </div>
              <div className="flex flex-col gap-3 md:hidden">
                <div className="flex flex-row gap-2 ">
                  <img src={deepgood} alt="Accepting Patients" className="w-5 h-5" />
                  <p className="text-sm font-semibold">Accepting New Patients</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-row bg-[#F2F5F9] items-center justify-center gap-1 text-xs rounded-lg py-2">
                    <img src={message} alt="Message" className="w-3 h-3" /> Chat
                  </button>
                  <button className="flex flex-row bg-[#F2F5F9] items-center justify-center text-xs gap-1 py-2 rounded-lg">
                    <img src={phone} alt="Phone" className="w-3 h-3" /> Audio call
                  </button>
                  <button className="flex flex-row bg-[#F2F5F9] items-center justify-center text-xs gap-1 py-2 rounded-lg">
                    <img src={video} alt="Video" className="w-3 h-3" /> Video call
                  </button>
                </div>
                <div>
                  <p className="text-xs font-semibold">Price: $100 - $200 per session</p>
                </div>
                <div className="">
                  <button className="w-full hover:bg-[#147d84d0] bg-[#147C84] h-8 text-white rounded-md cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="flex flex-row bg-[#D5FAF1] gap-2 items-center py-1 w-fit rounded-lg">
                <img src={dot} alt="Available" className="w-2 h-2" /> Available
              </button>
              <div className="flex md:flex-col gap-3 md:gap-0">
                <p className="font-semibold flex flex-row gap-2 text-base sm:text-lg md:text-[20px]">
                  Dr. {doctor.name} <img src={checkbox} alt="Verified" className="w-5 h-5" />
                </p>
                <p className="text-[#0C4C51] font-semibold border md:border-none md:px-0 px-2 rounded-md">
                  {doctor.title}
                </p>
              </div>
              <p className="">
                Speak: English, French, German
              </p>
              <button className="flex flex-row items-center gap-1">
                <img src={locate} alt="Location" className="w-3 h-4" />
                <p className="">
                  Anywhere St, Any City, 12345
                </p>
              </button>
            </div>
          </div>

             {/* Doctor Availability and Ratings */}
             <div className="flex flex-col gap-2 text-[#000000] md:space-y-4">
            <button className="flex flex-row gap-2">
              <img src={clock} alt="Clock" className="w-5 h-5" /> Full Time, Online Therapy
              Available
            </button>
            <button className="flex flex-row gap-2">
              <img src={good} alt="Good" className="w-5 h-5" /> 94% Recommended
            </button>
            <button className="flex flex-row gap-2 mb-3">
              <img src={house} alt="Hospital" className="w-5 h-5" /> Royal Prince Alfred
              Hospital
            </button>
            <button className="flex flex-row gap-2 items-center">
              <img src={star} alt="Star" className=""/>
              <p className="">5.0 <span className="underline">150 Reviews</span></p>
            </button>
          </div>

          {/* Actions and Price */}
          <div className="space-y-5 hidden md:block text-[#000000]">
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
            <div className="md:hidden">
            <button className="w-full hover:bg-[#147d84d0] bg-[#147C84] h-14 text-white rounded-lg mt-6 sm:mt-8 md:mt-10 cursor-pointer">
            Book Now
          </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#767680] border-0.5 hidden md:block"/>

        {/* Book Now Button */}
        <Link to="/book">
          <button className="w-full hover:bg-[#147d84d0] bg-[#147C84] h-14 text-white rounded-lg mt-6 sm:mt-8 md:mt-10 cursor-pointer">
            Book Now
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default DoctorDetails;
