import React from "react";
import tega from "../../assets/Group.png"
import pharmarack from "../../assets/pharmarack_logo.png.png"
import medi from "../../assets/medibank_private_health_insurance_logo.svg.png"
import take from "../../assets/pharmeasy_logo.png.png"
import torrent from "../../assets/teva_pharmaceuticals_logo.svg.png"
import pharmax from "../../assets/phamax_digital_logo.png.png"
const Trusted = () => {
  return (
    <div className="px-24 ">
    <h1 className="text-xl font-semibold mb-4">Trusted By:</h1>
    <div className="flex flex-wrap items-center gap-4 md:grid-cols-2 gap-4">
      <img
        src="/src/assets/Group.png"
        alt="tega"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src="/src/assets/pharmarack_logo.png.png"
        alt="pharmarack"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src="/src/assets/medibank_private_health_insurance_logo.svg.png"
        alt="medi"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src="/src/assets/pharmeasy_logo.png.png"
        alt="take"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src="/src/assets/teva_pharmaceuticals_logo.svg.png"
        alt="torrent"
        // className="h-12 md:h-16 object-contain"
      />
      <img
        src="/src/assets/phamax_digital_logo.png.png"
        alt="pharmax"
        // className="h-12 md:h-16 object-contain"
      />
    </div>
  </div>
  
  );
};

export default Trusted;
