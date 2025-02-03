import React from "react";

const Blog = () => {
  return (
    <div className=''>
       <Jumbotron 
        title={<>Blog</>} 
        description="Welcome to Healthy You, a blog dedicated to helping you embrace a lifestyle filled with wellness and vitality. Our mission is to empower you with knowledge and inspiration."
      />
      <Blogcard/>
      <Pagination/>
      <Wellness/>
    
    </div>
  )
}
 

export default Blog;
