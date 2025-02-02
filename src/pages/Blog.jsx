import React from 'react'
import Jumbotron from '../components/reasurable/jumbotrun'
import Wellness from '../components/Home/Wellness'
import Pagination from '../components/Blog/Pagination'
import Blogcard from '../components/Blog/Blogcard'

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

export default Blog