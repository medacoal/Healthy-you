import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import dot from "../../assets/icons/Ellipse 4 (4).png";
import checkbox from "../../assets/icons/Vector (47).png";
import locate from "../../assets/icons/Group (2).png";
import clock from "../../assets/icons/Frame 1171278901 (4).png";
import good from "../../assets/icons/Frame 1171278901 (5).png";
import house from "../../assets/icons/Frame 1171278901 (2).png";
import star from "../../assets/icons/Frame 1171278906.png";
import PropTypes from "prop-types"
// import { useParams } from "react-router-dom";

const Profile = ({}) => {
  // console.log(doctorId);
  
  const { id } = useParams(); // Get doctor ID from URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); 


  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`/doctor/${id}`);
        setDoctor(response.data.doctor);
        console.log(response.data.doctor);
      } catch (err) {
        console.error("Error fetching doctor details:", err);
        setError("Failed to load doctor details");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <p>Loading doctor details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="px-4 sm:px-6 md:px-10 pb-6 pt-10 bg-white rounded-lg max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start w-full lg:w-2/3">
          {/* Doctor's Image */}
          <div className="w-40 sm:w-48 md:w-60 flex-shrink-0">
            <img src={doctor?.images[0].url} alt={doctor.name} className="w-full h-auto rounded-lg object-cover" />
          </div>
          <div className="flex flex-col space-y-3.5 w-full">
            <button className="flex items-center bg-[#D5FAF1] gap-2 py-1 px-3 w-fit rounded-lg">
              <img src={dot} alt="Available" className="w-2 h-2" />
              <p className="text-sm sm:text-base">Available</p>
            </button>
            <div className=" ">
              <p className="font-semibold flex items-center gap-2 text-lg sm:text-xl">
                {doctor.name}
                <img src={checkbox} alt="Verified" className="w-5 h-5" />
              </p>
            </div>
            <div>
              <p className="text-[#0C4C51] font-semibold text-sm sm:text-base px-2 rounded-md">
                {doctor.title}
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

// Profile.propTypes = {
//   doctorId: PropTypes.string.isRequired, 
// };

