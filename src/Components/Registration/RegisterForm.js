import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
 import '../CSS/Registerform.css';


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
    <div className="App">
    <div className="auth-wrapper">
    <div className="auth-inner">
    <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
          onChange={firstnameChangeHandler}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={lastnameChangeHandler} />
        </div>
        <div className="mb-3" onChange={genderChangeHandler}>
        <label>Gender</label><br></br>
        <input type="radio"  id="male" name="gender" value="male" />
        <label for="male">Male</label>&nbsp;&nbsp;
        <input type="radio"  id="female" name="gender" value="female" />
        <label for="female">Female</label><br></br>
       </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input type="date" className="form-control"  onChange={DOBChangeHandler} />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input type="text" pattern="^[0-9]{10}$" placeholder="Phone number" minLength={10} maxLength={10} className="form-control"  onChange={DOBChangeHandler} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
          onChange={emailChangeHandler}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
          onChange={passChangeHandler}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
  );
}

export default RegisterForm;