import React from 'react';

import Tweet from './Tweet';


function MyTweetList (props) {
  return (
    <ul>
      {props.Tweets.map((tweet) => (
        <Tweet
          key={tweet.key}
          Email={tweet.Email}
          AddedDate={tweet.AddedDate}
          Message={tweet.Message}
        />
      ))}
    </ul>
  );
}

export default MyTweetList;