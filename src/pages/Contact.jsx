import React from 'react'
import Get from '../components/contact/Get';
import Footer from "../components/reasurable/Footer";
// import Map from '../components/contact/Map';
import Wellness from '../components/HomeComponents/Wellness';
import Jumbotron from "../components/reasurable/jumbotrun"
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  return (
    <div className='pt-16 '>
      <Jumbotron 
        title={<>Contact <em>Us</em></>} 
        description="Have questions or need assistance? Reach out to us anytime. At Healthy You, we’re here to provide support and ensure you get the care you deserve."
      />
      <Get />
      <LocationMap/>
      <Wellness />
    </div>
  );
};

export default Contact;
