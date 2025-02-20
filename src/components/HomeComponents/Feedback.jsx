import React,{ useState, useEffect } from "react";
import Wrapper from "../reasurable/Wrapper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import john from "../../assets/images/Ellipse 1 (1).png";
import alex from "../../assets/images/Ellipse 2.png";
import emily from "../../assets/images/Ellipse 3 (1).png";
import micheal from "../../assets/images/Ellipse 1.png";
import elijah from  "../../assets/images/Ellipse 4 (3).png"
import david from "../../assets/images/Ellipse 3.png";

const Feedback = () => {
  const testimonials = [
    
    {
      id: 2,
      text: "i’ve tried several wellness websites, but this one stands out for it’s user friendly interface and excerllent customer.",
      name: "Opeyemi Olatimehin",
      image: alex,
    },
    {
        id: 1,
        text: "HealthyYou service is outstanding! I had an appointment and they responded quickly and help with prescriptions.",
        name: "Anthonia Ruben",
        image: john,
      },
    {
      id: 3,
      text: "Security is my top, and I feel safe using this exchange. Their two-factor authentication gives me peace.",
      name: "Udeogu Stella.",
      image: emily,
    },
   
    {
      id: 5,
      text: "I appreciate the transport fee structure. No hidden charges, just straightforwardpayments.",
      name: "Adeleke Davido",
      image: david,
    },
    {
        id: 4,
        text: "I’ve used many wellness websites, but none compare to this one. It’s intuitive exceeds my expectations.",
        name: "Joy Samson",
        image: micheal,
      },
    {
      id: 6,
      text: "i’ve tried several wellness websites, but this one stands out for it’s user friendly interface and excerllent customer.",
      name: "Joshua Paul",
      image: elijah,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [clickedButton, setClickedButton] = useState(""); // Track the last clicked button

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    const totalTestimonials = testimonials.length;
    setIsPrevDisabled(currentIndex === 0);
    setIsNextDisabled(currentIndex + visibleCount >= totalTestimonials);
  }, [currentIndex, visibleCount, testimonials.length]);

  const handleNext = () => {
    if (!isNextDisabled) {
      setCurrentIndex((prevIndex) => prevIndex + visibleCount);
      setClickedButton("next");
    }
  };

  const handlePrevious = () => {
    if (!isPrevDisabled) {
      setCurrentIndex((prevIndex) => prevIndex - visibleCount);
      setClickedButton("previous");
    }
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(
      currentIndex,
      currentIndex + visibleCount
    );
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <Wrapper>
      <div className="text-[#000000] font-[Axiforma]  px-2 container mx-auto py-10">
        <div className=" md:text-5xl text-2xl  text-center md:text-start">
          <h1 className="font-semibold">
            Our Patients
            <span className="font-serif italic font-medium text-[#174949]"> Feedback</span>
          </h1>
        </div>

        <div className="relative pt-24">
          <div className="flex justify-center items-center">
            {/* Cards */}
            <div
              className={`grid ${
                visibleCount === 3 ? "lg:grid-cols-3" : "grid-cols-1"
              } gap-10`}
            >
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="rounded-2xl bg-[#E8F2F3] flex flex-col justify-center items-center relative p-8"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full absolute -top-12"
                  />
                  <div className="text-center mt-12">
                    <p className="text-lg">"{testimonial.text}"</p>
                    <h1 className="pt-2 text-lg font-bold">{testimonial.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex justify-center items-center gap-8 pt-5">
            <button
              onClick={handlePrevious}
              disabled={isPrevDisabled}
              className="border rounded-full p-4 bg-gray-300 hover:cursor-pointer"
            >
              <FaArrowLeft
                className={`text-2xl ${
                  clickedButton === "previous" ? "text-white" : "text-black"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="border rounded-full p-4 bg-gray-300 hover:cursor-pointer"
            >
              <FaArrowRight
                className={`text-2xl ${
                  clickedButton === "next" ? "text-white" : "text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Feedback;
