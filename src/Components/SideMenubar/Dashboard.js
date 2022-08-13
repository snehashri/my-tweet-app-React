import React from "react";
import "../CSS/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SideMenubar/Dashboard.css'

import Navbar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core'

// PAGES
import PostTweetPage from "../Dashboard/PostTweetPage";
import PostTweetForm from "../Dashboard/PostTweetForm";
import Sidebar from "./Sidebar";
import Feed from "../Dashboard/Feed";



 function Dashboard(props) {
var navigate=useNavigate();
function loginHandler()
{
     navigate("/login",{replace: true});
}
function registerHandler()
{
     navigate("/registerform",{replace: true});
}function forgetPassHandler()
{
     navigate("/forgetpasswordform",{replace: true});
}

  return (
    // <div className="App">
      
    //   <Button variant = "outlined" className = "sidebar__tweet" onClick={loginHandler}>Login</Button>
    //   <Button variant = "outlined" className = "sidebar__tweet" onClick={registerHandler}>Register</Button>
    //   <Button variant = "outlined" className = "sidebar__tweet" onClick={forgetPassHandler}>Forget Password</Button>
      
    // </div>
    <form>
        <h3>Connect Today!</h3>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" href="/sign-in">
            Sign In
          </button>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" href="/sign-up">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
         <a href="/forgotpass"> Forgot password?</a>
        </p>
      </form>

  
  );
}
export default Dashboard;