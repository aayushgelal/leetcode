import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import loremContent from './LoremPosts'
import BlogCard from './BlogCard'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

const HomePage = () => {
  const [loading,setloading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000);
  })
  return (
    <>
 
    <div className='p-5'>
      <h1 className='text-2xl font-semibold '>Blogs</h1>
      {loading?<LoadingScreen /> :
      <div className='md:grid grid-cols-4 gap-4 max-sm:flex flex-col  max-sm:m-4 '>
      {loremContent.map((content,index) => (
      <BlogCard key={index} content={content} />
      ))}
      </div>
      }
    </div>

    </>
  )
}

export default HomePage