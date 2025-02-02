import React from 'react'
import Wrapper from '../reasurable/Wrapper'
import left from "../../assets/icons/arrow-left.png"
import right from "../../assets/icons/arrow-right.png"

const Pagination = () => {
  return (
    <Wrapper>
        <div className='py-10'>
            <div className='flex md:gap-6 justify-center'>
                <img src={left} alt='' className='w-10 p-3 cursor-pointer'/>
                <div className='flex gap-4'>
                    <h1 className='rounded-md border w-[40px] h-[37px] p-1 text-[#FFFFFF] bg-[#147C84] text-center cursor-pointer'>1</h1>
                    <h1 className='rounded-md border w-[40px] h-[37px] p-1 text-center cursor-pointer hover:bg-[#147C84] hover:text-[#FFFFFF]'>2</h1> 
                    <h1 className='rounded-md border w-[40px] h-[37px] p-1 text-center cursor-pointer hover:bg-[#147C84] hover:text-[#FFFFFF]'>3</h1>
                    <h2 className='rounded-md border w-[40px] h-[37px] p-1 text-center cursor-pointer hover:bg-[#147C84] hover:text-[#FFFFFF]'>...</h2>
                    <h1 className='rounded-md border w-[40px] h-[37px] p-1 text-center cursor-pointer hover:bg-[#147C84] hover:text-[#FFFFFF]'>10</h1>
                </div>
                <img src={right} alt='' className='w-10 p-3 cursor-pointer'/>
            </div>
        </div>
    </Wrapper>
  )
}

export default Pagination