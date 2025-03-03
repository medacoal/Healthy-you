import React from "react";
import Success from "../../assets/icons/Success Icon.png";

const Message = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-start justify-center mt-24 z-50"> {/* Adjusted margin-top */}
      <div className="flex flex-col items-center rounded-md w-full max-w-lg bg-white p-6 shadow-lg"> {/* Reduced width and padding */}
        <img src={Success} className="w-24 h-24" alt="Success Icon" /> {/* Adjusted icon size */}
        <h1 className="text-xl font-semibold mb-4 text-center">Message Sent Successfully</h1> {/* Adjusted font size */}
        <p className="mb-6 text-center">Thank you for reaching out to us. We will contact you as soon as possible.</p>
        <button
          className="bg-[#147C84] w-full text-white font-semibold py-3 rounded hover:bg-[#10656C] transition-colors"
          onClick={onClose}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Message;
