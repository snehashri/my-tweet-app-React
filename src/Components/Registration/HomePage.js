import React, { useState } from 'react';
import ForgetPasswordForm from './ForgetPasswordForm';

import LoginForm from './LoginForm';
import PostTweetPage from '../Dashboard/PostTweetPage';
import RegisterForm from './RegisterForm';

function HomePage() {
    const [enteredpagestate, setEnteredPageState] = useState('');
    const [closepagestate, setclosePageState] = useState('');
    const [tokenstate, settokenState] = useState('');
    const loginChangeHandler = () => {
        setEnteredPageState('login'); 
        setclosePageState('login')  ;
      };
      const registerChangeHandler = () => {
        setEnteredPageState('register');
        setclosePageState('register');   
      };
      const forgetpassChangeHandler = () => {
        setEnteredPageState('forgetpass');  
        setclosePageState('forgetpass'); 
      };
      const onBackHandler=()=>{
        setclosePageState(''); 
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
        console.log(data);
      }
  
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
  
  return (
    <React.Fragment>
      <section>
        {closepagestate === '' &&
      <button onClick={loginChangeHandler} >Login</button>}
      {enteredpagestate === 'login' && (
        <LoginForm onLogin={userloginHandler} onBack={onBackHandler} />
      )}
        
      </section>
      <section>
      {closepagestate === '' &&
      <button onClick={registerChangeHandler}>Register</button>}
      {enteredpagestate === 'register' && (
        <RegisterForm onRegister={userRegistrationHandler} />
      )}
        
      </section>
      <section>
      {closepagestate === '' &&
      <button onClick={forgetpassChangeHandler}>Forget Password</button>}
      {enteredpagestate === 'forgetpass' && (
         <ForgetPasswordForm onForgetPassword={forgotPasswordHandler} />
      )}
       
      </section>
      <section>
        <PostTweetPage></PostTweetPage>
      </section>
      
    </React.Fragment>
  );
}

export default HomePage;