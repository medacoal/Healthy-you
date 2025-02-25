import React from 'react'
import Jumbotron from "../../components/reasurable/jumbotrun"
import DoctorDetails from '../../components/Doctors/DoctorDetail'
import DoctorBio from "../../components/Doctors/DoctorsBio"
import DoctorsAward from "../../components/Doctors/DoctorsAward"
// import DoctorsReview from '../../components/Doctors/DoctorsReview'
import DoctorsPagination from "../../components/Doctors/DoctorsPagination"
import Wellness from '../HomeComponents/Wellness'

const DoctorProfile = () => {
  return (
    <div className='container mx-auto'>
        <Jumbotron 
        title={<><h1>Doctors Profile</h1></>} 
        description={<><p className='font-light'>Home/ Find Doctor/ <b className='font-semibold'>Doctors Profile</b></p></>}
      />
       <DoctorDetails/>
      <DoctorBio />
      <DoctorsAward />
      {/* <DoctorsReview />  */}
      <DoctorsPagination />
      <Wellness/>
    </div>
  )
}

export default DoctorProfile