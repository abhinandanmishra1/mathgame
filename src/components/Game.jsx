import React, { useState } from 'react';
import Operations from "./Operations";
function Game(props) {
  const [operation,changeOperation]=useState('+');
  return (
    <div className='w-full flex md:flex-row flex-col min-h-screen'>
      <div className='w-full md:w-1/3 flex flex-col justify-center items-center'>
        <div className=' flex flex-col items-center justify-center'>
          <h1 className='md:text-2xl text-xl text-green-800 font-bold m-2'>Select your operation</h1>
          <li className='list-none border-2 p-2 w-full text-center font-bold hover:text-white hover:bg-green-800 hover:ring-sky-500 m-1 rounded-lg bg-yellow-100 cursor-pointer' onClick={()=>changeOperation("+")}>Addition</li>
          <li className='list-none border-2 p-2 w-full text-center font-bold hover:text-white hover:bg-green-800 hover:ring-sky-500 m-1 rounded-lg bg-yellow-100 cursor-pointer' onClick={()=>changeOperation("-")}>Subtraction</li>
          <li className='list-none border-2 p-2 w-full text-center font-bold hover:text-white hover:bg-green-800 hover:ring-sky-500 m-1 rounded-lg bg-yellow-100 cursor-pointer' onClick={()=>changeOperation("x")}>Multiplication</li>
          <li className='list-none border-2 p-2 w-full text-center font-bold hover:text-white hover:bg-green-800 hover:ring-sky-500 m-1 rounded-lg bg-yellow-100 cursor-pointer' onClick={()=>changeOperation("/")}>Division</li>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center md:items-start items-center mt-4 md:mt-0 ">
        <Operations operation={operation} name={props.name}/>
      </div>
    </div>
  )
}

export default Game;
