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
    console.log(data);
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

    console.log(data.Data);
  }

  useEffect(() => {
    getUserIdHandler();
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
