import React from "react";
import about from './images/about.jpg'

const About = () =>  {
    return(
        <div className="">
            <h1>About Components</h1>
             <img src={about} alt="" style={{width: 200}}/>
        </div>
    )
}

export default About