import React, { useState } from 'react';
import Wrapper from '../reasurable/Wrapper';
import { DoctorcardDb } from '../db';
import { Link } from 'react-router-dom';
import element from "../../assets/icons/element-3.png";

const Doctorcard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const doctorsPerPage = 9;
  const totalDoctors = DoctorcardDb.length;
  const totalPages = Math.ceil(totalDoctors / doctorsPerPage);

  // Determine doctors to display based on page
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;
  const displayedDoctors = DoctorcardDb.slice(startIndex, endIndex);

  return (
    <Wrapper>
      {/* Filter Buttons */}
      <div className='py-8 px-2 font-[Axiforma] flex md:flex-row justify-between'>
        <div className='flex flex-col md:flex-row gap-5'>
          <button className='bg-[#147C84] text-[#FFFFFF] rounded-lg border w-[52px] h-[35px]'>
            All
          </button>
          <button className='border-[#147C84] border text-[#000000] rounded-lg font-medium w-[117px] h-[35px] cursor-pointer'>
            Cardiology
          </button>
          <button className='border-[#147C84] border text-[#000000] rounded-lg font-medium w-[117px] h-[35px] cursor-pointer'>
            Emergency
          </button>
          <button className='border-[#147C84] border text-[#000000] rounded-lg font-medium w-[117px] h-[35px] cursor-pointer'>
            Neurology
          </button>
          <button className='border-[#147C84] border text-[#000000] rounded-lg font-medium w-[117px] h-[35px] cursor-pointer'>
            Pediatric
          </button>
          <button className='border-[#147C84] border text-[#000000] rounded-lg font-medium w-[117px] h-[35px] cursor-pointer'>
            Psychiatry
          </button>
        </div>
        <div className='flex gap-5'>
          <h1 className='text-[#147C84] py-1'>Showing {displayedDoctors.length} items</h1>
          <img src={element} alt='' className='w-8 h-8'/>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-8 px-2">
        {displayedDoctors.map((item, index) => (
          <div key={index} className='border-[#147C84]  cursor-pointer'>
            
            {/* Only First Doctor is Clickable */}
            {index === 0 ? (
              <Link to={`/doctor-detail/${item._id}`} className='block'>
                <div>
                  <img src={item.image} alt="icon" className='w-full'/>
                </div>
              </Link>
            ) : (
              <div>
                <img src={item.image} alt="icon" className='w-full'/>
              </div>
            )}

            <div className='pt-2 px-5 shadow-xl hover:shadow-2xl rounded-lg pb-4'>
              <h1 className='text-xl font-bold text-[#28303F] pb-2 text-center font-[Axiforma]'>{item.name}</h1>
              <h2 className='text-1xl font-bold text-[#28303F] font-[Axiforma] text-center'>{item.sub}</h2>
              <p className='text-1xl text-[#527C88] font-[Axiforma] text-center'>{item.description}</p>
              <button className='mt-3 cursor-pointer text-[#0C4C51] text-sm font-mono border border-[#147C84] rounded-lg h-10 justify-center w-full'>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className='flex justify-center gap-4 mt-4'>
        <button
          className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => setCurrentPage(2)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
}

export default Doctorcard;
