import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../CSS/Login.css';

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
    const response = await fetch('https://localhost:44359/api/Auth/Login', {
      method: 'POST',
      body: JSON.stringify(loginuserdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data.Data);
    console.log("beforeset: ",sessionStorage.getItem('token'));
    localStorage.setItem('token', data.Data);
    localStorage.setItem('user', loginuserdata);
    console.log("afterset: ",localStorage.getItem('token'));
    var mytoken=localStorage.getItem('token');
   console.log(typeof(mytoken));
    if(localStorage.getItem('token') === 'null')
    {
       navigate('/login',{replace: true});
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
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={submitHandler} >
        <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email'  onChange={emailChangeHandler} />
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={passChangeHandler} ></input>
        </div>
     <div>
      <button>Login</button>
      </div>
      <div>
      <button onClick={backHandler}>Back</button>
      </div>
    </form>
    </div>
  );
}

export default Login;