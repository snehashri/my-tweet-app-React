import React, { useEffect, useState } from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

var likesTest = false;
function LikeTweet(props) {
  var token = localStorage.getItem("token");
  var ID = props.tweetId;
  var likesList = props.Likes;
  var userId;
  const [result, setResult] = useState(false);
  const [like, setLike] = useState(false);

  // if (
  //   localStorage.getItem("userId") !== null ||
  //   localStorage.getItem("userId") !== undefined ||
  //   localStorage.getItem("userId") !== ""
  // ) {
  //   localStorage.removeItem("userId");
  // }

  function submithandler() {
    likeTweetHandler();
    setResult((s) => !s);

    likesTest = !likesTest;
  }

  async function likeTweetHandler() {
    const response = await fetch(
      `https://localhost:44359/api/Tweet/like/${ID}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    //console.log(data);
  }
  async function getUserIdHandler() {
    const response = await fetch(
      `https://localhost:44359/api/Tweet/GetIdFromToken`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    localStorage.setItem("userId", data.Data);
    userId = localStorage.getItem("userId");
    //console.log("userId->>>>>>>>>>", userId);
    //setResult(likesList.some((user) => user.userId == userId));
    //console.log("LikesList", likesList);
  }

  useEffect(() => {
    getUserIdHandler();
    console.log("inside the useEffect likess list ", likesList);
    console.log(
      "(user.userId == userId)",
      likesList.some((user) => user.UserId == userId)
    );
    console.log("userId->>>>>>>>>>", localStorage.getItem("userId"));
    setResult(likesList.some((user) => user.userId == userId));
  }, []);
  return (
    // <button
    //   style={props.state ? { display: "block" } : { display: "none" }}
    //   onClick={submithandler}
    // >
    //   Delete
    // </button>

    <IconButton color="secondary" onClick={submithandler}>
      {result ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
}

export default LikeTweet;
