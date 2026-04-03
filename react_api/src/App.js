import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
     <h1 className='text-center'>Product Details</h1>
     {/* <UserDetails /> */}
     <Employee />
    </div>
  );
}

export default App;
