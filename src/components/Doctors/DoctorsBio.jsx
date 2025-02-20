import React from "react";
import hospital from "../../assets/icons/Frame 1171278930.png";
import simple from "../../assets/icons/Frame 1171278931.png";

const DoctorBio = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 font-[Axiforma]">
      {/* Buttons Section */}
      <div className="flex-1 md:flex-row space-x-5 space-y-2 justify-between md:justify-start sm:gap-4 mb-6 sm:mb-8">
        <button className="bg-[#E8F2F3] text-[#147C84] font-semibold py-1 px-3 rounded-lg text-sm sm:text-base">
          Doctor Bio
        </button>
        <button className="border-[#767680] border-2 text-[#767680] font-semibold py-1 px-3 rounded-lg text-sm sm:text-base cursor-pointer">
          Experience
        </button>
        <button className="border-[#767680] border-2 text-[#767680] font-semibold py-1 px-3 rounded-lg text-sm sm:text-base cursor-pointer">
          Speciality
        </button>
        <button className="border-[#767680] border-2 text-[#767680] font-semibold py-1 px-3 rounded-lg text-sm sm:text-base cursor-pointer">
          Availability
        </button>
        <button className="border-[#767680] border-2 text-[#767680] font-semibold py-1 px-3 rounded-lg text-sm sm:text-base cursor-pointer">
          Awards
        </button>
        <button className="border-[#767680] border-2 text-[#767680] font-semibold py-1 px-3 rounded-lg text-sm sm:text-base cursor-pointer">
          Reviews
        </button>
      </div>

      <hr className="border-[#767680] border-0.5 mb-6 sm:mb-8 hidden md:block"/>

      {/* Doctor Bio Section */}
      <div className="mb-8 sm:mb-10">
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">
          Doctors Bio
        </h1>
        <p className="text-sm sm:text-[18px] font-semibold text-justify">
          Dr. Naomi Jr. is a highly respected psychiatrist with over 15 years of
          experience in the field. She completed her medical degree at Harvard
          Medical School, followed by a residency at the renowned Massachusetts
          General Hospital, where she specialized in adult psychiatry. In
          addition to her medical training, Dr. Naomi holds a PhD in Psychology
          from Stanford University, focusing on the impact of trauma on mental
          health.
        </p>
      </div>

      {/* Practice Experience Section */}
     <section id="expericence">
     <div>
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">
          Practice Experience
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-[#767680] border-2 px-4 sm:px-10 py-6 sm:py-10 rounded-lg mb-6 sm:mb-8">
          <div className="border-[#767680] border-2 px-2 py-2 flex flex-col justify-center items-center w-full sm:w-auto">
            <img
              src={hospital}
              alt="Hospital"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p className="text-xs sm:text-[14px] font-bold mt-2">
              CBU Hospital
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-[20px]">
              Cambridge University Hospital NHS Foundation Trust Cambridge
            </h3>
            <p className="text-xs sm:text-[14px] font-semibold mt-2">
              Dec 2020 - Jan 2022. 1 Years 1 Month
            </p>
            <p className="text-xs sm:text-[14px] font-semibold mt-2">
              Wide Experience in diagnose, treat, and prevent mental health
              disorders. Provide supportive therapy, effective treatment,
              Psychological Well-Being.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-[#767680] border-2 px-4 sm:px-10 py-6 sm:py-10 rounded-lg mb-8 sm:mb-10">
          <div className="border-[#767680] border-2 px-2 py-2 flex flex-col justify-center items-center w-full sm:w-auto">
            <img
              src={simple}
              alt="Hospital"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p className="text-xs sm:text-[14px] font-bold mt-2">HM Hospital</p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-[20px]">
              Hill Medical Hospital, Massachusetts USA
            </h3>
            <p className="text-xs sm:text-[14px] font-semibold mt-2">
              Dec 2020 - Jan 2022. 1 Years 1 Month
            </p>
            <p className="text-xs sm:text-[14px] font-semibold mt-2">
              Committed to Comprehensive Mental Health Solutions: Expertise in
              Diagnosis, Treatment, and Preventive Care to Enhance Quality of
              Life.
            </p>
          </div>
        </div>
      </div>
     </section>

      {/* Speciality Section */}
      <div className="mb-8 sm:mb-10">
        <h1 className="font-semibold text-lg sm:text-[14px] mb-4">
          Speciality
        </h1>
        <div className="gird grid-cols-2 space-y-4 space-x-1 lg:space-x-7  md:flex-row  md:justify-start lg:justify-between">
          {[
            "Diagnosis",
            "Collaboration",
            "Psychotherapy",
            "Crisis Intervention",
            "Treatment Planning",
            "Clinical Assessments",
            "Therapeutic Techniques",
            "Medication Management",
          ].map((speciality, index) => (
            <button
              key={index}
              className="border-[#767680] border-2 font-bold text-xs sm:text-[12px] py-2 px-6 rounded-lg whitespace-nowrap"
            >
              {speciality}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-[#767680] border-0.5 mb-6 sm:mb-8" />

      {/* Availability Section */}
      <div className="mb-8 sm:mb-10">
        <h1 className="font-semibold text-lg sm:text-[24px] mb-4">
          Availability
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { day: "Every Monday", time: "09:00 - 4:00 PM" },
            { day: "Every Tuesday", time: "09:00 - 4:00 PM" },
            { day: "Every Wednesday", time: "09:00 - 4:00 PM" },
            { day: "Every Thursday", time: "09:00 - 4:00 PM" },
            { day: "Every Friday", time: "09:00 - 1:00 PM" },
            { day: "Every Saturday", time: "09:00 - 1:00 PM" },
          ].map((availability, index) => (
            <button
              key={index}
              className="border-[#767680] border-2 font-bold text-xs sm:text-[14px] py-2 rounded-lg flex flex-col items-center gap-1"
            >
              <h2 className="text-sm sm:text-[17px]">{availability.day}</h2>
              <p className="text-xs sm:text-[15px] font-semibold">
                {availability.time}
              </p>
            </button>
          ))}
        </div>
      </div>

      <hr className="border-[#767680] border-0.5 mb-6 sm:mb-8" />
    </div>
  );
};

export default DoctorBio;