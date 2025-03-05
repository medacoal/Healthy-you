import React from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../assets/icons/Success Icon (2).png";

const In = ({ isOpen }) => {
  const navigate = useNavigate();

  if (!isOpen) return null; // Don't render if not open

  const handleDone = () => {
    navigate("/"); // ✅ Redirect to homepage after clicking "Done"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img src={Success} className="w-24 h-24 mb-4" alt="Success Icon" />
        <h1 className="text-2xl font-semibold text-center">Payment Successful</h1>
        <p className="text-center mb-6">You paid $200 to Healthy You</p>
        <button
          onClick={handleDone}
          className="bg-[#147C84] w-full text-white font-semibold py-3 rounded hover:bg-[#10656C] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default In;
