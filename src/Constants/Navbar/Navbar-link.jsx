import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarlink({name,address}) {
  return (
    <div  className=" text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 font-medium text-sm ">
 <Link to={address}>
    {name}

    </Link>
    </div>
   
  )
}
