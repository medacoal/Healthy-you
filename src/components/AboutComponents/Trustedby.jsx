import React from "react";
import tega from "../../assets/Group.png"
import pharmarack from "../../assets/pharmarack_logo.png.png"
import medi from "../../assets/medibank_private_health_insurance_logo.svg.png"
import take from "../../assets/pharmeasy_logo.png.png"
import torrent from "../../assets/teva_pharmaceuticals_logo.svg.png"
import pharmax from "../../assets/phamax_digital_logo.png.png"
import Wrapper from "../reasurable/Wrapper";
const Trustedby = () => {
  return (
    <Wrapper>
      <div className="container mx-auto font-[Axiforma]">
    <h1 className="text-2xl font-semibold mb-4 text-center lg:text-start">Trusted By:</h1>
    <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
    
     <img
        src={tega}
        alt="tegarr"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src={pharmarack}
        alt="pharmarack"
        // className="h-12 md:h-16 object-contain"
      />
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
    </Wrapper> 
  );
};

export default Trustedby;
