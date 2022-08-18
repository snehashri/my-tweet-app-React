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
import EditTweet from "../Dashboard/EditTweet";
import {FaRegCheckCircle} from "react-icons/fa";


const Post = forwardRef(
  (
    {
      Imageurl,
      profileimg,
      firstname,
      lastname,
      username,
      key,
      message,
      Email,
      AddedDate,
      DeleteState,
      tweetId,
      Likes,
      TweetReplies,
      //For GetMyTweetsPage
      dynamicLoadDelete,
      dynamicLoadReply,
    },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        {/* <div className="post__avatar">
          <Avatar src={profileimg} />
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
            <div className="postss__details__img">
              <img src={Imageurl}  alt="post" />
            </div>
          </div>

          <div className="post__footer">
            <div className="column">
              <LikeTweet tweetId={tweetId} Likes={Likes}></LikeTweet>
            </div>
            <input type="hidden" className="getTweetId" value={tweetId}></input>
            <ReplyTweet
              TweetReplies={TweetReplies}
              tweetId={tweetId}
              //For dynamic load reply
              dynamicLoadReply={dynamicLoadReply}
            ></ReplyTweet>
            <div className="column middle">
              <DeleteTweet
                tweetId={tweetId}
                state={DeleteState}
                //Dynamic load delete
                dynamicLoadDelete={dynamicLoadDelete}
              />
            </div>
            <EditTweet tweetId={tweetId} state={DeleteState} />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
