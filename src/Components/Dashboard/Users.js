import { Avatar } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { forwardRef } from "react";
import "../CSS/userprofile.css";
import DeleteTweet from "../Dashboard/DeleteTweet";

const Users = forwardRef(
  (
    {
      username,  
      Email,
      firstname,
      lastname,
      profileimg
      
    },
    ref
  ) => {
    return (
      <div className="user" ref={ref}>
        {/* <div className="post__avatar">
          <Avatar src={avatar} />
        </div> */}
        <div className="user__first__img">
          <img src={profileimg} alt="profile img" />
        </div>
        <div className="user__body">
          <div className="user__header">
            <div className="user__headerText">
              <h3>
              <strong>{firstname}&nbsp;{lastname}</strong>{ <VerifiedUserIcon className="user__badge" />}
              <br></br>
              <span className="user__headerSpecial">
                @{username}
                  
                </span>
              </h3>
            </div>
            
          </div>
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
    );
  }
);

export default Users;
