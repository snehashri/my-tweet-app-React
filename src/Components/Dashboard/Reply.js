import { Avatar } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import React, { forwardRef, useState } from "react";
import "../CSS/Post.css";
import DeleteTweet from "../Dashboard/DeleteTweet";
import LikeTweet from "../Dashboard/LikeTweet";
import ReplyTweet from "../Dashboard/ReplyTweet";

const Reply = forwardRef(
  (
    { Imageurl,
      profileimg,
      firstname,
      lastname,
      username,
      key,
      message,
      Email,
      AddedDate, tweetId },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        {/* <div className="post__avatar">
          <Avatar />
        </div> */}
        <div className="posts__first__img">
          <img src={profileimg} alt="profile img" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              <strong>{firstname}&nbsp;{lastname}</strong>&nbsp;&nbsp;
                <span className="post__headerSpecial">
                { <VerifiedUserIcon className="post__badge" />}@{username}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>{AddedDate}</span>
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Reply;
