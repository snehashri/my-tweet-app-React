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
      {nav == "My Tweets" && <GetMyTweetsPage />}
      {nav == "All Users" && <GetAllUserPage />}
      {nav == "Search by username" && <GetMyTweetsPage />}

      <Trends/>

    </div>
  );

  
}

export default HomePage;
