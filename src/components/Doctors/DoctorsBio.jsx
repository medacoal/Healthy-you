import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import hospital from "../../assets/icons/Frame 1171278930.png";
import simple from "../../assets/icons/Frame 1171278931.png";

const DoctorBio = () => {
  const { id } = useParams();
  const [doctorBio, setDoctorBio] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorBio = async () => {
      try {
        const response = await axios.get(`/doctor/${id}`);
        setDoctorBio(response.data.doctor.bio);
      } catch (err) {
        console.error("Error fetching doctor bio:", err);
        setError("Failed to load doctor's bio.");
      }
    };

    fetchDoctorBio();
  }, [id]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 font-[Axiforma]">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
        {[
          { label: "Doctor Bio", section: "doctorBio" },
          { label: "Experience", section: "experience" },
          { label: "Speciality", section: "speciality" },
          { label: "Availability", section: "availability" },
          { label: "Awards", section: "availability" },
          // { label: "Reviews", section: "reviews" },
        ].map((btn, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(btn.section)}
            className={`${
              index === 0
                ? "bg-[#E8F2F3] text-[#147C84]"
                : "border-[#767680] border-2 text-[#767680]"
            } font-semibold py-1 px-3 rounded-lg text-sm sm:text-base cursor-pointer`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <hr className="border-[#767680] border-0.5 mb-6 sm:mb-8 hidden md:block" />

      {/* Doctor Bio Section */}
      <div id="doctorBio" className="mb-8 sm:mb-10">
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">Doctor's Bio</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-sm sm:text-[18px] font-semibold text-justify">
            {doctorBio || "Loading doctor's bio..."}
          </p>
        )}
      </div>

      {/* Experience Section */}
      <section id="experience">
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">Practice Experience</h1>
        {[ 
          { hospital: "CBU Hospital", location: "Cambridge University Hospital NHS Foundation Trust Cambridge", period: "Dec 2020 - Jan 2022", description: "Wide experience in diagnosing, treating, and preventing mental health disorders." },
          { hospital: "HM Hospital", location: "Hill Medical Hospital, Massachusetts USA", period: "Dec 2020 - Jan 2022", description: "Committed to comprehensive mental health solutions." }
        ].map((exp, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-[#767680] border-2 px-4 sm:px-10 py-6 sm:py-10 rounded-lg mb-6 sm:mb-8">
            <div className="border-[#767680] border-2 px-2 py-2 flex flex-col justify-center items-center w-full sm:w-auto">
              <img src={index % 2 === 0 ? hospital : simple} alt="Hospital" className="w-12 h-12 sm:w-16 sm:h-16" />
              <p className="text-xs sm:text-[14px] font-bold mt-2">{exp.hospital}</p>
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-[20px]">{exp.location}</h3>
              <p className="text-xs sm:text-[14px] font-semibold mt-2">{exp.period}</p>
              <p className="text-xs sm:text-[14px] font-semibold mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Speciality Section */}
      <div id="speciality" className="mb-8 sm:mb-10">
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">Speciality</h1>
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap">
          {[
            "Diagnosis", "Collaboration", "Psychotherapy", "Crisis Intervention", 
            "Treatment Planning", "Clinical Assessments", "Therapeutic Techniques", "Medication Management"
          ].map((speciality, index) => (
            <button key={index} className="border-[#767680] border-2 font-bold text-xs sm:text-[12px] py-2 px-6 rounded-lg whitespace-nowrap">
              {speciality}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-[#767680] border-0.5 mb-6 sm:mb-8" />

      {/* Availability Section */}
      <div id="availability" className="mb-8 sm:mb-10">
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">Availability</h1>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { day: "Every Monday", time: "09:00 - 4:00 PM" },
            { day: "Every Tuesday", time: "09:00 - 4:00 PM" },
            { day: "Every Wednesday", time: "09:00 - 4:00 PM" },
            { day: "Every Thursday", time: "09:00 - 4:00 PM" },
            { day: "Every Friday", time: "09:00 - 1:00 PM" },
            { day: "Every Saturday", time: "09:00 - 1:00 PM" },
          ].map((slot, index) => (
            <button key={index} className="border-[#767680] border-2 font-bold text-xs sm:text-[14px] py-2 rounded-lg flex flex-col items-center gap-1">
              <h2 className="text-sm sm:text-[17px]">{slot.day}</h2>
              <p className="text-xs sm:text-[15px] font-semibold">{slot.time}</p>
            </button>
          ))}
        </div>
      </div>

      <hr className="border-[#767680] border-0.5 mb-6 sm:mb-8" />
    </div>
  );
};

export default DoctorBio;
