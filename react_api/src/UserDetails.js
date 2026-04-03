import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import './App.css';

const UserDetails = ()=> {
    const [user, setUser] = useState([]);

    const UserDetails = "https://fakestoreapi.com/products"

    const UserHandler = async() => {
        const respond = await fetch(UserDetails)
        const newData = await respond.json();
        setUser(newData)

    }
    useEffect(()=> {
        console.log(UserHandler())
       
    },[])
    
    console.log(user)

    return(
        <div className="wrapper">
            { user.map((item)=>{
                return(
                    <div className="card">
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h3><b>Title</b> : {item.title}</h3>
                            <p><b>Category</b> : {item.category}</p>
                            <p><b>Price</b>: {item.price}</p>
                            <p><b>Rating</b>: {item.rating.rate}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    )
                }
                )
            }
        </div> 
    )
}

export default UserDetails;