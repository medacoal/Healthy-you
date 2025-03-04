import React from 'react'

const Info = () => {
  return (
    <div className='bg-white p-6 rounded-lg md:w-[45%] flex flex-col space-y-9'>
        <div><h1 className='text-3xl font-semibold'>Booking Info</h1></div>
        <div>
            <h1 className='font-semibold ' >Date & Time</h1>
            <p className='text-[#5F5F5F]'> 10:00 - 11:00 AM, 15 February 2025</p>
        </div>
        <div>
            <h2 className='font-semibold ' >Appointment Type</h2>
            <p className='text-[#5F5F5F]'>Video</p>
        </div>
        <div>
            <h2 className='font-semibold '>Payment Info</h2>
            <div className='flex flex-row justify-between'>
                <p className='text-[#5F5F5F]'>Booking fee</p>
                <p className='font-semibold '>$2000</p>
            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <h2 className='font-semibold text-[20px]'>Total</h2>
            <h2 className='font-semibold  text-[20px]'>$2000</h2>
        </div>
    </div>

  )
}

export default Info