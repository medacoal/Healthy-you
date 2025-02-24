import React, { useState } from 'react';
import Jumbotron from '../../components/reasurable/jumbotrun';

const FindDoctors = () => {
  return (
    <div>
      <Jumbotron
        title={<>Find <em>Doctors</em></>} 
        description="Welcome to Healthy You, a blog dedicated to helping you embrace a lifestyle filled with wellness and vitality."
        showSearch={false}  // Show search bar on this page
      />
    </div>
  );
}

export default FindDoctors;
