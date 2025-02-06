import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import line from "../../assets/icons/Lines.png";

const Jumbotron = ({ title = "Default Title", description = "This is Default Description", showSearch = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search term."); 
      return;
    }
    console.log("Searching for:", searchQuery);
    // Add logic to filter doctor data or navigate to a results page.
  };

  return (
    <div className="h-[300px] bg-[#0E575C] md:bg-cover md:bg-no-repeat" style={{ backgroundImage: `url(${line})` }}>
      {/* <Wrapper className=""> */}
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-center w-full md:max-w-[43%] mx-auto font-[Axiforma] text-[#FFFFFFF2]">
            <h1 className="text-3xl md:text-4xl font-bold">
              {title}
            </h1>
            <p className="text-lg  font-semibold bg-transparent pt-4 md:mt-0">
              {description}
            </p>
          </div>
        </div>
      </div>
  );
};

export default Jumbotron;
