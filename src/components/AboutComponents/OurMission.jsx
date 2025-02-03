import React from 'react'
import Mission from '../../assets/images/mission.png'
import staricon from '../../assets/icons/Vector (21).png'
const OurMission = () => {
  return (
    <section className="w-full container mx-auto px-4 sm:px-6 lg:px-8  py-8 ">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <img
        src={Mission}
        alt="image"
        className="max-w-full h-auto rounded-md shadow-md"
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 text-left space-y-4 mt-10 md:mt-0">
      <h1 className="text-5xl font-bold">
     Our Mission
      </h1>

      <p className="text-lg font py-6 mr-6">
      Our mission is to revolutionize healthcare access by connecting patients with expert medical professionals through a seamless and user-friendly platform.
      </p>

      <div className='space-y-5'>
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

    <div>
    
        
    </div>
  
  </div>
</section>

  )
}

export default OurMission