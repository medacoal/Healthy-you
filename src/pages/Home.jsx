import React from 'react';
import Expert from '../components/Expert';
import Trusted from '../components/Homecomponents/Trusted';
import Meet from '../components/HomeComponents/Meet'
import Services from '../components/HomeComponents/Services';
import Consult from '../components/HomeComponents/Consult';
const Home = () => {
  return (
    <div className='container mx-auto'>
     <Expert/>
    <Trusted/>
    <Meet/>
    <Services/>
    <Consult/>
    </div>
  );
};

export default Home;
