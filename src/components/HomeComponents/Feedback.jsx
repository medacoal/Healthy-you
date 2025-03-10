import React,{ useState, useEffect } from "react";
import Wrapper from "../reasurable/Wrapper";
import iconleft from '../../assets/icons/back bttn (1).png';
import iconright from '../../assets/icons/back bttn.png';
import john from "../../assets/images/Ellipse 1 (1).png";
import alex from "../../assets/images/Ellipse 2.png";
import emily from "../../assets/images/Ellipse 3 (1).png";
import micheal from "../../assets/images/Ellipse 1.png";
import elijah from  "../../assets/images/Ellipse 4 (3).png";
import david from "../../assets/images/Ellipse 3.png";

const Feedback = () => {
  const testimonials = [
    {
      id: 2,
      text: "i’ve tried several wellness websites, but this one stands out for it’s user friendly interface and excellent customer.",
      name: "Opeyemi Olatimehin",
      image: alex,
    },
    {
      id: 1,
      text: "HealthyYou service is outstanding! I had an appointment and they responded quickly and helped with prescriptions.",
      name: "Anthonia Ruben",
      image: john,
    },
    {
      id: 3,
      text: "Security is my top priority, and I feel safe using this exchange. Their two-factor authentication gives me peace.",
      name: "Udeogu Stella",
      image: emily,
    },
    {
      id: 5,
      text: "I appreciate the transport fee structure. No hidden charges, just straightforward payments.",
      name: "Adeleke Davido",
      image: david,
    },
    {
      id: 4,
      text: "I’ve used many wellness websites, but none compare to this one. It’s intuitive and exceeds my expectations.",
      name: "Joy Samson",
      image: micheal,
    },
    {
      id: 6,
      text: "I’ve tried several wellness websites, but this one stands out for its user-friendly interface and excellent customer service.",
      name: "Joshua Paul",
      image: elijah,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

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
    }
  };

  const handlePrevious = () => {
    if (!isPrevDisabled) {
      setCurrentIndex((prevIndex) => prevIndex - visibleCount);
    }
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + visibleCount);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <Wrapper>
      <div className="text-[#000000] font-[Axiforma] px-2 py-10 container mx-auto">
        <div className="md:text-5xl text-2xl text-center">
          <h1 className="font-semibold">
            Our Patients{" "}
            <span className="font-serif italic font-medium text-[#174949]">
              Feedback
            </span>
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
              className=" hover:cursor-pointer disabled:opacity-50"
            >
              <img src={iconleft} alt="Previous" className="w-12 h-10" />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className=" hover:cursor-pointer disabled:opacity-50"
            >
              <img src={iconright} alt="Next" className="w-12 h-10" />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Feedback;
