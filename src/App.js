import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HomePage from "./Components/Registration/HomePage";
//import GetMyTweetsPage from './Components/GetMyTweetsPage';

import Sidebar from "../src/Components/SideMenubar/Sidebar";
import Feed from "../src/Components/Dashboard/Feed";
import Login from "../src/Components/Registration/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from "./Components/SideMenubar/Dashboard";
import RegisterForm from "./Components/Registration/RegisterForm";
import ForgetPasswordForm from "./Components/Registration/ForgetPasswordForm";
import GetMyTweetsPage from "./Components/Dashboard/GetMyTweetsPage";

function App() {
  return (
    <div className="App">
      <Router>
        
      <div >
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<RegisterForm />} />
              <Route path="/forgotpass" element={<ForgetPasswordForm/>} >Login</Route>
              <Route path="/homepage" element={<HomePage />}>Homepage </Route>
              
            </Routes>
          </div>
        
      </Router>
    </div>
  );
}

export default App;
