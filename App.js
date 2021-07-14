import React, { useState } from "react"
import "./style.css"

const App=()=>{
    let [score,setScore]=useState(0)
    return( 
    <div style={{textAlign:"center"}}>
     <h1 style={{textAlign:"center",fontSize:80,fontFamily:"sans-serif"}}>Counter App</h1>
     <h3 style={{color:"blue",fontFamily:"Arial",fontSize:25}}>The  value of Score is <span >{score}</span></h3>
     <button className='button'  style={{textAlign:"center"}} onClick={()=>score<25?setScore(score+1):""}>Increment</button>

     <button className='button ' onClick={()=>score>0?setScore(score-1):""}>Decrement</button>

     <button className='button' onClick={()=>{setScore(0)}}>Reset</button>


    </div>

    )
}

export default App 
