import React from "react";

import Tweet from "./Tweet";
import Post from "./Post";
//import db from './firebase'
import FlipMove from "react-flip-move";
import Reply from "./Reply";

function ShowReply(props) {
  return (
    <FlipMove>
      {props.TweetReplies.map((reply) =>
        reply.TweetReplies.map((replies, index) => (
          <Reply
            key={index}
            tweetId={props.tweetId}
            message={replies.ReplyText}
            Email={replies.user.Email}
            username={replies.user.Username}
          />
        ))
      )}
    </FlipMove>
  );
}

export default ShowReply;
