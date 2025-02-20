import React from 'react'
import Expert from '../components/Expert'
import Consult from '../components/HomeComponents/Consult';
import Services from '../components/HomeComponents/Services';
import Trusted from '../components/HomeComponents/Trusted';
import Meet from '../components/HomeComponents/Meet';
import Wellness from '../components/HomeComponents/Wellness'
import People from '../components/HomeComponents/People'
import Lastest from '../components/HomeComponents/Lastest'
import Feedback from '../components/HomeComponents/Feedback';

const Home = () => {
  return (
    <div className='container mx-auto space-y-20'>
     <Expert/>
    <Trusted/>
    <Meet/>
    <Services/>
    <Consult/>
    <Feedback/>
    <Lastest/>
    <People/>
    <Wellness/>
    
    </div>
  );
};

export default Home;
