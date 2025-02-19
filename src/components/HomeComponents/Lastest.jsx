import React from 'react';
import Wrapper from '../reasurable/Wrapper';
import workout from "../../assets/images/Frame 1171278661.png";
import eating from "../../assets/images/Frame 1171278669.png";
import chest from "../../assets/images/Frame 1171278670.png";
import calender from "../../assets/icons/calendar.png";
import time from "../../assets/icons/clock.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';

const Lastest = () => {
  return (
    <Wrapper>
      <div className='px-2 text-[#000000] font-[Axiforma]'>
        <div className="md:text-5xl text-2xl pb-8 text-center">
          <h1 className="font-semibold">
            Latest Health{' '}
            <span className="font-serif italic text-[#5a8385] font-medium">
              News and Tips
            </span>
          </h1>
        </div>

        {/* Swiper component with Pagination and Autoplay */}
        <Swiper
          modules={[Pagination, Autoplay]} 
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          pagination={{ clickable: true }} 
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="md:mt-10 h-[400px] mx-auto"
        >
          <SwiperSlide>
            <div className="rounded-lg md:w-[350px] cursor-pointer">
              <div className="w-full">
                <img src={workout} alt="" className="w-[400px]" />
                <h1 className="font-medium text-xl lg:w-[350.12px] text-[#2E2E2E] pt-3">
                  The Benefits of Mindfulness Meditation for Stress and Anxiety
                </h1>
              </div>
              <div className="text-[#535353] flex gap-5 pt-2">
                <div className="flex gap-2">
                  <img src={calender} alt="" className="h-5 w-5" />
                  <h1>02 Jan, 2025</h1>
                </div>
                <div className="flex gap-2">
                  <img src={time} alt="" className="h-5 w-5" />
                  <h1>1 min read</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-lg md:w-[350px]  cursor-pointer">
              <div className="w-full">
                <img src={eating} alt="" className=""/>
                <h1 className="font-medium text-xl lg:w-[350.12px] text-[#2E2E2E] pt-3">
                  Healthy Eating on a Budget: Tips and Strategies
                </h1>
              </div>
              <div className="text-[#535353] flex gap-5 pt-2">
                <div className="flex gap-2">
                  <img src={calender} alt="" className="h-5 w-5" />
                  <h1>02 Jan, 2025</h1>
                </div>
                <div className="flex gap-2">
                  <img src={time} alt="" className="h-5 w-5" />
                  <h1>1 min read</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-lg md:w-[350px]  cursor-pointer">
              <div className="w-full">
                <img src={chest} alt="" className="w-[400px]" />
                <h1 className="font-medium text-xl lg:w-[350.12px] text-[#2E2E2E] pt-3">
                  The Importance of Regular Cancer Screenings and Early Detection
                </h1>
              </div>
              <div className="text-[#535353] flex gap-5 pt-2">
                <div className="flex gap-2">
                  <img src={calender} alt="" className="h-5 w-5" />
                  <h1>02 Jan, 2025</h1>
                </div>
                <div className="flex gap-2">
                  <img src={time} alt="" className="h-5 w-5" />
                  <h1>1 min read</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Lastest;
