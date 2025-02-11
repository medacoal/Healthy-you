import React from 'react';
import { useParams } from 'react-router-dom';
import { DoctorcardDb } from '../db';

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = DoctorcardDb.find(doc => doc._id === parseInt(id));

  if (!doctor) return <h1 className="text-center text-red-500">Doctor Not Found</h1>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <img src={doctor.image} alt={doctor.name} className="w-full rounded-lg"/>
      <h1 className="text-3xl font-bold text-[#147C84] mt-4">{doctor.name}</h1>
      <h2 className="text-xl text-gray-700">{doctor.sub}</h2>
      <p className="mt-2 text-gray-500">{doctor.description}</p>
    </div>
  );
};

export default DoctorDetail;
