import React from "react";
import tega from "../../assets/Group.png"
import pharmarack from "../../assets/pharmarack_logo.png.png"
import medi from "../../assets/medibank_private_health_insurance_logo.svg.png"
import take from "../../assets/pharmeasy_logo.png.png"
import torrent from "../../assets/teva_pharmaceuticals_logo.svg.png"
import pharmax from "../../assets/phamax_digital_logo.png.png"
import Wrapper from "../reasurable/Wrapper";
const Trusted = () => {
  return (
    <Wrapper>
      <div className="container mx-auto px-2">
    <h1 className="text-2xl font-semibold mb-4 text-center md:text-start ">Trusted By:</h1>
    <div className="flex flex-col md:flex-row md:justify-between items-center">
     <div>
     <img
        src={tega}
        alt="tegarr"
        // className="h-12 md:h-16 object-contain"
      />
     </div>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-32">
      <img
        src={medi}
        alt="medi"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src={take}
        alt="take"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src={torrent}
        alt="torrent"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src={pharmax}
        alt="pharmax"
        // className="h-12 md:h-16 object-contain"
      />
      </div>
    </div>
  </div>
    </Wrapper> 
  );
};

export default Trusted;
