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


const Post = forwardRef(
  (
    {
      displayName,
      username,
      verified,
      text,
      image,
      avatar,
      key,
      message,
      Email,
      AddedDate,
      DeleteState,
      tweetId,
      Likes,
      TweetReplies,
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
              <p>{message}</p>
            </div>
          </div>

          <div className="post__footer">
            <div className="column">
              <LikeTweet tweetId={tweetId} Likes={Likes}></LikeTweet>
            </div>
            <ReplyTweet
              TweetReplies={TweetReplies}
              tweetId={tweetId}
            ></ReplyTweet>

            <DeleteTweet tweetId={tweetId} state={DeleteState} />
            <EditTweet tweetId={tweetId} state={DeleteState} />
           
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
