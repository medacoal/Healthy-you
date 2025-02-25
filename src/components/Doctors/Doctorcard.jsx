import React, { useState, useEffect } from "react";
import Wrapper from "../reasurable/Wrapper";
import axios from "axios";
import { Link } from "react-router-dom";

const Doctorcard = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 9;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        console.log("Fetching doctors...");
        const response = await axios.get("/doctor/all");
        console.log("API Response:", response.data);

        if (!response.data || !Array.isArray(response.data.doctors)) {
          throw new Error("Invalid response format");
        }

        setDoctors(response.data.doctors);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError(err.response?.data?.message || "Failed to fetch doctors");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;
  const displayedDoctors = doctors.slice(startIndex, endIndex);

  if (loading) return <p className="text-center py-10">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8 px-2">
        {displayedDoctors.length > 0 ? (
          displayedDoctors.map((item) => (
            <div key={item._id} className="border-[#147C84] cursor-pointer">
              {/* Doctor Image */}
              
                <div>
              <img src={item.images[0].url} alt="blog" className='w-full' />
            </div>

              {/* Doctor Details */}
              <div className="pt-2 px-5 shadow-xl hover:shadow-2xl rounded-lg pb-4">
                <h1 className="text-xl font-bold text-[#28303F] pb-2 text-center font-[Axiforma]">
                  {item.name}
                </h1>
                <h2 className="text-1xl font-bold text-[#28303F] font-[Axiforma] text-center">
                  {item.title}
                </h2>
                <p className="text-1xl text-[#527C88] font-[Axiforma] text-center">
                  {item.description}
                </p>

                {/* "Book Now" Button */}
                <Link to={`/doctor-profile/${item._id}`}>
                  <button className="mt-3 cursor-pointer text-[#0C4C51] hover:text-white text-sm font-mono hover:bg-[#147C84] border border-[#147C84] rounded-lg h-10 justify-center w-full">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No doctors available</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`px-4 py-2 border rounded-lg ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <button
          className={`px-4 py-2 border rounded-lg ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default Doctorcard;
