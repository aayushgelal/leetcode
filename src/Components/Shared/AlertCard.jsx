import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import ButtonClick from './ButtonClick';

export default function AlertCard({message,handleClick}) {
   
  return (
    <div className='flex items-center justify-center h-screen '>
    <div className='w-6/12 h-fit shadow-lg bg-gray-100 underline border-none font-bold p-10 align-middle'>
        <p className='font-serif font-bold text-center'>{message} </p>
        <div className='flex items-end justify-end mb-5'><ButtonClick onclick={handleClick} name={"Close"} selected={true}></ButtonClick>


    </div>

    </div>
    </div>
  )
}
