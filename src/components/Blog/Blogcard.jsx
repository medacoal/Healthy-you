import React from 'react';
import Wrapper from '../reasurable/Wrapper';
import { blogCardDb } from '../db';
import { Link } from 'react-router-dom';

const Blogcard = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-2">
        {blogCardDb && blogCardDb.map((item, index) => (
          <Link to={``} key={index}>
            <div className='justify-between rounded-2xl hover:border border-[#147C84] p-1'>
              <div>
                <img src={item.image} alt="icon" className='w-full'/>
              </div>
              <div className='pt-2 px-2'>
                <div className='flex justify-between font-bold'>
                <div className='text-sm text-[#000000]'>May 1, 2024</div>
                  <div className='flex gap-2 pb-3'>
                  <img src={item.icon2} alt="icon22" className='h-6 w-6  rounded-full  border border-[#147C84] p-1'/>
                  <img src={item.icon} alt="icon22" className='h-6 w-6  rounded-full  border border-[#147C84] p-1'/>
                 <img src={item.icon9} alt='icon9' className='h-6 w-6  rounded-full  border border-[#147C84] p-1'/>
                  </div>
                  
                </div>
                <h1 className='text-1xl font-bold text-[#000000] pb-2 font-[Axiforma]'>{item.heading}</h1>
                <p className='text-1xl text-[#00000078] font-[Axiforma]'>{item.description.slice(0, 80 )}.......</p>
                <div className='flex pt-2 gap-1 my'>
                  <p className='text-[#147C84] text-sm '>Learn More</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default Blogcard;
