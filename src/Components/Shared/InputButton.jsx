import React, { useState } from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa';

export default function InputButton({name,func,obscure}) {
    const [obscur, setobscur] =useState(obscure);
  return (
    <div className=' relative md:w-full'>
    <input
    className="p-2 w-full  rounded-lg border-none my-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      type={obscur?"password":"text"}
      name={name}
      placeholder={name}
      onChange={(e) => func(e.target.value)}

      
    />
    {obscure?obscur? <button className='absolute right-3 top-1/4 translate-y-2/4 ' onClick={(e) => {
        e.preventDefault()
        setobscur(!obscur)
    }} > <FaEye /></button> :<button className='absolute right-3 top-1/4 translate-y-2/4 ' onClick={(e) => {
        e.preventDefault()
        setobscur(!obscur)
    }} > <FaEyeSlash /></button>: null}
    </div>
  )
}
