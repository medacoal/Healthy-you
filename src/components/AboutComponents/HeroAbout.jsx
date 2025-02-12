import React, { useState } from 'react';
import Jumbotron from "../../components/reasurable/jumbotrun"

const HeroAbout = () => {
  return (
    <div>
      <Jumbotron 
        title={<> About <em>Us</em></>} 
        description="Healthy You connects you with expert doctors for personalized care, anytime, anywhere. No stress, just quality healthcare made simple for you."
        
      />
    </div>
  );
};

export default HeroAbout;



