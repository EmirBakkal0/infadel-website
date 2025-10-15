import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-col justify-center items-center p-3 opacity-90 bg-[#FFCAD4] rounded-2xl font-[delius]'>
        <img src={props.img} alt={props.imgDesc} className='rounded-xl' width={300} height={300} />
        <h1 className='text-center text-3xl text-bold p-2'>{props.header}</h1>
        <p className='p-2'>
            {props.p}
        </p>
    </div>
  )
}

export default Card