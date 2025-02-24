import React, { useState } from "react";
import Wrapper from "../reasurable/Wrapper";
import { DoctorcardDb } from "../db";
import { Link } from "react-router-dom";
import element from "../../assets/icons/element-3.png";

const Doctorcard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const doctorsPerPage = 9;
  const totalDoctors = DoctorcardDb.length;
  const totalPages = Math.ceil(totalDoctors / doctorsPerPage);

  // Determine doctors to display based on page
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;
  const displayedDoctors = DoctorcardDb.slice(startIndex, endIndex);

  return (
    <Wrapper>
      {/* Filter Buttons */}
      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8 px-2">
        {displayedDoctors.map((item, index) => (
          <div key={index} className="border-[#147C84] cursor-pointer">
            {/* Doctor Image */}
            <div>
              <img src={item.image} alt="icon" className="w-full" />
            </div>

            {/* Doctor Details */}
            <div className="pt-2 px-5 shadow-xl hover:shadow-2xl rounded-lg pb-4">
              <h1 className="text-xl font-bold text-[#28303F] pb-2 text-center font-[Axiforma]">
                {item.name}
              </h1>
              <h2 className="text-1xl font-bold text-[#28303F] font-[Axiforma] text-center">
                {item.sub}
              </h2>
              <p className="text-1xl text-[#527C88] font-[Axiforma] text-center">
                {item.description}
              </p>

              {/* "Book Now" clickable only on the first page */}
              {currentPage === 1 && index === 0 ? (
                <Link to={`/doctor-profile/${item._id}`}>
                  <button className="mt-3 cursor-pointer text-[#0C4C51] hover:text-white text-sm font-mono hover:bg-[#147C84] border border-[#147C84] rounded-lg h-10 justify-center w-full">
                    Book Now
                  </button>
                </Link>
              ) : (
                <button
                  className="mt-3 cursor-pointer text-[#0C4C51] hover:text-white text-sm font-mono hover:bg-[#147C84] border border-[#147C84] rounded-lg h-10 justify-center w-full"
                  disabled
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4">
        <button
          className={`px-4 py-2 border rounded-lg ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
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
