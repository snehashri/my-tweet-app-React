import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='email'>Email</label>
        <input type='email' id='email'  onChange={emailChangeHandler} />
      </div>
      <div >
        <label htmlFor='dob'>Date of Birth</label>
        <input type='date'  onChange={DOBChangeHandler} ></input>
      </div>
      <div >
        <label htmlFor='password'>New Password</label>
        <input type='password' id='password' onChange={passChangeHandler} ></input>
      </div>
     
      <button>Forgot Password</button>
      <div>
      <button onClick={backHandler}>Back</button>
      </div>
    </form>
  );
}

export default ForgetPasswordForm;