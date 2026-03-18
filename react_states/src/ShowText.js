import React from "react"
import { useState } from "react";

function ShowText () { 
    const [show, setShow] = useState("Hello Rajeshwari! Welcome to React. ");

    let s = {display: "inline-flex"} 
    return ( 
        <div style={s}> 
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <p>Hello Rajeshwari! Welcome to React.</p>}
        </div> 
    )
} 

export default ShowText;