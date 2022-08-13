import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../CSS/Registerform.css';


function ForgetPasswordForm(props) {
  const navigate=useNavigate();
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);   
  };
  const [enteredDOB, setEnteredDOB] = useState('');

  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };
  const DOBChangeHandler = (event) => {
    setEnteredDOB(event.target.value);   
  };  

  const submitHandler = (event) => {
    event.preventDefault();
    
    const forgotpasswordData = {
     email:enteredEmail,
     DOB:enteredDOB,
     Newpassword:enteredPass
    };
    forgotPasswordHandler(forgotpasswordData);
    console.log(forgotpasswordData);
  };

  async function forgotPasswordHandler(forgotpasswordData) {
    const response = await fetch('https://localhost:44359/api/Auth/ForgotPassword', {
      method: 'POST',
      body: JSON.stringify(forgotpasswordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

function backHandler()
{
  navigate('/',{replace: true});
}

  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    <form>
    <h3>Forget password</h3>
      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" type='email' id='email'  onChange={emailChangeHandler} />
      </div>
      <div className="mb-3" >
        <label>Date of Birth</label>
        <input className="form-control" type='date'  onChange={DOBChangeHandler} ></input>
      </div>
      <div className="mb-3">
        <label>New Password</label>
        <input className="form-control" type='password' id='password' onChange={passChangeHandler} ></input>
      </div>
      <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={submitHandler}>
            Submit
          </button>
      </div>
      <p className="forgot-password text-right">
         <a href="/sign-in"> Sign In Now</a>
      </p>
     
      
    </form>
    </div>
    </div>
  );
}

export default ForgetPasswordForm;