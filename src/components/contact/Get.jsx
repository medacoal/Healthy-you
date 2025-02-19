import React, { useState } from 'react';
import Wrapper from '../reasurable/Wrapper';
import phoneIcon from "../../assets/icons/call-incoming.png";
import emailIcon from "../../assets/icons/directbox-default-2.png";
import igIcon from "../../assets/icons/instagram (1).png";
import addressIcon from "../../assets/icons/location.png";
import line from "../../assets/icons/Line 8.png";
import twitterIcon from "../../assets/icons/Vector (38).png";
import linkedinIcon from "../../assets/icons/Vector (40).png";
import companyIcon from "../../assets/icons/Frame 1171275662.png";
import facebookIcon from "../../assets/icons/Vector (39).png";
import axios from 'axios';

const Get = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPhone,] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('/contact', {
          fullName: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          message: formData.message,
        });
        console.log("Response:", response.data);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <Wrapper>
      <div className='grid md:grid-cols-2 gap-8 pt-16 px-2 container mx-auto'>
        <div>
          <div>
          <h1 className='md:text-[52px] text-3xl pb-3 font-semibold text-[#157c86]'>
            Get In Touch
          </h1>
          <h2 className='lg:w-[400px] w-full'>Fill up the form and our team will get back to you within 24 hours.</h2>
          </div>

          <div className='flex gap-10 pt-3 pb-5'>
          <div className='font-[Axiforma] flex gap-2'>
            <div className='bg-[#0E575C] w-10 h-10 rounded-lg mt-2'>
            <img src={phoneIcon} alt='' className='p-2'/>
            </div>
            <div >
              <h1 className=' text-[#0E575C] text-lg font-bold'>Phone</h1>
              <h2 className='text-[#858C90] text-sm'>(+267) 5609844</h2>
            </div>
          </div>
          <div className='font-[Axiforma] flex gap-2'>
            <div className='bg-[#0E575C] w-10 h-10 rounded-lg mt-2'>
            <img src={emailIcon} alt='' className='p-2'/>
            </div>
            <div >
              <h1 className=' text-[#0E575C] text-lg font-bold'>Email</h1>
              <h2 className='text-[#858C90] text-sm'>mail@healthyyou.com</h2>
            </div>
          </div>
        </div>

        <div className='flex gap-10 '>
          <div className='font-[Axiforma] flex gap-2'>
            <div className='bg-[#0E575C] w-10 h-10 rounded-lg mt-2'>
            <img src={igIcon} alt='' className='p-2'/>
            </div>
            <div >
              <h1 className=' text-[#0E575C] text-lg font-bold'>Instagram</h1>
              <h2 className='text-[#858C90] text-sm'>Healthyyou.com</h2>
            </div>
          </div>
          <div className='font-[Axiforma] flex gap-2'>
            <div className='bg-[#0E575C] w-10 h-10 rounded-lg mt-2'>
            <img src={addressIcon} alt='' className='p-2'/>
            </div>
            <div >
              <h1 className=' text-[#0E575C] text-lg font-bold'>Address</h1>
              <h2 className='text-[#858C90] text-sm'>Califonia, cass</h2>
            </div>
          </div>
        </div>
      
        <div className='py-5 w-[350px] '>
            <img src={line} alt=''/>
          </div>
          <div className='flex gap-2 items-center '>
            <img src={twitterIcon} alt='' className='cursor-pointer'/>
            <img src={companyIcon} alt='' className='cursor-pointer'/>
            <img src={linkedinIcon} alt='' className='cursor-pointer'/>
            <img src={facebookIcon} alt='' className='cursor-pointer'/>
          </div>
       </div>
        
        <form onSubmit={handleSubmit} className='bg-[#E8F2F3] md:p-5 p-3 lg:w-[600px] rounded-md text-[#0E575C]'>
          <div className='flex justify-between pb-3 gap-2 '>
            <div>
              <label>Full Name</label> 
              <input type='text' name='name' value={formData.name} onChange={handleChange} className='w-full bg-white p-2 rounded text-[#2632388F]' placeholder='Enter your name' />
              {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
            </div>
            <div>
              <label>Email</label>
              <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full bg-white p-2 text-[#2632388F] rounded' placeholder='Enter your email' />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <div className='flex  bg-white w-full items-center p-2 text-[#2632388F] rounded'>
              <input type={showPhone ? 'text' : 'password'} name='phone' value={formData.phone} onChange={handleChange} className='w-full outline-none' placeholder='Enter your Phone number' />
            </div>
            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
          </div>
          <div>
            <label>Message</label>
            <textarea name='message' value={formData.message} onChange={handleChange} className='w-full bg-white text-[#2632388F] p-2 rounded max-h-24' placeholder='Type your message'></textarea>
            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
          </div>
          <button type='submit' className='bg-[#147d84dc] hover:bg-[#147C84] border cursor-pointer rounded-md mt-4 w-full py-2 text-[#FFFFFF]'>Submit</button>
          {submitted && <p className='text-green-500 text-sm mt-2'>Form submitted successfully!</p>}
        </form>
      </div>
    </Wrapper>
  );
};

export default Get;
