import React from 'react'
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import vector3 from '../../assets/Vector3.png'
import vector4 from '../../assets/Vector4.png'
import vector5 from '../../assets/Vector5.png'
import vector6 from '../../assets/Vector6.png'
import Wrapper from '../reasurable/Wrapper'
const Services = () => {
  return (
   <Wrapper>
     <div className='px-2 font-[Axiforma]'>
<h1 className="text-5xl font-bold text-center mt-10">
  Explore Our
  <span className="italic font-[600] text-[#174949] "> Services</span> 
</h1>

<div className="bg-[#e6f3f4] p-8 rounded-xl mt-10">
  {/* Boxes Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
    {/* Box 1 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-[#6ca59e] mb-4">
      <img
        src={vector1}
        alt="rated1"
        className="w-full h-full object-cover"
      />
      </div>
      <h4 className="text-lg font-normal ">Emergency</h4>
      <h4 className="text-lg font-normal">Services</h4>
    </div>

    {/* Box 2 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-[#6ca59e] mb-4">
        {/* Icon */}
        <img
        src={vector2}
        alt="rated1"
        className="w-full h-full object-cover"
      />
      </div>
      <h4 className="text-lg font-normal ">Padiatric</h4>
      <h4 className="text-lg font-normal">Services</h4>
    </div>

    {/* Box 3 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-[#6ca59e] mb-4">
        {/* Icon */}
        <img
        src={vector3}
        alt="rated1"
        className="w-full h-full object-cover"
      />
      </div>
      <h4 className="text-lg font-normal ">Gynecology</h4>
      <h4 className="text-lg font-normal">Services</h4>
    </div>

    {/* Box 4 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-[#6ca59e] mb-4">
        {/* Icon */}
        <img
        src={vector4}
        alt="rated1"
        className="w-full h-full object-cover"
      />
      </div>
      <h4 className="text-lg font-normal ">Cardiology</h4>
      <h4 className="text-lg font-normal">Services</h4>
    </div>

    {/* Box 5 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-[#6ca59e] mb-4">
        {/* Icon */}
        <img
        src={vector5}
        alt="rated1"
        className="w-full h-full object-cover"
      />
      </div>
      <h4 className="text-lg font-normal ">Neurology</h4>
      <h4 className="text-lg font-normal">Services</h4>
    </div>

    {/* Box 6 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-[#6ca59e] mb-4">
        {/* Icon */}
        <img
        src={vector6}
        alt="rated1"
        className="w-full h-full object-cover"
      />
      </div>
      <h4 className="text-lg font-normal ">Pychiatry</h4>
      <h4 className="text-lg font-normal">Services</h4>
    </div>
  </div>
</div>

    </div>
   </Wrapper>
  )
}

export default Services