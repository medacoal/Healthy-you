import React, { useState, useEffect } from 'react';
import AwardImage1 from "../../assets/icons/award.png";
import right from "../../assets/icons/Vector (48).png";
import left from "../../assets/icons/Vector (49).png";
import Wrapper from '../reasurable/Wrapper';

const DoctorsAwards = () => {
  const awards = [
    { title: "American Psychiatric Association (APA) Awards 2021", image: AwardImage1 },
    { title: "National Alliance on Mental Illness (NAM) Awards 2021", image: AwardImage1 },
    { title: "Academy of Child and Adolescent Psychiatry Awards", image: AwardImage1 },
    { title: "Humanitarian Awards psychiatrist awards for her efforts in humanitarian work", image: AwardImage1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 4);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextAward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length);
  };

  // Adjust the number of visible awards dynamically
  const visibleAwards = [];
  for (let i = 0; i < itemsToShow; i++) {
    const index = (currentIndex + i) % awards.length;
    visibleAwards.push(awards[index]);
  }

  return (
    <Wrapper>
      <div className="px-2 py-6 font-[Axiforma]">
        {/* Header and Navigation Buttons */}
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Awards</h1>
          <div className="flex gap-2">
            <button
              onClick={prevAward}
              className="bg-[#D9F0EB] hover:bg-gray-400 font-bold py-2 px-4 rounded-lg"
            >
              <img src={right} alt="Previous" />
            </button>
            <button
              onClick={nextAward}
              className="bg-[#D9F0EB] hover:bg-gray-400 font-bold py-2 px-4 rounded-lg"
            >
              <img src={left} alt="Next" />
            </button>
          </div>
        </div>

        {/* Awards Display */}
        <div className={`grid gap-4 ${itemsToShow === 1 ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {visibleAwards.map((award, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-5 text-center w-full shadow-md">
              <img src={award.image} alt={award.title} className="mx-auto mb-4 rounded-full w-14 h-14 object-cover" />
              <h2 className="text-lg font-semibold text-gray-800">{award.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DoctorsAwards;
