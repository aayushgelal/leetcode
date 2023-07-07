import React from 'react'
import { Link, json } from 'react-router-dom'


export default function ProblemTable({problems}) {
    let color;

  return (
    <table className=' border w-full border-gray-200 '>
        <tbody>

          <tr>            <th className='text-gray-500 font-light'>Problem No.</th>

            <th className='text-gray-500 font-light'>Title</th>
            <th className='text-gray-500 font-light'>Difficulty</th>
            <th className='text-gray-500 font-light'>Acceptance</th>
          </tr>

          {problems.map((prob,index) => {
            if(prob.difficulty=="Hard"){
              color="text-red-500"
            }else if(prob.difficulty=="Medium"){
              color="text-yellow-500"

            }
            else{
              color="text-green-500"

            }
        

            return (
            <tr key={index} className=' border-b-2'>
              <td className='p-4 text-center'>{index}</td>
              <Link to={`/problems/${prob.problemId}/`}><td className='p-4 text-center'>{prob.problemtitle}</td></Link>
              <td className={`p-4 text-center ${color}`} >{prob.difficulty}</td>
              <td className='p-4 text-center'  >{prob.acceptance}</td>
              
            </tr>
            )
})}

        </tbody>
      </table>
  )
}
