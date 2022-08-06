import React, { useState } from 'react';



function LoginForm(props) {
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);   
  };

  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };

  const onBackClickHandler=()=>{
    props.onBack();
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const loginUserData = {
     email:enteredEmail,
     password:enteredPass
    };
    props.onLogin(loginUserData);
    console.log(loginUserData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='email'>Email</label>
        <input type='email' id='email'  onChange={emailChangeHandler} />
      </div>
      <div >
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={passChangeHandler} ></input>
      </div>
     
      <button>Login</button>
      <button onClick={onBackClickHandler}>Back</button>
    </form>
  );
}

export default LoginForm;