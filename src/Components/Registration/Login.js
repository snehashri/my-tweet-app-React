import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import style from '../CSS/Registerform.css';
import '../CSS/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Login(props) {
  const navigate=useNavigate();
  

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);   
  };

  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    
    const loginUserData = {
     email:enteredEmail,
     password:enteredPass
    };
    userloginHandler(loginUserData);
    console.log(loginUserData);
    
  };


  async function userloginHandler(loginuserdata) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Auth/Login`, {
      method: 'POST',
      body: JSON.stringify(loginuserdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    alert(data.Message);
    console.log(data);
    console.log("beforeset: ",sessionStorage.getItem('token'));
    localStorage.setItem('token', data.Data);
    localStorage.setItem('user', loginuserdata);
    console.log("afterset: ",localStorage.getItem('token'));
    var mytoken=localStorage.getItem('token');
   console.log(typeof(mytoken));
    if(localStorage.getItem('token') === 'null')
    {
       navigate('/sign-in',{replace: true});
       //console.log("failed");
      
    }
    else
    {
      console.log("go to homepage")
      navigate('/homepage',{replace: true});
    }
    
    
  }

  function backHandler()
  {
    navigate('/',{replace: true});
  }
  

  return (
    
    <div className="App">
    <div className="auth-wrapper">
    <div className="auth-inner">
    <form onSubmit={submitHandler}>
        <h3>Sign into your account</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
          onChange={emailChangeHandler}
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
          onChange={passChangeHandler}
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
                 Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            LOGIN
          </button>
        </div>
        </form>
        <p className="forgot-password text-right">
         <a href="/forgotpass"> Forgot password?</a>
        </p>
        <br></br>
        <p><h6>Don't have an account?  <a href="/sign-up"> Register here</a></h6></p>
     
      </div></div>
      </div>
      
  );
}

export default Login;