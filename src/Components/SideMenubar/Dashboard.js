import React from "react";
import "../CSS/styles.css";

import Navbar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import PostTweetPage from "../Dashboard/PostTweetPage";
import PostTweetForm from "../Dashboard/PostTweetForm";
import Sidebar from "./Sidebar";


 function Dashboard() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          
          <Route path="/PostTweet" element={<PostTweetPage/>} />
          <Route path="/GetMyTweets" element={<PostTweetPage/>} />
          
        </Routes>
      </Router>
    </div>
  );
}
export default Dashboard;