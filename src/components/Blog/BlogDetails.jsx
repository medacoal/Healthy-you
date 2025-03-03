import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Get blog ID from URL
import axios from "axios"; // For API requests
import facebook from "../../assets/icons/Vector (42).png";
import linked from "../../assets/icons/Vector (41).png";
import twitter from "../../assets/icons/Vector (43).png";
import pic from "../../assets/images/stainless.png"; // Author image
import Wellness from "../../components/HomeComponents/Wellness";
import Related from "./Related";
import { useNavigate, Link } from "react-router-dom";



const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null); // Store single blog
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true); // Show loading when switching blog
      setError(null); // Reset error state

      try {
        const response = await axios.get(`/blogs/${id}`); // Fetch single blog by ID
        setBlog(response.data.blog); // Assuming API returns { blog: {...} }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // Re-run when `id` changes

  if (loading) {
    return <p className="text-center text-lg py-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (!blog) {
    return <p className="text-center text-lg text-red-500">Blog not found!</p>;
  }

 
  return (
    <div className="container mx-auto pt-16">
      <div className="px-5 md:px-10 font-[Axiforma]">
        <div className="py-10">
        <p className="text-gray-500 text-sm md:text-lg lg:text-2xl mb-10 font-semibold">


  <span 
    className="cursor-pointer text-[#147C84] hover:underline"
    onClick={() => navigate("/")}
  >
    Home
  </span> 
  /  
  <span 
    className="cursor-pointer text-[#147C84] hover:underline"
    onClick={() => navigate(-1)}
  >
    Blog
  </span> 
  / {blog.title}
</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-20 text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Categories (Static) */}
          {/* <div className="flex flex-col sm:flex-row justify-between mb-3">
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 cursor-pointer">
              {["Emergency", "Cardiology", "Pediatric", "Others"].map(
                (category) => (
                  <span
                    key={category}
                    className="border border-[#147C84] text-[#147C84] text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 font-semibold rounded-lg"
                  >
                    {category}
                  </span>
                )
              )}
            </div> */}
            {/* <div className="flex gap-2 mb-4">
              <p className="font-bold text-sm sm:text-base md:text-lg mt-1">
                Share:
              </p>
              <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-[#147C84]">
                <img src={linked} alt="LinkedIn" />
              </button>
              <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-[#147C84]">
                <img src={facebook} alt="Facebook" />
              </button>
              <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-[#147C84]">
                <img src={twitter} alt="Twitter" />
              </button>
            </div> */}
          {/* </div> */}

          {/* Blog Image */}
          <div className="mb-5">
            {/* Ensure each blog shows its own image */}
            {blog.images && blog.images[0] && (
              <img
                src={blog.images[0].url} // Correct image URL field
                alt={blog.title}
                className="w-full lg:h-[600px]"
              />
            )}
          </div>

          {/* Blog Content */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold">
              {blog.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px]">
              {blog.description}
            </p>
          </div>
        </div>

        {/* Author Bio (Static) */}
        <div className="flex flex-col sm:flex-row w-full mt-14 mx-auto border-t border-b border-gray-400 py-10">
          <div className="flex-2">
            <img src={pic} alt="Author" className="mx-auto rounded-full" />
          </div>
          <div className="flex-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold">
              Author Bio
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-400">
              Augustine Dabby is a freelance writer and content strategist with
              a passion in product design. With over 5 years of experience in
              the industry, she holds a bachelor's degree in English from the
              University of California. Follow her on Twitter @augustinejoy for
              the latest updates on her work.
            </p>
          </div>
        </div>
      </div>

    <div className="mt-3">
    <Related />
    </div>
      <Wellness />
    </div>
  );
};

export default BlogDetails;
