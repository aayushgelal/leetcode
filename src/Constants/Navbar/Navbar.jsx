import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import Navbarlink from './Navbar-link'
import { BiMenu } from 'react-icons/bi'
import { AuthContext } from '../../App'

const Navbar = () => {
  const [hammered,sethammered]=useState(false);
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  let token;
  useEffect(() => {
   token = localStorage.getItem('token');
    setIsLoggedIn(token); // Set isLoggedIn to true if token exists, false otherwise
  }, [token]);

  return (
    <div>
    <div id='navbar-main' className=' hidden md:flex mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between shadow-lg'>
      <Link to={'/'}>
        <div className=" w-20 p-1 flex items-center"> 
          <img  src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" alt="logo" /> 
          <p className=' ml-3 text-lg font-semibold '>LeetCode</p>
        </div>
      </Link >
      <div className='flex justify-between font-helvetica space-x-4'>
      <Navbarlink name='Problems' address={'/problemset/all'} />
      <Navbarlink name='Blogs' address={'/blogs'}  />

      {isLoggedIn?
      <Navbarlink  name='Logout' address={'/login'} onClick={() =>{  
        localStorage.removeItem('token');
        setIsLoggedIn(localStorage.getItem('token'))
      }   }> LogOut</Navbarlink>
      : <>

      <Navbarlink name='Signup' address={'/signup'} />
      <Navbarlink name='Login' address={'/login'} />
      </>

}

      </div>
      </div>
      <div className='md:hidden shadow-lg px-4'>
        <div className='flex items-center justify-between '>
      <div className=" w-20 p-1 flex items-center"> 
          <img  src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png" alt="logo" /> 
          <p className=' ml-3 text-lg font-semibold '>LeetCode</p>
        </div>
   <BiMenu className='text-black w-8 h-8'onClick={() => {sethammered(!hammered)}}></BiMenu>
   </div>
   {hammered? <div className='  flex text-center flex-col items-center font-helvetica p-4 space-y-2 '>
      <Navbarlink name='Problems' address={'/problemset/all'} onClick={()=>sethammered(!hammered)} />
      <Navbarlink name='Blogs' address={'/blogs'}  onClick={()=>sethammered(!hammered)}/>

      {isLoggedIn?
      <Navbarlink  name='Logout' address={'/login'} onClick={() =>{  
        localStorage.removeItem('token');
        setIsLoggedIn(false)
        sethammered(!hammered)
      }   }> LogOut</Navbarlink>
      : <>

      <Navbarlink name='Signup' address={'/signup'} onClick={()=>sethammered(!hammered)}  />
      <Navbarlink name='Login' address={'/login'} onClick={()=>sethammered(!hammered)} />
      </>

}

     </div>:null}

              

    
    </div>
    </div>

  )
}

export default Navbar