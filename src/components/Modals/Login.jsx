import React from 'react';
import Success from "../../assets/icons/Success Icon.png";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center  rounded-md w-full max-w-xl bg-white p-8 shadow-lg">
        <img
          src={Success}
          className="w-30 h-30 "
          alt="Success Icon"
        />
        <h1 className="text-2xl font-semibold mb-4 text-center md:text">Welcome Back</h1>
        <p className="mb-6 text-center">You've successfully logged into your account.</p>
        <button className="bg-[#147C84] w-full text-white font-semibold py-3 rounded hover:bg-[#10656C] transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;