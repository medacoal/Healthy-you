import React from 'react'
import ConsultImg from '../../assets/images/2149856264 1.png'
const Consult = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <img
        src={ConsultImg}
        alt="image"
        className="max-w-full h-auto rounded-md shadow-md"
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 text-left space-y-4 mt-10 md:mt-0">
      <h1 className="text-5xl font-bold">
      Consult with our Expert and 
        <span className="italic font-[600] text-[#174949]"> Professional Doctors</span>
      </h1>

      <p className="text-lg font py-6">
      Get personalized medical advice from highly skilled and experienced doctors across various specialties. Whether you need a quick consultation, a detailed diagnosis, or ongoing care.
      </p>

      <p className='text-lg '>
      Experience compassionate and confidential care tailored to your needs, all from the comfort of your home.
      </p>

    </div>
  </div>
</section>

  )
}

export default Consult