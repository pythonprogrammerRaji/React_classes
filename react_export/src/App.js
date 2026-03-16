// import logo from './logo.svg';
import './App.css';
import Footer from "./footer";    // compulsory the import name first latter mush be uppercase
import Header from "./header";

function App() {
  return (
    <div>
        <p>This is a App Page</p>
        <h2 className="class">Header</h2>
        <Header />,
        <h2>Footer</h2>
        <Footer />
    </div>
  );
}

export default App

// export default App;


// export let person = {
//   name:'Aishu',
//   age: 27,
//   education : "BCA"
// }

// let x = 10

// export default x