import React from "react";
import contact from './contact.avif'

const Contact = () =>  {
    return(
        <div className="">
            <h1>Contact Components</h1>
            <img src={contact} alt="" style={{width: 200}}/>
        </div>
    )
}

export default Contact