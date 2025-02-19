import React from 'react'
import Mission from '../../assets/images/mission.png'
import staricon from '../../assets/icons/Vector (21).png'
import Wrapper from '../reasurable/Wrapper'
const OurMission = () => {
  return (
   <Wrapper>
     <section className="w-full container mx-auto px-2 font-[Axiforma]">
  <div className="grid md:grid-cols-2 items-center gap-5 pb-14">
    {/* Image Section */}
    <div className="">
      <img
        src={Mission}
        alt="image"
        className="max-w-full  rounded-md"
      />
    </div>

    {/* Text Section */}
    <div className=" justify-center lg:pt-0">
      <h1 className="md:text-5xl text-2xl font-bold">
     Our Mission
      </h1>

      <p className="text-xl py-6">
      Our mission is to revolutionize healthcare access by connecting patients with expert medical professionals through a seamless and user-friendly platform.
      </p>

      <div className='lg:space-y-6 space-y-3'>
      <div className="flex items-center space-x-2">
  <img
    src={staricon}
    alt="staricon"
    className="mb-5"
  />
  <p className="text-lg font-medium">
    Ensure quality medical care is available to everyone, regardless of location or circumstance.
  </p>
</div>
      <div className="flex items-center space-x-2 ">
  <img
    src={staricon}
    alt="staricon"
    className="mb-5"
  />
  <p className="text-lg font-medium">
  Maintain the highest standards of professionalism, confidentiality, and expertise in every interaction.
  </p>
</div>
      <div className="flex items-center space-x-2">
  <img
    src={staricon}
    alt="staricon"
    className="mb-5"
  />
  <p className="text-lg font-medium">
  Empowering our users with the knowledge and tools to grow their businesses and expand their reach.
  </p>
</div>
    </div>
    </div>

  </div>
</section>
   </Wrapper>

  )
}

export default OurMission