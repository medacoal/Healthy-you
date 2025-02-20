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
  };

  return (
    <div className="h-[300px] bg-[#0E575C] md:bg-cover md:bg-no-repeat relative" style={{ backgroundImage: `url(${line})` }}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center w-full md:max-w-[43%] mx-auto font-[Axiforma] text-[#FFFFFFF2]">
          <h1 className="text-3xl md:text-4xl font-bold">
            {title}
          </h1>
          <p className="text-lg font-semibold bg-transparent pt-4 md:mt-0">
            {description}
          </p>

          {showSearch && (
            <div className="mt-6 flex items-center bg-white rounded-full text-center px-4 py-2 w-[350px] md:max-w-[60%] mx-auto">
              <input
                type="text"
                className="flex-grow  outline-none text-gray-700"
                placeholder="Search Doctor"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaSearch size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
