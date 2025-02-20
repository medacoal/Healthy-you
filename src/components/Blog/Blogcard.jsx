import React,{useState, useEffect} from 'react';
import Wrapper from '../reasurable/Wrapper';
import { blogCardDb } from '../db';
import { Link } from 'react-router-dom';
import icon21 from "../../assets/icons/Vector (42).png"
import icon22 from "../../assets/icons/Vector (41).png"
import icon9 from "../../assets/icons/Vector (43).png"
import axios from 'axios';
const Blogcard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs/all'); // Adjust API URL
        setBlogs(response.data.blogs); // Assuming API response is { blogs: [...] }
        setLoading(true);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-10">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-2">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="justify-between rounded-2xl hover:border border-[#147C84] p-1 hover:shadow-lg"
          >
            {/* Image - Only the first one is clickable */}
            <div>
              <img src={item.images[0].url} alt="icon" className='w-full' />
            </div>

            {/* Card Content */}
            <div className='pt-2 px-2 cursor-pointer'>
              <div className='flex justify-between font-bold'>
                <div className='text-sm text-[#000000]'>May 1, 2024</div>
                <div className='flex gap-2 pb-3'>
                  <img src={icon21} alt="icon22" className='h-6 w-6 rounded-full border border-[#147C84] p-1' />
                  <img src={icon22} alt="icon22" className='h-6 w-6 rounded-full border border-[#147C84] p-1' />
                  <img src={icon9} alt='icon9' className='h-6 w-6 rounded-full border border-[#147C84] p-1' />
                </div>
              </div>

              <h1 className='text-1xl font-bold text-[#000000] pb-2 font-[Axiforma]'>{item.heading}</h1>
              <p className='text-1xl text-[#00000078] font-[Axiforma] '>{item.description.slice(0, 80)}.......</p>

              {/* Learn More button - Only the first one is clickable */}
             
                <Link to="/healthy-eating">
                  <div className='py-2 gap-1 text-[#147C84] hover:bg-[#147C84] hover:text-white hover:border w-24 text-center rounded-xl text-sm cursor-pointer'>
                    Learn More
                  </div>
                </Link>
              
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Blogcard;
