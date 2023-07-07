import React, { useEffect, useState } from 'react'


export default function ({content}) {
  const[animationDuration,setAnimationDuration]=useState(0);


  useEffect(() => {
    // Simulate loading delay
   
    // Generate a random duration between 1 and 3 seconds
    const randomDuration = Math.floor(Math.random() * 2000) + 1000;
    setAnimationDuration(randomDuration);
   


  }, []);


 
    let cardstyle={animationDuration:`${animationDuration/1000}s`};




  console.log(cardstyle)
  return (
    <div className="w-200 m-3 bg-[#E7F9FF] animate rounded-lg shadow-md p-5 hover:scale-105 transition-transform  h-fit bg-zinc-50 cursor-pointer" style={cardstyle}>
    <p className="date">{content.date}</p>
    <h4 className='title'>{content.title}</h4>
    <p className="content">{content.content}</p>
  </div>
  )
}
