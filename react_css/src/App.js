import "./App.css"

function App(){
let name = "Aishu"
let s1 = {
  backgroundColor: "blue",
  color: "#fff",
  fontSize : '20px',
  padding : '10px'
}

  return(
    <div>
      <h1 className="test">This is {name}</h1>
      <h3 style={s1}>Arithmetic Operations</h3>
      <p className="primary">Addition : {10+3}</p>
      <p className="primary">Subtraction : {10-3}</p>
      <p className="primary">Multiplication: {10*3}</p>
      <p className="primary">Division: {10/3}</p>
      <marquee behavior="left" direction="left" style={s1} className="primary">This is Ended Here</marquee>
      <label htmlFor="test">Subscription</label>
      <input type="checkbox" id="test"/>
      <ul>
        <li>BCA</li>
        <li>MCA</li>
        <li>BBA</li>
        <li>MBA</li>
        <li><a href="https://github.com/pythonprogrammerRaji">git</a></li>
        <p>Hello This is a <mark>React World</mark> welcome All Join to group for learning all together</p>
        
      </ul>
    </div>
    
  )
}

export default App