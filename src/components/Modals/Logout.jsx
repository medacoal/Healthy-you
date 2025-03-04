import React from 'react';
import Success from "../../assets/icons/Success Icon (1).png"; // Ensure the path is correct for your icon

const LogoutModal = ({ onClose, onLogout }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="flex flex-col items-center rounded-md w-full max-w-xl bg-white p-8 shadow-lg">
        {/* Success Icon */}
        <img
          src={Success}
          className="w-30 h-30 mb-4"
          alt="Success Icon"
        />
        <h1 className="text-2xl font-semibold mb-4 text-center">Log Out</h1>
        <p className="mb-6 text-center">Are you sure you want to logout your account?</p>

        {/* Buttons */}
        <div className="flex gap-4 w-full">
          <button
            onClick={onClose}
            className="bg-[#f0f0f0] w-full text-black font-semibold py-3 rounded hover:bg-gray-200"
          >
            No
          </button>
          <button
            onClick={onLogout}
            className="bg-[#147C84] w-full text-white font-semibold py-3 rounded hover:bg-[#065757]"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
