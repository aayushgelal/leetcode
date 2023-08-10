import React from 'react';
import './LoadingScreen.css'

export default function LoadingScreen() {
  return (
    <div className=' fixed -z-10 h-full w-full  top-0 flex items-center justify-center'>
      <div className='flex flex-col items-center space-y-3'>
        <div className='loader' />
        <p className=' animate-pulse'>The server is slow due to free version. Please Wait !! </p>
        </div>
    </div>
  )
}
