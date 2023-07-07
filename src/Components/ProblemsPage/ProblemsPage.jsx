import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./ProblemsPage.css"
import AlertCard from '../Shared/AlertCard';
import ButtonClick from '../Shared/ButtonClick';


const ProblemsPage = () => {
  const [found,setfound] =useState();
  const [submission,setsubmission] =useState("");
  const [show_alert,setshow_alert]=useState();
  const { pid} = useParams() ;
  let alertdata="";

  

  const init=async ()=> {
    const response=await fetch(`http://localhost:3000/problems/${pid}`,{
      method:"GET",
      headers: {"Content-Type":"application/json"}

    })
    const data= await response.json();
    setfound(data.problems);
    //
  }
  useEffect(()=> {init()},[])




 
  const handleSubmit=async (e) => {
    e.preventDefault();
    const response= await fetch("http://localhost:3000/submission",{

    method:"POST",
    headers:{
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token")
    },
    body:JSON.stringify({
      submission:submission,
      problemId:pid
    })

    });
    alertdata= await response.json();
    setshow_alert(alertdata);
  
    

    

  }

  return (
    <div >
      

      {
        show_alert? <AlertCard message={show_alert.output.error.message} handleClick={() =>{setshow_alert(null) }}/>:
       found? (
          <div id="problempage " className='flex justify-around p-4 space-x-10'>
            <div className="ques "> 
              <h1 className=' font-semibold text-2xl '>{found.title}</h1>
              <h5 className=' font-medium text-lg mt-5'>Description</h5>
              <p className='mt-2'> {found.description}</p>
              
            
              <div className='h-0.5 bg-gray-200 mt-5'/>
              <div className='mt-5 block'><div >Input : {found.exampleIn}</div>
              <div>Output : {found.exampleOut}</div>
              </div>
            </div>
            <div className="mx-5">
              <h1>Code Here</h1>
              <form className=' h-screen ' method="post" onSubmit={handleSubmit}   >
                <textarea className= 'h-[70vh] w-[50vw] outline-7 p-4 outline-gray-500 border-2 rounded-xl mt-5' onChange={e => setsubmission(e.target.value)}></textarea>
              <div className='flex'>
              <ButtonClick type="submit" id="test" name={"Test"} selected={true}>TestCode</ButtonClick>
                <ButtonClick type="submit" id="submit" name={"Submit"} selected={true} onclick={handleSubmit}>SubmitCode</ButtonClick></div>  
              </form>
            </div>
          </div>
        ) :
        (<div>The searched Question Doesn't exist</div>)
      }

    </div>
    
  )
}

export default ProblemsPage