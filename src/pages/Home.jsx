import React from 'react';
import Expert from '../components/Home/Expert';
import Feedback from '../components/Home/Feedback';
import Lastest from '../components/Home/Lastest';
import People from '../components/Home/People';
import Wellness from '../components/Home/Wellness';
import Footer from '../components/Home/Footer';


const Home = () => {
  return (
    <div className='container mx-auto'>
     <Expert/>
     <Feedback/>
     <Lastest/>
     <People/>
     <Wellness/>
   <Footer/>
    </div>
  );
};

export default Home;
