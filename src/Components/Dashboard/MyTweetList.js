import React from 'react';

import Tweet from './Tweet';
import Post from './Post'
//import db from './firebase'
import FlipMove from 'react-flip-move'


function MyTweetList (props) {
  return (
    <FlipMove>
                {props.tweet.map(post => (
            
                <Post 
                
                key = {post.key}
                Email = {post.Email}
                tweetId={post.tweetId}
                message = {post.Message}
                AddedDate = {post.AddedDate}
                DeleteState={post.DeleteState}
                
            />
          
            ))}
           </FlipMove>
  );
}

export default MyTweetList;