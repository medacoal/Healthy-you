import React from 'react'
import ConsultImg from '../../assets/images/2151696299 1.png'
import Wrapper from '../reasurable/Wrapper'
import { Link } from 'react-router-dom'
const Consult = () => {
  return (
    <Wrapper>
      <section className="px-2 font-[Axiforma] container mx-auto">
  <div className=" grid md:grid-cols-2 items-center gap-5 lg:gap-0 text-center md:text-start">
    {/* Image Section */}
    <div className="justify-center">
      <img
        src={ConsultImg}
        alt="image"
        className=" rounded-md"
      />
    </div>

    {/* Text Section */}
    <div className="lg:space-y-5 ">
      <div className='lg:w-[650px] text-center md:text-start'>
      <h1 className="lg:text-6xl text-2xl font-bold">
      Consult with our Expert and 
        <span className="italic font-[600] text-[#174949]"> Professional Doctors</span>
      </h1>
      </div>
<div className='text-xl lg:w-[590px] text-[#474747] pb-10'>  
<p className=" font py-5">
      Get personalized medical advice from highly skilled and experienced doctors across various specialties. Whether you need a quick consultation, a detailed diagnosis, or ongoing care.
      </p>
      <p>
      Experience compassionate and confidential care tailored to your needs, all from the comfort of your home.
      </p>
</div>
<Link to="/finddoctor" className="bg-[#147C84] px-10 text-white py-4 text-center rounded-lg  ">
    Book an Appointment
  </Link>
    </div>
  </div>
</section>
    </Wrapper>

  )
}
export default Consult