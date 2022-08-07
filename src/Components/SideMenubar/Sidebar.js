import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SlidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom";

function Sidebar() {
   var navigate=useNavigate();
   function backHandler()
  {
    navigate('/',{replace: true});
  }
  
    return (
        <div className = "sidebar">
           <TwitterIcon
              className = "sidebar__twitterIcon"                
           /> 

      <SidebarOption active Icon={HomeIcon} text="Home" navigate="/homepage"/>
      <SidebarOption Icon={SearchIcon} text="Get My Tweets"  navigate="/getmytweetspage"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Get All Users" navigate="/getmytweets"/>
      <SidebarOption Icon={MailOutlineIcon} text="Search by username" navigate="/getmytweets" />
           <Button variant = "outlined" className = "sidebar__tweet" onClick={backHandler}>Logout</Button>

        </div>
    )
}

export default Sidebar
