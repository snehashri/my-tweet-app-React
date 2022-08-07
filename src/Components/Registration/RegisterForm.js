import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function RegisterForm(props) {
  const navigate=useNavigate();
  
    const [enteredFname, setEnteredFname] = useState('');
    const [enteredLname, setEnteredLname] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredDOB, setEnteredDOB] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const firstnameChangeHandler = (event) => {
        setEnteredFname(event.target.value);   
      };
      const lastnameChangeHandler = (event) => {
        setEnteredLname(event.target.value);   
      };
      const genderChangeHandler = (event) => {
        setEnteredGender(event.target.value);   
      };
      const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value);   
      };
      const DOBChangeHandler = (event) => {
        setEnteredDOB(event.target.value);   
      };                  
   const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);   
  };

  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };

  const submitHandler = (event) => {
    
    event.preventDefault();
    
    const registeredUserData = {
    FirstName:enteredFname,
    LastName:enteredLname,
    Gender:enteredGender,
    DOB:enteredDOB,
    Phone:enteredPhone,
    Email:enteredEmail,
    password:enteredPass
    };
    userRegistrationHandler(registeredUserData);
    
    console.log(registeredUserData);
    
  };

  async function userRegistrationHandler(registereduserdata) {
    const response = await fetch('https://localhost:44359/api/Auth/Register', {
      method: 'POST',
      body: JSON.stringify(registereduserdata),
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
        <label htmlFor='fname'>First Name</label>
        <input type='text' id='fname'  onChange={firstnameChangeHandler} />
      </div>
      <div >
        <label htmlFor='lname'>Last Name</label>
        <input type='text' id='lname'  onChange={lastnameChangeHandler} />
      </div>
      <div onChange={genderChangeHandler}>
      <input type="radio" id="male" name="male" value="male" />
      <label for="male">Male</label><br></br>
      <input type="radio" id="female" name="female" value="female" />
      <label for="female">Female</label><br></br>
      </div>
      <div >
        <label htmlFor='dob'>Date of Birth</label>
        <input type='date'  onChange={DOBChangeHandler} ></input>
      </div>
      <div >
        <label htmlFor='phone'>Phone Number</label>
        <input type='number'  onChange={phoneChangeHandler} ></input>
      </div>
      <div >
        <label htmlFor='email'>Email</label>
        <input type='email' id='email'  onChange={emailChangeHandler} />
      </div>
      <div >
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={passChangeHandler} ></input>
      </div>
     
      <button>Register</button>
      <div>
      <button onClick={backHandler}>Back</button>
      </div>
    </form>
  );
}

export default RegisterForm;