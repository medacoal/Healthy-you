import React from 'react';
import backgroundImage from '../../assets/aboutbg.png'; 

const HeroAbout = () => {
  return (
    <div
      className="relative w-full h-64 md:h-96 bg-[#174949]"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center container mx-auto">
        <div className="flex items-center text-white mb-2">
          <h1 className="text-5xl font-bold">
            About <span className="italic font-medium">Us</span>
          </h1>
        </div>
        <p className="text-lg font-semibold text-white text-center w-7/12">Healthy You connects you with expert doctors for personalized care, anytime, anywhere. No stress, just quality healthcare made simple for you</p>
      </div>
    </div>
  );
};

export default HeroAbout;
