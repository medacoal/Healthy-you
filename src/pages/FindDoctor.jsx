import React from 'react'
import Jumbotron from '../components/reasurable/jumbotrun'
import Footer from '../components/reasurable/Footer'
import Wellness from '../components/HomeComponents/Wellness'
import Doctorcard from '../components/Doctors/Doctorcard';
import FindDoctors from '../components/Doctors/FindDoctors';

const TalkToDoctor = () => {
  return (
    <div className='container mx-auto'>
      <FindDoctors/>
      <Doctorcard/>
      <Wellness/>
      <Footer/>
    </div>
  );
};

export default TalkToDoctor;
