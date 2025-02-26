import React from 'react';
import rated1 from "../../assets/rated1.png";
import rated2 from "../../assets/rated2.png";
import rated3 from "../../assets/rated3.png";
import Wrapper from '../reasurable/Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom";



const Meet = () => {
  const navigate = useNavigate(); // Added useNavigate for navigation

  const doctors = [
    { img: rated1, name: "Dr. Naomi Jr. MD", title: "Head of Psychiatrist", description: "Expert in diagnose, treat, and prevent mental health disorders, provide therapy." },
    { img: rated2, name: "Dr. Jim Beglinei", title: "Head of Neurologist", description: "Expert in diagnosis and treatment of disorders affecting the nervous system." },
    { img: rated3, name: "Dr. Lisa Chen", title: "Head of Emergency Medical Specialist", description: "Expert in emergency airway procedures, ensures patient safety and respiratory." },
    { img: rated1, name: "Dr. Guru Maraji", title: "Emergency Medicine Specialist", description: "Expert in emergency airway procedures, ensuring patient safety." },
  ];

  return (
    <Wrapper>
      <div className=" px-2 font-[Axiforma] lg:container lg:mx-auto">
        <h1 className="md:text-5xl text-2xl font-bold text-center mb-10">
          Meet Our Top
          <span className="italic font-[600] text-[#174949] "> Rated Doctors</span>
        </h1>

        {/* Swiper for doctor cards */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg h-[570px]">
                {/* Image */}
                <div className="w-full h-auto">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
                  <h6 className="text-sm font-medium mb-2">{doctor.title}</h6>
                  <p className="text-[#527C88] leading-relaxed mb-4">{doctor.description}</p>
                  <div className="flex justify-center">
                  <button
      onClick={() => navigate("/Book")} // Change "/book" to your actual booking page route
      className="flex items-center text-[#147C84] px-4 py-2 rounded-md border border-[#6ca59e] hover:bg-[#147C84] hover:text-white cursor-pointer"
    >
      Book Now
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 ml-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Meet;
