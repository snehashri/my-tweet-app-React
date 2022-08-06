import React, { useState } from 'react';



function ForgetPasswordForm(props) {
  
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
    props.onLogin(forgotpasswordData);
    console.log(forgotpasswordData);
  };

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
    </form>
  );
}

export default ForgetPasswordForm;