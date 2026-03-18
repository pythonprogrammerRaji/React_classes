import React from "react"
import { useState } from "react";

function CounterNumber () { 
    const[counter, setCounter] = useState(0) 
    let s = {display: "inline-flex"} 
    return ( 
    <div style={s}> 
        <center><h3>Counter App</h3></center> 
        <button onClick={()=>{ setCounter(counter + 1) }}>Increment</button> 
        <h2>{counter}</h2> 
        <button onClick={()=>counter > 0 && setCounter(counter - 1)}>decrement</button> 
        </div> 
    )
} 

export default CounterNumber;