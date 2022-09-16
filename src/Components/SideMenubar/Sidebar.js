import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SlidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function Sidebar(props) {
  var navigate = useNavigate();
  function backHandler() {
    navigate("/", { replace: true });
    localStorage.removeItem("userId");
  }
  function onChangeSidebarHandler(goto) {
    props.changeNav(goto);
  }
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption
        active
        Icon={HomeIcon}
        text="Home"
        onChangeSidebarHandler={onChangeSidebarHandler}
      />
      <SidebarOption
        Icon={SearchIcon}
        text="My Tweets"
        onChangeSidebarHandler={onChangeSidebarHandler}
       
      />
      <SidebarOption
        Icon={PersonSearchIcon}
        text="All Users"
        onChangeSidebarHandler={onChangeSidebarHandler}
       
      />
      <Button
        variant="outlined"
        className="sidebar__tweet"
        onClick={backHandler}
      >
        Logout
      </Button>
    </div>
  );
}

export default Sidebar;


