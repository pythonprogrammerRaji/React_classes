import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";


const Users = () =>  {

    const s = {
        listStyle: 'none',
        display: "inline-block",
        float: "left"
    }

    let {id, name} = useParams()

    let location = useLocation()
    let queryParams = new URLSearchParams(location.search)
    let category = queryParams.get('category')
    let posts = queryParams.get("posts")

    console.log(useParams())
    return(
        <div>
            <div style={s}>
                <ul >
                    <li> <Link to='profile'>Profile</Link> </li>
                    <li> <Link to='orders'>Orders</Link> </li>
                    <li> <Link to='quote'>Quote</Link> </li>
                </ul>
            </div>
          
            <h1>Users Components</h1>
            <Outlet />

            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Category : {category}</h3>
            <h3>Posts : {posts}</h3>
            


             
        </div>
    )
}

export default Users