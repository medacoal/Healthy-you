import React, { useState } from 'react';
import Wrapper from '../reasurable/Wrapper';
import up from '../../assets/icons/Vector 190.png';

const People = () => {
  // State to manage the visibility of each question
  const [openStates, setOpenStates] = useState([]);

  // Function to toggle the visibility of a specific question
  const handleToggle = (index) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index]; // Toggle the specific index
      return newStates;
    });
  };

  const questions = [
    {
      question: 'What services does Healthy You offer?',
      answer:
        'Healthy You typically offers a range of health and wellness services aimed at improving overall well-being and promoting awareness about health matters. While the specific services can vary by location or program.',
    },
    {
      question: 'How do I schedule an appointment with Healthy You?',
      answer:
        'To schedule an appointment with Healthy You, you can generally follow these steps: Visit the Website, Select a Doctor, Book online, Contact Directly, Email Inquiry, and In-person visit.',
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'Healthy You accepts insurance depending on the specific location and type of services offered. Many health and wellness programs do accept various insurance plans.',
    },
    {
      question: 'What should I bring to my appointment?',
      answer:
        'When preparing for your appointment with Healthy You, consider bringing the following items: Insurance Card, Identification, Medical History, Questions or Concerns, and a Credit Card.',
    },
  ];

  return (
    <Wrapper>
      <div className="py-10 px-2">
        {/* Header Section */}
        <div className="font-Axiforma md:text-5xl text-4xl pb-8 text-center">
          <h1 className="font-semibold">
            What People{' '}
            <span className="font-serif italic text-[#5a8385] font-medium">
              Usually Ask
            </span>
          </h1>
        </div>

        {/* Questions Section */}
        <div className="text-[#000000] md:w-[650px] mx-auto">
          {questions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border py-3 px-3 flex justify-between items-start mb-4"
            >
              {/* Question and Answer */}
              <div>
                <h1 className="font-Inter font-medium text-xl">
                  {item.question}
                </h1>
                {openStates[index] && (
                  <p className="text-sm pt-4 pb-2">{item.answer}</p>
                )}
              </div>

              {/* Toggle Icon */}
              <img
                src={up}
                alt="Toggle"
                className={`rounded-full border p-2 h-8 hover:cursor-pointer ${
                  openStates[index] ? 'rotate-0' : 'rotate-180'
                } transition-transform`}
                onClick={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default People;
