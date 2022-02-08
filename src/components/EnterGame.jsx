import React, { Component,useState } from 'react';
import Game from "./Game";

function EnterGame() {
      const[start,startGame]=useState(false);  // For managing game has been started or not
      const[name,changeName]=useState('');  // Getting name of player
      const[numQuestions,questions]=useState(1);  // Getting questions count
      const[next,Next]=useState(true);  // Getting name of player
       return <div className="flex flex-col justify-center items-center min-h-screen">
        {   start? 
                <>
			        <Game name={name} count={numQuestions} />
                </>
                :
                 <>
                    <h1 className="text-3xl font-bold text-green-600">Welcome to to the Maths Mastery game(-_-)</h1>
                    {
                        // next?
                        <>
                            <label className='m-2 text-2xl' htmlFor="name">What is your name?</label>
                            <input type="text" id='name' className='text-lg p-2 outline-none text-center' onChange={(event)=>changeName(event.target.value)} placeholder="Name Here" />
                            {/* <button onClick={()=>Next(false)} className="customButton">Next</button>
                        </>
                    :
                        <>
                            <label className='m-2 text-2xl' htmlFor="numQuestions">How many Questions do you want in a row?</label>
                            <input min="1" type="number" id='numQuestions' className='text-lg p-2 outline-none text-center' onChange={(event)=>questions(event.target.value)} placeholder="1" /> */}
                            <button onClick={()=>startGame(true)} className="customButton">Start Game</button>
                        </>
                    }
                    
                </>
        }
    </div>
}

export default EnterGame;
