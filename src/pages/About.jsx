import React from 'react'
import HeroAbout from '../components/AboutComponents/HeroAbout';
import WhyChoose from '../components/AboutComponents/WhyChoose';
import Trustedby from "../components/AboutComponents/Trustedby"
import OurValues from '../components/AboutComponents/OurValues';
import OurMission from '../components/AboutComponents/OurMission';
import Wellness from '../components/HomeComponents/Wellness';
import People from '../components/HomeComponents/People';
import Testimonials from '../components/HomeComponents/Feedback';
const About = () => {
  return (
    <div className='lg:mx-auto lg:container pt-16'>
     <HeroAbout/>
     <WhyChoose/>
     <Trustedby/>
     <OurValues/>
    <OurMission/>
     <Testimonials/>
     <People/>
     <Wellness/>
    </div>
  );
};

export default About;
