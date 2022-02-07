import React, { useState } from 'react';
function Game(props) {
  const [num1, setNum1] = useState(Math.floor(Math.random()*100));
  const [num2, setNum2] = useState(Math.floor(Math.random()*100));
  const [correct,isCorrect]=useState(false);
  const [count,setCount]=useState(props.count);
  const newQuestion=()=>{
    setNum1((Math.floor(Math.random()*100)))
    setNum2((Math.floor(Math.random()*100)))
    
    isCorrect(false)
    count==0?setCount(props.count):setCount(count-1);
    
    
  }

  return (
    <div>
      {correct
      ?
      
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-green-800 text-xl font-bold m-2'>Wow! {props.name} You're Correct.</h3>
        {(count>0)?
          <>
          <p className=' text-right'>{num1}</p>
          <p className='border-b-2 text-right'>+ {num2}</p>
          <input type="text"  className='text-lg outline-none text-right w-full' onInput={(event)=>{
              if((num1+num2)==event.target.value){
                // I have to check only both the strings are equal or not 
                // that's why using ==
                  isCorrect(true)
              }
          }} />
          </>:
        <button className='btn btn-blue m-2 border-2 p-2 focus' onClick={()=>{
          newQuestion()
        }}><span className='font-bold text-blue-700'>Next Question</span></button>
      }
      </div>
      
      :
      <div>
        <h1 className="text-3xl font-bold text-red-600">Let's Play the game!</h1>
          <p className=' text-right'>{num1}</p>
          <p className='border-b-2 text-right'>+ {num2}</p>
          <input type="text"  className='text-lg outline-none text-right w-full' onInput={(event)=>{
              if((num1+num2)==event.target.value){
                // I have to check only both the strings are equal or not 
                // that's why using ==
                  isCorrect(true)
              }
          }} />
        </div>
        }
    </div>
  )
}

export default Game;
