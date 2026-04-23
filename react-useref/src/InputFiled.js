import React, { useRef } from "react"



function InputFiled(){

    const InputFiled = useRef(null)

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(InputFiled.current)
        console.log(InputFiled.current.value)
        console.log(InputFiled.current.type)
        console.log(InputFiled.current.placeholder)

        InputFiled.current.focus()
    }

    return (
        <>
        <h1>hello</h1>
            <form onSubmit={SubmitHandler}>
                <input text="type" placeholder="Enter a text" ref={InputFiled}/>
                <button type="submit" >Submit</button>
            </form>
            
            
        </>
    )
}

export default InputFiled