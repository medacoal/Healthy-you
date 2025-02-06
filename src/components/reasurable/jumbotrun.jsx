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
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center w-full md:max-w-[43%] mx-auto font-[Axiforma] text-[#FFFFFFF2]">
          <h1 className="text-3xl md:text-4xl font-bold">
            {title}
          </h1>
          <p className="text-lg font-semibold bg-transparent pt-4 md:mt-0">
            {description}
          </p>

          {/* Search Bar */}
          {showSearch && (
            <div className="flex justify-center w-full mt-4">
              <div className="flex w-full max-w-md items-center border border-white bg-white rounded-full py-3 px-5 focus:ring-[#147C84]">
                <input 
                  type="text" 
                  placeholder="Search for doctors..." 
                  className="w-full outline-none text-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="text-gray-500 cursor-pointer" onClick={handleSearch}>
                  <FaSearch size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
