import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Users from './Users';
import Profile from './Profile';
import Orders from './Orders';
import Quote from './Quote';
import Logout from './Logout';
import PageNotFound from './PageNotFound';
import ListIndex from './ListsIndex';


function Header(){

  let loggedIn = true;

  return(
    <div className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"> <Link className="nav-link active" aria-current="page" to='/'>HOME</Link></li>
              <li className="nav-item"> <Link className="nav-link" to='/about'>ABOUT</Link></li>
              <li className="nav-item"> <Link className="nav-link" to='/contact'>CONTACT</Link></li>
              <li className="nav-item"> <Link className="nav-link" to='/users/100/Ammu?posts=10&category="Laptop" '>USERS</Link></li>
              {
                loggedIn ? <li className="nav-item"> <Link className="nav-link" to='/login'>LOGIN</Link></li> : <li className="nav-item"><Link className="nav-link" to={'/logout'}>LOGOUT</Link></li>
              }
            <li className="nav-item"> <Link className="nav-link" to='/lists'>LISTS</Link></li>
            </ul>
        </div>
      </div> 
    </div>
  )
} 

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
          <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='about' element={ <About />} />
              <Route path='contact' element={ <Contact />} />
              <Route path='users/:id/:name' element={ <Users />} >
                    <Route path='profile' element={<Profile />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='quote' element={<Quote />} />
              </Route>
              <Route path='login' element={<Login /> }/>
              <Route path='logout' element={<Logout />} />
              <Route path='lists' element={<ListIndex />} />
              <Route path='*' element={<PageNotFound /> } />
          </Routes>
          
      </BrowserRouter>
      
    </div>
  );
}

export default App;
