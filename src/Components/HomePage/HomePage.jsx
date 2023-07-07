import React from 'react'
import "./HomePage.css"
import loremContent from './LoremPosts'
import BlogCard from './BlogCard'

const HomePage = () => {
  return (
    <div className='p-10'>
      <h1 className='text-2xl mb-5 font-semibold text-center'>Blogs</h1>

      <div className='grid grid-cols-4 gap-4'>
      {loremContent.map((content,index) => (
      <BlogCard key={index} content={content} />
      ))}
      </div>
      
    </div>
  )
}

export default HomePage