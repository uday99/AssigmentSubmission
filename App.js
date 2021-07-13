import React from 'react'
import "./style.css"
import Button from './Button.js'

const Apple =()=>{
    return(
        <div>
            <h1 style={{textAlign:"center",fontFamily:"sans-serif",fontSize:50}}>Welcome to react js</h1>
            <Button buttonText="Mango"/>
            <Button buttonText="Apple"/>
            <Button buttonText="orange"/>
        
            
        </div>
        
    )
}
export default Apple