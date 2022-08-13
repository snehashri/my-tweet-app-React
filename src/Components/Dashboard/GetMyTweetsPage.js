import React, { useState } from "react";

import MyTweetList from "../Dashboard/MyTweetList";

function GetMyTweetsPage() {
  const [tweets, setMytweets] = useState([]);
  var State = true;
  var token = localStorage.getItem("token");

  async function fetchMytweetsHandler() {
    fetch("https://localhost:44359/api/Tweet/GetAllTweetsofUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.Data);
        const transformedMyTweets = data.Data.map((tweetData, index) => {
          return {
            key: index,
            tweetId: tweetData.Id,
            Email: tweetData.Email,
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            DeleteState: true,
            Likes: tweetData.Likes,
            TweetReplies: tweetData.TweetReplies,
          };
        });
        setMytweets(transformedMyTweets);
        console.log("tt", transformedMyTweets);
      });
  }

  return (
    <React.Fragment>
      <div className="feed">
        <div className="feed__header">
          <h2>My Tweets</h2>
        </div>
        <section>
          <button onClick={fetchMytweetsHandler}>Get All Tweets</button>
          <MyTweetList tweet={tweets} />
        </section>
      </div>
    </React.Fragment>
  );
}

export default GetMyTweetsPage;
