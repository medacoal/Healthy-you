import React from 'react';
import Icon1 from '../../assets/Frame 1171278617.png';
import Icon2 from '../../assets/Frame 1171278618.png';
import Icon3 from '../../assets/Frame 1171278618 (1).png'
import Wrapper from '../reasurable/Wrapper';
const OurValues = () => {
    return (
<Wrapper>
  
<section className="px-2 py-12 font-[Axiforma]">
  <h1 className="text-4xl font-bold text-center mb-12">
        Our
        <span className="italic font-[600] text-[#174949] ml-2">Values</span>
      </h1>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Box 1 */}
    <div className=" bg-[#e8f2f3] rounded-2xl p-8 text-center shadow-sm">
      <div className="flex items-center justify-center mx-auto mb-6">
        {/* Icon */}
        <img
        src={Icon1}
        alt="rated1"
        className="w-auto h-auto object-cover"
      />
      </div>
      <h3 className="text-xl font-semibold text-[#174949] mb-2">
      Compassion
      </h3>
      <p className="text-sm text-gray-600">
      We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment.
      </p>
    </div>

    {/* Box 2 */}
    <div className=" bg-[#e8f2f3] rounded-2xl p-8 text-center shadow-sm">
    <div className="flex items-center justify-center mx-auto mb-6">
        {/* Icon */}
        <img
        src={Icon2}
        alt="rated1"
        className="w-auto h-auto object-cover"
      />
      </div>
      <h3 className="text-xl font-semibold text-[#174949] mb-2">
      Excellence
      </h3>
      <p className="text-sm text-gray-600">
      We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge.
      </p>
    </div>

    {/* Box 3 */}
    <div className=" bg-[#e8f2f3] rounded-2xl p-8 text-center shadow-sm">
    <div className="flex items-center justify-center mx-auto mb-6">
        {/* Icon */}
        <img
        src={Icon3}
        alt="rated1"
        className="w-auto h-auto object-cover"
      />
      </div>
      <h3 className="text-xl font-semibold text-[#174949] mb-2">
      Integrity
      </h3>
      <p className="text-sm text-gray-600">
      We believe in practicing medicine with integrity and honesty. We transparent in our communication and decision-making processes, and we always put 
      </p>
    </div>
  </div>
</section>
</Wrapper>
)
}

export default OurValues
