import React from "react";

import Tweet from "./Tweet";
import Post from "./Post";
//import db from './firebase'
import FlipMove from "react-flip-move";

function MyTweetList(props) {
  return (
    <FlipMove>
      {props.tweet.length !== 0 ? (
        props.tweet.map((post) => (
          <Post
            key={post.key}
            Email={post.Email}
            tweetId={post.tweetId}
            message={post.Message}
            AddedDate={post.AddedDate}
            //Delete Enable
            DeleteState={post.DeleteState}
            //Edit Enable
            UpdateState={post.UpdateState}
            Likes={post.Likes}
            TweetReplies={post.TweetReplies}
            //
            Imageurl={post.Imageurl}
            firstname={post.firstname}
            lastname={post.lastname}
            username={post.username}
            profileimg={post.profileimg}
            
            // For GetMyTweetsPage refresh
            dynamicLoadDelete={props.dynamicLoadDelete}
            dynamicLoadReply={props.dynamicLoadReply}
            dynamicLoadEdit={props.dynamicLoadEdit}
          />
        ))
      ) : (
        <div>
          <h3>Tweet Something</h3>
        </div>
      )}
    </FlipMove>
  );
}

export default MyTweetList;
