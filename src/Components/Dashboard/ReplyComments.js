import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";
import { Avatar, Button } from "@material-ui/core";

function ReplyComments(props) {
  var token = localStorage.getItem("token");
  const [toShow, setToShow] = useState("false");

  const [users, setUsers] = useState([]);
  const [afterPost, setAfterPost] = useState(false);
  var ID = props.tweetId;
  const [searchUsernameInput, setSearchUsernameInput] = useState("");

  const [enteredReply, setEnteredReply] = useState("");
  var token = localStorage.getItem("token");

  const msgChangeHandler = (event) => {
    setEnteredReply(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredReply);
    const TweetReplyData = enteredReply;
    postReplyHandler(TweetReplyData);
    console.log(TweetReplyData);
    props.afterPost();
  };

  async function postReplyHandler(tweetReplyData) {
    fetch(`https://localhost:44359/api/Tweet/reply/${ID}`, {
      method: "POST",
      body: JSON.stringify(tweetReplyData),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            onChange={msgChangeHandler}
            placeholder="What's happening"
            id="message"
            type="text"
          />
        </div>
        <Button onClick={submitHandler} className="tweetBox__tweetButton">
          Reply
        </Button>
      </form>
      {/* <ShowReply tweetId={ID}></ShowReply> */}
    </div>
  );
}
export default ReplyComments;
