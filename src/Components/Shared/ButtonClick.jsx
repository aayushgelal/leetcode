import React from 'react'

export default function ButtonClick({name,onclick,selected}) {
    let bgcolor=selected?'bg-gray-700 text-white hover:none':'bg-gray-200 hover:text-gray-800'
  return (

    <div className={` sm:text-xs lg:text-sm cursor-pointer  ${bgcolor} text-gray-600 rounded-2xl px-5 py-2 m-5 `} onClick={onclick}>{name}</div>
  )
}
