import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

import "./AllProblems.css"
import ProblemsPage from '../ProblemsPage/ProblemsPage'
import ProblemTable from './ProblemTable'
import ButtonClick from '../Shared/ButtonClick'
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowRight } from 'react-icons/fa'

const AllProblemsPage = () => {
  const [problems,setproblems] =useState([]);
  const [selected,setselected]= useState(1);
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const start_index=(currentPage-1)*itemsPerPage;
  const end_index=(currentPage)* itemsPerPage;


  const init =async () =>  {
    const response=await fetch("http://localhost:3000/problems",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },

    })
    const data=await response.json()
  console.log(data) ;
  setproblems(data.problems);

}
useEffect(()=> {init()},[])
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-wrap text-mdjustify-start'>
      <ButtonClick name="All Topics" onclick={() => {
        setselected(1)
      }} selected={selected==1?true:false}/>
      <ButtonClick name="Algorithms" onclick={() => {setselected(2)}} selected={selected==2?true:false}/>
      <ButtonClick name="Database" onclick={() => {setselected(3)}} selected={selected==3?true:false}/>
      <ButtonClick name="Javascript" onclick={() => {setselected(4)}} selected={selected==4?true:false}/>
     



      </div>
      <div className='lg:text-lg  flex-0.9 w-screen p-2'> 
    
      <ProblemTable problems={problems.slice(start_index,end_index)}/>
      </div>
      <div className='flex justify-center text-gray-700 items-center space-x-2 mt-2'><FaArrowCircleLeft className='mx-2' onClick={() => setCurrentPage(currentPage-1)}></FaArrowCircleLeft>Page: {currentPage} <FaArrowCircleRight className='mx-2' onClick={() => setCurrentPage(currentPage+1)}></FaArrowCircleRight></div>
    </div>
  )
}

export default AllProblemsPage