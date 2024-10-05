import React from 'react'
import '../assets/css/styles.css'
import { useState } from 'react'

const Card = ({title,Desc}) => {
  const [isExpanded,setisExpanded] = useState(false);

  const toggleDescription = () =>{
    setisExpanded(!isExpanded);
  }

  const shortDescription  = Desc.length>100 ? `${Desc.substring(0,100)}...`:Desc;


  return (
        <div className='h-auto w-[300px] bg-red-700 rounded-lg overflow-hidden p-4'>
            <div>
                <h3 className='flex justify-center p-2 text-2xl text-white font-bold'>{title}</h3>
                <p className='p-3 text-white'>
                  {isExpanded ? Desc : shortDescription}
                </p>
                <button onClick={toggleDescription} className='text-blue-400 mt-2 hover:underline focud:outline-none'>
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
        </div>
  )
}


export default Card;

