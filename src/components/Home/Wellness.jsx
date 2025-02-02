import React, { useState } from "react";
import Wrapper from "../reasurable/Wrapper";

const Wellness = () => {
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState(""); // State to manage validation errors
  const [success, setSuccess] = useState(false); // State to track success message

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess(false);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!email) {
      setError("Email address is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate email submission (replace this with your submission logic)
    console.log("Email submitted:", email);
    setSuccess(true);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <Wrapper>
      <div className="px-2">
      <div className="bg-[#0C4C51] font-[Axiforma] text-[#FFFFFFF2] rounded-md py-10 my-5 grid md:grid-cols-2 gap-14 lg:px-10 md:px-3">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="Font-Axiforma lg:text-[34px] text-2xl w-[300px] lg:w-[600px] text-center md:text-start font-bold">
            Supporting our Wellness Journey
          </h1>
          <p className="text-[16px] lg:w-[500px] md:w-[380px] text-center md:text-start w-[300px] pt-4">
            Our comprehensive health resources, reports, advice, and supportive
            community are here to guide you every time of the day.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start md:pt-10">
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-center items-center  rounded-md h-[43px] relative">
              <input
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={handleEmailChange}
                className="py-2 w-full text-[#838383] bg-white md:px-4 rounded-md px-4"
                style={{ outline: "none" }}
              />
              <button
                className="rounded-md w-[100px] text-center text-white bg-[#147C84] cursor-pointer hover:bg-[#0C4C51] lg:px-7 py-2 absolute right-0"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            {/* Error or Success Message */}
            <div className="mt-2">
              {error && <p className="text-red-500 text-sm px-3">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm">
                  Email submitted successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Wellness;


