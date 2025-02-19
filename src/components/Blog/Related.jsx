import React from 'react';
import { RelatedDb } from '../db';
import { Link } from 'react-router-dom';
import Wrapper from '../reasurable/Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';

const Related = () => {
  return (
    <Wrapper>
      <div className="px-2 text-[#000000] font-[Axiforma]">
        <div className="md:text-5xl text-2xl ">
          <h1 className="font-semibold">
            Related{' '}
            <span className="font-serif italic text-[#5a8385] font-semibold">
              Articles
            </span>
          </h1>
        </div>

        {/* Swiper Component with Pagination and Autoplay */}
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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-10 h-[550px] md:h-auto"
        >
          {RelatedDb.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white cursor-pointer space-y-4">
                <img
                  src={item.image}
                  alt="icon"
                  className="w-full  object-cover rounded-t-2xl"
                />
                 <div className="text-[#535353] flex justify-between items-center pt-2">
                  <div className="text-sm">May 1, 2024</div>
                  <div className="flex gap-2">
                    <img
                      src={item.icon2}
                      alt="icon22"
                      className="h-6 w-6 rounded-full border border-[#147C84] p-1"
                    />
                    <img
                      src={item.icon}
                      alt="icon22"
                      className="h-6 w-6 rounded-full border border-[#147C84] p-1"
                    />
                    <img
                      src={item.icon9}
                      alt="icon9"
                      className="h-6 w-6 rounded-full border border-[#147C84] p-1"
                    />
                  </div>
                </div>

                <div className="">
                  <h1 className="text-xl font-bold text-[#000000] pb-2">
                    {item.heading}
                  </h1>
                  <p className="text-lg text-[#00000078]">
                    {item.description.slice(0, 80)}...
                  </p>
                </div>
               
                <div className=" ">
                  {item.heading ===
                  'Healthy Eating on a Budget: Tips and Strategies' ? (
                    <Link to="/healthy-eating">
                      <div className="py-2 text-[#147C84] hover:bg-[#147C84] hover:text-white hover:border w-24 text-center rounded-xl text-sm cursor-pointer">
                        Learn More
                      </div>
                    </Link>
                  ) : (
                    <div className="py-2 text-[#147C84] hover:bg-[#147C84] hover:text-white hover:border w-24 text-center rounded-xl text-sm cursor-pointer">
                      Learn More
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Related;
