import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
//import db from './firebase'
import FlipMove from "react-flip-move";
import PostTweetForm from "./PostTweetForm";
import MyTweetList from "./MyTweetList";
import UserList from "./UsersList";
import { getElementError } from "@testing-library/react";

function Feed() {
  
  var token = localStorage.getItem("token");
  const [toShow, setToShow] = useState("false");
  const [tweets, setMytweets] = useState([]);
  const [users, setUsers] = useState([]);
  const [profileuser, setProfileUsers] = useState([]);
  const [afterPost, setAfterPost] = useState(false);
  const [dynamicReply, setDynamicReply] = useState(false);

  const [searchUsernameInput, setSearchUsernameInput] = useState("");
  async function fetchMytweetsHandler() {
    fetch("https://localhost:44359/api/Tweet/GetAllTweets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("alltweets ->>>>>>>>>", data.Data);
        const transformedMyTweets = data.Data.map((tweetData, index) => {
          return {
            key: index,
            Email: tweetData.Email,
            tweetId: tweetData.Id,
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            DeleteState: false,
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
        console.log("Feeds after ->>>>>>>>>>>", transformedMyTweets);
        //console.log("tt", transformedMyTweets[0].Likes.length);
      });
  }

  async function fetchUsersHandler() {
    fetch(
      `https://localhost:44359/api/Tweet/GetTweets/${searchUsernameInput}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.Data);
        const Usertweet = data.Data.map((tweetData, index) => {
          return {
            key: index,
            Email: tweetData.Email,
            tweetId: tweetData.Id,
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            Likes: tweetData.Likes,
            TweetReplies: tweetData.TweetReplies,
            Imageurl:tweetData.Imageurl,
            firstname:tweetData.user.FirstName,
            lastname:tweetData.user.LastName,
            username:tweetData.user.Username,
            profileimg:tweetData.user.ProfileImg
          };
        });
        setUsers(Usertweet);
        // console.log("Usertweet[0]",[Usertweet[0]]);
        setProfileUsers([Usertweet[0]]);
        
      })
      .catch((error) => {
        console.error(error);
        setUsers(null);
      });
  }

  useEffect(() => {
    console.log("Feeds before ->>>>>>>>>>>", tweets);
    fetchMytweetsHandler();
  }, [afterPost, dynamicReply]);

  function onSearchHandler(e) {
    e.preventDefault();
    setToShow("true");
    fetchUsersHandler();
    document.getElementById("searchForm").reset();
  }
  function searchUsername(event) {
    setSearchUsernameInput(event.target.value);
    console.log(event.target.value);
  }

  function onBack() {
    setToShow("false");
  }
  //console.log(posts)

  function afterPostHandle() {
    setAfterPost((s) => !s);
  }

  function dynamicLoadReply() {
    setDynamicReply((s) => !s);
  }
  return (
    <div className="feed">
      <div className="feed__header">
       

        <div className="search_bar">
          <form id="searchForm">
            <input
              id="search_username"
              className="search_username"
              onInput={searchUsername}
              placeholder="Search "
            ></input>
            <button onClick={onSearchHandler} className="small">
              Search
            </button>
          </form>
        </div>
      </div>

      {toShow == "false" ? (
        <div>
          <PostTweetForm afterPost={afterPostHandle}></PostTweetForm>
          <MyTweetList
            tweet={tweets}
            dynamicLoadReply={dynamicLoadReply}
          ></MyTweetList>
        </div>
      ) : (
        <div>
          <div>
          <UserList users={profileuser}></UserList>
          <MyTweetList
            tweet={users}
            dynamicLoadReply={dynamicLoadReply}
          />
          </div>
          <button onClick={onBack} className="small">
            Back
          </button>
        </div>
      )}
    </div>
  );
}
export default Feed;
