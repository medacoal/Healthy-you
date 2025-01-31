import React from 'react'
const OurValues = () => {
    return (

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-4xl font-bold text-center mb-12">
        Our
        <span className="italic font-[600] text-[#174949] ml-2">Values</span>
      </h1>

  {/* Values Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Box 1 */}
    <div className="border border bg-[#e8f2f3] rounded-2xl p-8 text-center shadow-sm">
      <div className="flex items-center justify-center mx-auto mb-6">
        {/* Icon */}
        <img
        src="/src/assets/Frame 1171278617.png"
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
    <div className="border border bg-[#e8f2f3] rounded-2xl p-8 text-center shadow-sm">
    <div className="flex items-center justify-center mx-auto mb-6">
        {/* Icon */}
        <img
        src="/src/assets/Frame 1171278618.png"
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
    <div className="border border bg-[#e8f2f3] rounded-2xl p-8 text-center shadow-sm">
    <div className="flex items-center justify-center mx-auto mb-6">
        {/* Icon */}
        <img
        src="/src/assets/Frame 1171278618 (1).png"
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

)
}

export default OurValues
