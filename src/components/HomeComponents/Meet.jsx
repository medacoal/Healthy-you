import React, { useEffect, useState } from 'react';
import Wrapper from '../reasurable/Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Meet = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Added useNavigate for navigation

  // Fetch doctors data from the API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("/doctor/all"); // Replace with your API endpoint
        console.log("Doctors data:", response.data);
        setDoctors(response.data.doctors.slice(0, 4)); // Limit to 4 doctors
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError(err.message || "Failed to fetch doctors");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return <p className="text-center">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <Wrapper>
      <div className="px-2 font-[Axiforma] lg:container lg:mx-auto">
        <h1 className="md:text-5xl text-2xl font-bold text-center mb-10">
          Meet Our Top
          <span className="italic font-[600] text-[#174949]"> Rated Doctors</span>
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
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor._id}>
              <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg h-[570px]">
                {/* Image */}
                <div className="w-full h-[50%]">
                  <img
                    src={doctor.images?.[0]?.url || "https://via.placeholder.com/150"} // Fallback image
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
                      onClick={() => navigate(`/doctor-profile/${doctor._id}`)} // Redirect to doctor's profile
                      className="flex items-center text-[#147C84] px-4 py-2 rounded-md border border-[#6ca59e] hover:bg-[#147C84] hover:text-white cursor-pointer mb-2"
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
