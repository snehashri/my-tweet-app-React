import logo from './logo.svg';
import './App.css';
import React from "react";
import HomePage from './Components/Registration/HomePage';
//import GetMyTweetsPage from './Components/GetMyTweetsPage';
import Board from './Components/Registration/Board';
import Sidebar from '../src/Components/SideMenubar/Sidebar';
import Feed from '../src/Components/Dashboard/Feed'
import Login from '../src/Components/Registration/Login'
import { BrowserRouter as Router, Routes, Route,NavLink } from "react-router-dom";
import Dashboard from './Components/SideMenubar/Dashboard';
import RegisterForm from './Components/Registration/RegisterForm';
import ForgetPasswordForm from './Components/Registration/ForgetPasswordForm';

function App() {
  return (
    <div className="App">
      
       <Router>
        <div>
          
          <div className="content">
            <Routes>
             <Route path="/login" element={<Login/>} >Login</Route>
             <Route path="/homepage" element={<HomePage/>} >Homepage</Route>
             <Route path="/registerform" element={<RegisterForm/>} >register</Route>
             <Route path="/forgetpasswordform" element={<ForgetPasswordForm/>} >Login</Route>
             <Route path="/" element={<Dashboard/>} >Homepage</Route>
             
          
            </Routes>
          </div>
        </div>
      </Router> 
    </div>
  );
}

export default App;
