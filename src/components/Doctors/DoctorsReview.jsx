import React from "react";
import michael from "../../assets/images/scofield.png";
import man from "../../assets/images/boro.png";
import men from "../../assets/images/badland.png";
import like from "../../assets/icons/like.png";
import star from "../../assets/icons/Frame 1171278906.png";
import Wrapper from "../reasurable/Wrapper";

const DoctorsReview = () => {
  return (
    <Wrapper>
        <div className="px-2 font-[Axiforma]">
        
        <div className="text-[#1E1E1E] font-bold text-xl py-6">
            <h1>Reviews (50)</h1>
        </div>
        {/* Review 1 */}
        <div className="border-gray-400 border-2 px-4 md:px-10 py-5 rounded-lg mb-8">
          <div className="flex flex-col sm:flex-row justify-between ">
            <div className="flex flex-row gap-2">
              <div>
                <img src={michael} alt="Michael" className=""/>
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold">Michael Scofield</h3>
                <div className="flex flex-row gap-2 items-center">
                  <img src={star} alt="Star" className=""/>
                  <p className="text-sm sm:text-base font-bold">5.0 | 2 days ago</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <img src={like} alt="Like" className="w-5 h-5"/>
              <p className="text-sm sm:text-[16px] text-[#147C84]">
                Yes, Recommend for Appointment
              </p>
            </div>
          </div>
          <div className="text-sm md:text-[16px] font-bold pt-6 lg:w-[1137.34px]">
            <p>
              Dr. Naomi Jn, was on time and created a welcoming environment. Active
              Listening I felt heard throughout our discussion, and my concerns were
              acknowledged. Clarity: He clearly explained my diagnosis and treatment
              options, which helped me understand my situation better. Empathy: I
              appreciated Dr. Naomi's understanding and empathy, making it easier to
              share my thoughts.
            </p>
          </div>
        </div>
  
        {/* Review 2 */}
        <div className="border-gray-400 border-2 px-4 md:px-10 py-5 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div>
                <img src={man} alt="Man" className=""/>
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold">Linklin Borno</h3>
                <div className="flex flex-row gap-2 items-center">
                  <img src={star} alt="Star" className=""/>
                  <p className="text-sm sm:text-base font-bold">5.0 | 10 days ago</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <img src={like} alt="Like" className="w-5 h-5"/>
              <p className="text-sm sm:text-[16px] text-[#147C84]">
                Yes, Recommend for Appointment
              </p>
            </div>
          </div>
          <div className="text-sm md:text-[16px] font-bold pt-6 lg:w-[1137.34px]">
            <p>
              From the very first session, I felt welcomed and comfortable. The
              environment was warm and inviting, which made it easier for me to open
              up. Dr Naomi, demonstrated excellent listening skills. I always felt
              that my thoughts and feelings were genuinely heard and valued.
            </p>
          </div>
        </div>
  
        {/* Review 3 */}
        <div className="border-gray-400 border-2 px-4 md:px-10 py-5 rounded-lg mb-8">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div>
                <img src={men} alt="Men" className=""/>
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold ">Sunny Badland</h3>
                <div className="flex flex-row gap-2 items-center">
                  <img src={star} alt="Star" className=""/>
                  <p className="text-sm sm:text-base font-bold">5.0 | 15 days ago</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <img src={like} alt="Like" className="w-5 h-5"/>
              <p className="text-sm sm:text-[16px] text-[#147C84]">
                Yes, Recommend for Appointment
              </p>
            </div>
          </div>
          <div className="text-sm md:text-[16px] font-bold pt-6 lg:w-[1137.34px]">
            <p>
              I think we might benefit from a more structured approach at times,
              perhaps with set goals or topics for each session. This could help us
              stay focused and maximize the time we have.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DoctorsReview;