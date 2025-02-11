import React from 'react';
import right from "../../assets/icons/Vector (45).png"
import left from "../../assets/icons/Vector (46).png"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-6 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" flex flex-row items-center gap-2 disabled:opacity-50 font-bold hover:bg-gray-300 transition-colors"
      >
        <img src=
        {right} alt="" />Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={` ${
            currentPage === page
              ? 'bg-[#0C4C51] rounded-full px-3 py-1 text-white'
              : ' hover:bg-gray-300'
          } transition-colors`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex flex-row items-center gap-2 disabled:opacity-50 font-bold hover:bg-gray-300 transition-colors"
      >
        Next <img src={left} alt="" />
      </button>
    </div>
  );
};

const DoctorsPagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5; // Assuming there are 5 pages of reviews

  return (
    <div className='flex flex-row items-center justify-center '>
      {/* Reviews content goes here */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DoctorsPagination;