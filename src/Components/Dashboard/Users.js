import { Avatar } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { forwardRef } from "react";
import "../CSS/Post.css";
import DeleteTweet from "../Dashboard/DeleteTweet";

const Users = forwardRef(
  (
    {
      username,
      verified,
      FirstName,
      image,
      avatar,
      key,
      message,
      Email,
      DeleteState,
      tweetId,
    },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {username}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}@
                  {Email}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{FirstName}</p>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
);

export default Users;
