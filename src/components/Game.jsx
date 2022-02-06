import React, { useState } from 'react';
function Game() {
  const [num1, setNum1] = useState(Math.floor(Math.random()*100));
  const [num2, setNum2] = useState(Math.floor(Math.random()*100));
  const [ans, setAns] = useState(0)
  const [correct,isCorrect]=useState(true);
  const newQuestion=()=>{
    setNum1((Math.floor(Math.random()*100)))
    setNum2((Math.floor(Math.random()*100)))
    isCorrect(false)
  }
  return (
    <div>
      {correct
      ?
      
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-green-800 text-xl font-bold '>You're Correct.</h3>
        <button className='btn btn-blue' onClick={()=>{
          newQuestion()
        }}><span className='font-bold text-blue-700'>Next Question</span></button>
      </div>
      
      :
      <div>
          <p className=' text-right'>{num1}</p>
          <p className='border-b-2 text-right'>+ {num2}</p>
          <input type="text" className='text-lg p-2 outline-none text-right' onInput={(event)=>{
              if((num1+num2)==event.target.value){
                  isCorrect(true)
              }
          }} />
        </div>
        }
    </div>
  )
}

export default Game;
