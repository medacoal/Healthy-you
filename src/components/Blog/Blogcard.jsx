import React from 'react';
import Wrapper from '../reasurable/Wrapper';
import { blogCardDb } from '../db';
import { Link } from 'react-router-dom';

const Blogcard = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-2">
        {blogCardDb.map((item, index) => (
          <div
            key={index}
            className="justify-between rounded-2xl hover:border border-[#147C84] p-1 hover:shadow-lg"
          >
            {/* Image - Only the first one is clickable */}
            <div>
              <img src={item.image} alt="icon" className='w-full' />
            </div>

            {/* Card Content */}
            <div className='pt-2 px-2 cursor-pointer'>
              <div className='flex justify-between font-bold'>
                <div className='text-sm text-[#000000]'>May 1, 2024</div>
                <div className='flex gap-2 pb-3'>
                  <img src={item.icon2} alt="icon22" className='h-6 w-6 rounded-full border border-[#147C84] p-1' />
                  <img src={item.icon} alt="icon22" className='h-6 w-6 rounded-full border border-[#147C84] p-1' />
                  <img src={item.icon9} alt='icon9' className='h-6 w-6 rounded-full border border-[#147C84] p-1' />
                </div>
              </div>

              <h1 className='text-1xl font-bold text-[#000000] pb-2 font-[Axiforma]'>{item.heading}</h1>
              <p className='text-1xl text-[#00000078] font-[Axiforma] '>{item.description.slice(0, 80)}.......</p>

              {/* Learn More button - Only the first one is clickable */}
              {item.heading === "Healthy Eating on a Budget: Tips and Strategies" ? (
                <Link to="/healthy-eating">
                  <div className='py-2 gap-1 text-[#147C84] hover:bg-[#147C84] hover:text-white hover:border w-24 text-center rounded-xl text-sm cursor-pointer'>
                    Learn More
                  </div>
                </Link>
              ) : (
                <div className='py-2 gap-1 text-[#147C84] hover:bg-[#147C84] hover:text-white hover:border w-24 text-center rounded-xl text-sm cursor-pointer'>
                  Learn More
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Blogcard;
