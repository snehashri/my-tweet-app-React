import logo from './logo.svg';
import './App.css';
import React from "react";
import HomePage from './Components/Registration/HomePage';
//import GetMyTweetsPage from './Components/GetMyTweetsPage';
import Dashboard from './Components/SideMenubar/Dashboard';
import Sidebar from '../src/Components/SideMenubar/Sidebar';
import Feed from '../src/Components/Dashboard/Feed'

function App() {
  return (
    <div className="app">
      
      <Sidebar/>
      <Feed />
    </div>
  );
}

export default App;
