import React from 'react'
import Wellness from '../components/HomeComponents/Wellness'
import Doctorcard from '../components/Doctors/Doctorcard';
import FindDoctors from '../components/Doctors/FindDoctors';

const TalkToDoctor = () => {
  return (
    <div className='pt-16'>
      <FindDoctors/>
      <Doctorcard/>
      <Wellness/>
    </div>
  );
};

export default TalkToDoctor;
