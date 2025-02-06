import React from 'react';
import Jumbotron from '../components/reasurable/jumbotrun';
import Footer from '../components/reasurable/Footer';
import Wellness from '../components/HomeComponents/Wellness';
import Pagination from '../components/Blog/Pagination';
import Blogcard from '../components/Blog/Blogcard';

const Blog = () => {
  return (
    <div className='container mx-auto'>
      <Jumbotron 
        title={<>Blog</>} 
        description="Welcome to Healthy You, a blog dedicated to helping you embrace a lifestyle filled with wellness and vitality."
      />
      <Blogcard />
      <Pagination />
      <Wellness />
      <Footer />
    </div>
  );
};

export default Blog;
