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
  const [afterPost, setAfterPost] = useState(false);

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
        console.log(data.Data);
        const transformedMyTweets = data.Data.map((tweetData, index) => {
          return {
            key: index,
            Email: tweetData.Email,
            tweetId: tweetData.Id,
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            DeleteState: false,
            Likes: tweetData.Likes,
          };
        });

        setMytweets(transformedMyTweets);
        console.log("tt", transformedMyTweets[0].Likes.length);
      });
  }

  async function fetchUsersHandler() {
    fetch(
      `https://localhost:44359/api/Auth/SearchByUsername/${searchUsernameInput}`,
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
        const allUsers = data.Data.map((user, index) => {
          return {
            key: index,
            // firstName: user.firstName,
            // email: user.Email,
            email: user.Email,
            firstName: user.FirstName,
            lastName: user.LastName,
            username: user.Username,
          };
        });
        setUsers(allUsers);
      });
  }

  useEffect(() => {
    fetchMytweetsHandler();
  }, [afterPost]);

  function onSearchHandler() {
    setToShow("true");
    fetchUsersHandler();
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
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div className="search_bar">
          <input id="search_username" onInput={searchUsername}></input>
          <button onClick={onSearchHandler}>Search</button>
        </div>
      </div>

      {toShow == "false" ? (
        <div>
          <PostTweetForm afterPost={afterPostHandle}></PostTweetForm>
          <MyTweetList tweet={tweets}></MyTweetList>
        </div>
      ) : (
        <div>
          <UserList users={users}></UserList>
          <button onClick={onBack}>Back</button>
        </div>
      )}
    </div>
  );
}
export default Feed;
