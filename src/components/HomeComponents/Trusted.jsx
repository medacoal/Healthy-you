import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import tega from "../../assets/Group.png";
import pharmarack from "../../assets/pharmarack_logo.png.png";
import medi from "../../assets/medibank_private_health_insurance_logo.svg.png";
import take from "../../assets/pharmeasy_logo.png.png";
import torrent from "../../assets/teva_pharmaceuticals_logo.svg.png";
import pharmax from "../../assets/phamax_digital_logo.png.png";

import Wrapper from "../reasurable/Wrapper";

const Trusted = () => {
  const logos = [tega, pharmarack, medi, take, torrent, pharmax];

  return (
    <Wrapper>
      <div className="container mx-auto px-2">
        <h1 className="text-2xl font-semibold mb-4 text-center md:text-start">
          Trusted By:
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={2} // Number of logos visible at once
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          loop={true} 
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-scroll
          modules={[Autoplay]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={logo} alt={`logo-${index}`} className="object-contain"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Trusted;
