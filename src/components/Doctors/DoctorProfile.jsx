import React from 'react';
import { Link } from "react-router-dom";
import Jumbotron from "../../components/reasurable/jumbotrun";
import DoctorDetails from '../../components/Doctors/DoctorDetail';
import DoctorBio from "../../components/Doctors/DoctorsBio";
import DoctorsAward from "../../components/Doctors/DoctorsAward";
// import DoctorsReview from '../../components/Doctors/DoctorsReview';
import DoctorsPagination from "../../components/Doctors/DoctorsPagination";
import Wellness from '../HomeComponents/Wellness';

const DoctorProfile = () => {
  return (
    <div className=''>
    <div className='mt-12'>
    <Jumbotron 
        title={<><h1>Doctors Profile</h1></>} 
        description={(
          <p className='font-light '>
            <Link to="/" className="text-white hover:">Home</Link> / 
            <Link to="/finddoctor" className="text-white hover:"> Find Doctor</Link> / 
            <b className='font-semibold'>Doctors Profile</b>
          </p>
        )}
      />
    </div>
      
      {/* Other components */}
      <DoctorDetails />
      <DoctorBio />
      <DoctorsAward />
      {/* <DoctorsReview /> */}
      <DoctorsPagination />
      <Wellness />
    </div>
  );
};

export default DoctorProfile;
