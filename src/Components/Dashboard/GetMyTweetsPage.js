import React, { useState, useEffect } from "react";

import MyTweetList from "../Dashboard/MyTweetList";

function GetMyTweetsPage() {
  const [tweets, setMytweets] = useState([]);
  const [dynamicDelete, setDynamicDelete] = useState(false);
  const [dynamicReply, setDynamicReply] = useState(false);
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
            Email: tweetData.Email,
            tweetId: tweetData.Id,           
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            DeleteState: true,
            UpdateState: true,
            Likes: tweetData.Likes,
            TweetReplies: tweetData.TweetReplies,
            Imageurl:tweetData.Imageurl,
            firstname:tweetData.user.FirstName,
            lastname:tweetData.user.LastName,
            username:tweetData.user.Username,
            profileimg:tweetData.user.ProfileImg
          };
        });
        setMytweets(transformedMyTweets);
        console.log("tt", transformedMyTweets);
      });
  }

  function dynamicLoadDelete() {
    setDynamicDelete((s) => !s);
  }
  function dynamicLoadReply() {
    setDynamicReply((s) => !s);
  }

  useEffect(() => {
    fetchMytweetsHandler();
  }, [dynamicDelete, dynamicReply]);
  return (
    <React.Fragment>
      <div className="feed">
        <div className="feed__header">
          <h2>My Tweets</h2>
        </div>
        <section>
          {/* <button onClick={fetchMytweetsHandler}>Get All Tweets</button> */}
          <MyTweetList
            tweet={tweets}
            // For Dynamic load after delete and reply
            dynamicLoadDelete={dynamicLoadDelete}
            dynamicLoadReply={dynamicLoadReply}
          />
        </section>
      </div>
    </React.Fragment>
  );
}

export default GetMyTweetsPage;
