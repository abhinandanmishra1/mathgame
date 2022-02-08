import React, { useState } from 'react';
function Game(props) {
  const [num1, setNum1] = useState(Math.floor(Math.random()*100));
  const [num2, setNum2] = useState(Math.floor(Math.random()*100));
  const [correct,isCorrect]=useState(false);
  const [ask,toAsk]=useState(false);
  const [count,setCount]=useState(0);

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
        <h3 className='text-green-800 text-xl font-bold m-2'>Wow! {props.name} You're Correct. <span className='border-b-2 text-blue-500'>Streak : {count}</span> </h3>
        {!ask?
          <>
          <p className=' text-center text-2xl'>{num1}</p>
          <p className='border-b-2 border-black text-center text-2xl w-full'>+ {num2}</p>
          <input type="text" placeholder='Write Your Answer' className='border-b-2 border-black text-lg outline-none text-center text-2xl p-2 w-full' onInput={(event)=>{
              if((num1+num2)==event.target.value){
                // I have to check only both the strings are equal or not 
                // that's why using ==
                setCount(count+1);
                newQuestion();
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
        <h1 className="text-3xl font-bold text-red-600 mb-5">Let's Play the game!</h1>
          <p className=' text-center text-2xl'>{num1}</p>
          <p className='border-b-2 border-black text-center text-2xl'>+ {num2}</p>
          <input type="text"  placeholder='Write Your Answer' className='border-b-2 border-black text-lg outline-none text-center text-2xl p-2 w-full' onInput={(event)=>{
              if((num1+num2)==event.target.value){
                // I have to check only both the strings are equal or not 
                // that's why using ==
                  newQuestion();
                setCount(count+1);
                  event.currentTarget.value=null;
                  isCorrect(true)
              }
          }} />
        </div>
        }
    </div>
  )
}

export default Game;
