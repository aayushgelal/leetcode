import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbarlink({name,address,onClick=() => {}}) {
 
  return (
    <div onClick={onClick}  className=" button  rounded-md px-4 py-2 font-medium text-sm ">
 <Link to={address}>
    {name}

    </Link>
    </div>
   
  )
}
