import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import vector1 from '../../assets/Vector1.png';
import vector2 from '../../assets/Vector2.png';
import vector3 from '../../assets/Vector3.png';
import vector4 from '../../assets/Vector4.png';
import vector5 from '../../assets/Vector5.png';
import vector6 from '../../assets/Vector6.png';
import Wrapper from '../reasurable/Wrapper';

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    { img: vector1, title: 'Emergency' },
    { img: vector2, title: 'Pediatric' },
    { img: vector3, title: 'Gynecology' },
    { img: vector4, title: 'Cardiology' },
    { img: vector5, title: 'Neurology' },
    { img: vector6, title: 'Psychiatry' }
  ];

  return (
    <Wrapper>
      <div className='px-2 font-[Axiforma]'>
        <h1 className="md:text-5xl text-2xl font-bold text-center mt-10">
          Explore Our
          <span className="italic font-[600] text-[#174949] "> Services</span>
        </h1>

        <div className="lg:bg-[#e6f3f4] md:p-6 rounded-xl md:mt-10">
          {/* Mobile: Use Swiper */}
          {isMobile ? (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className=""
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="md:bg-white bg-[#E8F2F3] py-8 mt-4 rounded-lg shadow-md flex flex-col items-center h-[200px] justify-between">
  <div className="text-[#6ca59e] pb-5">
    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
  </div>
  <h4 className="text-lg font-normal">{service.title}</h4>
  <h4 className="text-lg font-normal pb-3">Services</h4>
</div>

                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Desktop: Show Grid Layout
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {services.map((service, index) => (
                <div key={index} className="lg:bg-white bg-[#E8F2F3] p-6 rounded-lg shadow-md flex flex-col items-center">
                  <div className="text-[#6ca59e] mb-6">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-normal">{service.title}</h4>
                  <h4 className="text-lg font-normal">Services</h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
