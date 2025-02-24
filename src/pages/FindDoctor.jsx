import React from 'react'
import Wellness from '../components/HomeComponents/Wellness'
import Doctorcard from '../components/Doctors/Doctorcard';
import FindDoctors from '../components/Doctors/FindDoctors';
import Booking from '../components/Doctors/Booking';

const TalkToDoctor = () => {
  return (
    <div className='container mx-auto pt-16'>
      <FindDoctors/>
      <Doctorcard/>
      <Wellness/>
      {/* <Booking/> */}
    </div>
  );
};

export default TalkToDoctor;
