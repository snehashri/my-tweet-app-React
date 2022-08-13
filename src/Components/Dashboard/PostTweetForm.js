import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "../CSS/TweetBox.css";
function PostTweetForm(props) {
  const [enteredmsg, setEnteredMessage] = useState("");
  var token = localStorage.getItem("token");

  const msgChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredmsg);
    const UserTweetMsgData = {
      Message: enteredmsg,
    };
    PostTweetHandler(UserTweetMsgData);
    console.log(UserTweetMsgData);
    props.afterPost();
  };

  async function PostTweetHandler(tweetmsgdata) {
    const response = await fetch(
      "https://localhost:44359/api/Tweet/PostTweet",
      {
        method: "POST",
        body: JSON.stringify(tweetmsgdata),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    // <form onSubmit={submitHandler}>
    //   <div >
    //     <label htmlFor='message'>Tweet Message</label>
    //     <input type='text' id='message'  onChange={msgChangeHandler} />
    //   </div>
    //   <button>Post</button>

    // </form>
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
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default PostTweetForm;
