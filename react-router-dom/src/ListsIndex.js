import React from "react";


const ListIndex = () =>  {

    // let Langs = ["Python", "Java", "HTML", "CSS", "Js"]
    let Langs = [{id:1, "lang":"Python"}, {id:2, "lang":"Java"}, {id:3, "lang":"HTML"}, {id:4, "lang":"CSS"}, {id:5, "lang":"Js"},]

    return(
        <>
            <h3> ListIndex Components</h3>

            {
                Langs.map(
                    (lists)=> <ul>
                        <li key={lists.id}>{lists.lang}</li> 
                    </ul>
                    
                )
            }
           
        </>
    )
}

export default ListIndex