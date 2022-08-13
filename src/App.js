import logo from './logo.svg';
import './App.css';
//import '../src/Components/CSS/Registerform.css';
import React from "react";
import HomePage from './Components/Registration/HomePage';
//import GetMyTweetsPage from './Components/GetMyTweetsPage';

import Sidebar from '../src/Components/SideMenubar/Sidebar';
import Feed from '../src/Components/Dashboard/Feed'
import Login from '../src/Components/Registration/Login'
import { BrowserRouter as Router, Routes, Route,NavLink ,Link } from "react-router-dom";
import Dashboard from './Components/SideMenubar/Dashboard';
import RegisterForm from './Components/Registration/RegisterForm';
import ForgetPasswordForm from './Components/Registration/ForgetPasswordForm';
import GetMyTweetsPage from './Components/Dashboard/GetMyTweetsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      
       <Router>

       <div className="App">
       
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
       
          <div >
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<RegisterForm />} />
              <Route path="/forgotpass" element={<ForgetPasswordForm/>} >Login</Route>
              <Route path="/homepage" element={<HomePage />}>Homepage </Route>
              
            </Routes>
          </div>
        
        
      </div>
        {/* <div>
          
          <div className="content">
            <Routes>
             <Route path="/login" element={<Login/>} >Login</Route>
             <Route path="/homepage" element={<HomePage/>} >Homepage</Route>
             <Route path="/registerform" element={<RegisterForm/>} >register</Route>
             <Route path="/forgetpasswordform" element={<ForgetPasswordForm/>} >Login</Route>
             <Route path="/da" element={<Dashboard/>} >Homepage</Route>
             <Route path="/getmytweetspage" element={<GetMyTweetsPage/>} >Homepage</Route>
             
          
            </Routes>
          </div>
        </div> */}
      </Router> 
   
  );
}

export default App;
