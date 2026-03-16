import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import x, {person} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function menu(){
  // console.log(person)
  return(
    <div>
       {/* <p>{person}</p> */}
        {/* <p>{x}</p> */}
        <App />
    
    </div>
   
  )
}



root.render(menu());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
