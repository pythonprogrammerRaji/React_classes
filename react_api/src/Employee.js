import React, { useState } from "react";

const Employee = () => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [dept, setDept] = useState('');

    const empDetails = {name, role, email, dept}



    const empHandler = async (e) => {
        e.preventDefault()
        console.log(empDetails)
        
        try{
            const respond =  await fetch('http://localhost:5000/add-employee', {
                method: "post",
                header: {
                    "Content-Type ": "application/json" 
                }, 
                body: JSON.stringify(empDetails)
            });
            const data = await respond.json
            console.log(data)
            alert("Employee data submit Successfully")


        }
        catch(error){
            console.log(error)
        }


    }



    return(
        <div className="">
            <form onSubmit={empHandler} className="p-5">
                    <div class="mb-3 form-group">
                        <label className="form-check-label" for="exampleCheck1">Full Name</label>
                        <input type="text" className="form-control" id="exampleCheck1" name="name" onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                    </div>

                    <div className="mb-3 form-group">
                        <label className="form-check-label" for="exampleCheck1">Role</label>
                        <input type="text" className="form-control" id="exampleCheck1" name="role" onChange={(e)=>{
                            setRole(e.target.value);
                        }}/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3 form-group">
                        <label class="form-check-label" for="exampleCheck1">Department</label>
                        <input type="text" className="form-control" name="dept" id="exampleCheck1" onChange={(e)=>{
                            setDept(e.target.value);
                        }} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default Employee;