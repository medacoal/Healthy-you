import React from 'react'
import ConsultImg from '../../assets/images/2151696299 1.png'
import Wrapper from '../reasurable/Wrapper'
const Consult = () => {
  return (
    <Wrapper>
      <section className="px-2 font-[Axiforma]">
  <div className=" grid md:grid-cols-2 items-center gap-5 lg:gap-0">
    {/* Image Section */}
    <div className="justify-center">
      <img
        src={ConsultImg}
        alt="image"
        className=" rounded-md"
      />
    </div>

    {/* Text Section */}
    <div className="space-y-5 pt-5 md:pt-0">
      <div className='lg:w-[650px] text-center lg:text-start'>
      <h1 className="lg:text-6xl text-3xl font-bold">
      Consult with our Expert and 
        <span className="italic font-[600] text-[#174949]"> Professional Doctors</span>
      </h1>
      </div>
<div className='text-xl lg:w-[590px] text-[#474747]'>  
<p className=" font py-5">
      Get personalized medical advice from highly skilled and experienced doctors across various specialties. Whether you need a quick consultation, a detailed diagnosis, or ongoing care.
      </p>
      <p>
      Experience compassionate and confidential care tailored to your needs, all from the comfort of your home.
      </p>
</div>
<div className="bg-[#147C84] w-[199px] h-[54px] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#147C84] border-2">
    Book an Appointment
  </div>
    </div>
  </div>
</section>
    </Wrapper>

  )
}
export default Consult