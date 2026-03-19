import React, { useEffect, useState } from "react";

function Example(){

    const [timer, setTimer] = useState(0)
    const[counter, setCounter] = useState(0)


    useEffect(()=>{
        console.log("Inside UseEffect hooks...")
    },[counter])

    return(
        <div>
            <h1>Timer: {timer}</h1>
            <button onClick={()=>{
                setTimer(timer + 1)
            }}>Update Timer</button>

            <button onClick={()=>{
                setCounter(counter + 1)
            }}>Update Counter</button>
            <h1>Counter: {counter}</h1>


            {console.log("Inside Component..")}
        </div>
    )
}
export default Example;