import { useState } from "react";
import React  from "react"

function InputLivePreview () { 
   const [name, setName] = useState("");
    let s = {display: "inline-flex"} 
    return ( 
    <div style={s}> 
       <p>Enter your name: 
        <input type="text" name="name" id="name" onChange={(e)=>{ 
            // let InputName = document.getElementById('name').value; 
            setName(e.target.value) }}/></p> 
        <p>Your Name: {name}</p>
        </div> 
    )
} 

export default InputLivePreview;