import React from "react"
import { useState } from "react";

function LikeButtons () { 
    const [Likes, setLikes] = useState(0);
    let s = {display: "inline-flex"} 
    return ( 
   <div style={s}> 
    <button onClick={()=>{ setLikes(Likes + 1) }}>❤️</button> 
    <p>Likes: {Likes}</p> <br /> <input type="color" onClick={(e)=>{ 
        document.body.style.background = e.target.value; }}/>
     </div>
    )
} 

export default LikeButtons;