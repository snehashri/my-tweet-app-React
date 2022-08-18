import React, { useState } from "react";
import ForgetPasswordForm from "./ForgetPasswordForm";

import Login from "./Login";
import PostTweetPage from "../Dashboard/PostTweetPage";
import RegisterForm from "./RegisterForm";
import Sidebar from "../SideMenubar/Sidebar";
import Feed from "../Dashboard/Feed";
import GetMyTweetsPage from "../Dashboard/GetMyTweetsPage";
import GetAllUserPage from "../Dashboard/GetAllUserPage";
import Trends from '../Dashboard/Trends';

function HomePage() {
  const [nav, setNav] = useState("");

  function changeNav(show) {
    setNav(show);
  }
  return (
    <div className="app">
      <Sidebar changeNav={changeNav} />
      {(nav == "" || nav == "Home") && <Feed />}
      {nav == "Get My Tweets" && <GetMyTweetsPage />}
      {nav == "Get All Users" && <GetAllUserPage />}
      {nav == "Search by username" && <GetMyTweetsPage />}

      <Trends/>

    </div>
  );

  /* const [enteredpagestate, setEnteredPageState] = useState('');
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
        <Login onLogin={userloginHandler} onBack={onBackHandler} />
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
  );*/
}

export default HomePage;
