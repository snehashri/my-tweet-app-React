import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from "@material-ui/core/IconButton";
import "../CSS/TweetBox.css";
function PostTweetForm(props) {
  const [enteredmsg, setEnteredMessage] = useState("");
  const [imageId, setImageId] = useState("");
  var token = localStorage.getItem("token");

  const msgChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageId(event.target.files[0].name);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredmsg);
    const UserTweetMsgData = {
      Message: enteredmsg,
      Imageurl:"/images/" +imageId
    };
    PostTweetHandler(UserTweetMsgData);
    console.log(UserTweetMsgData);
    props.afterPost();
    document.getElementById("postTweetForm").reset();
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
    <div className="tweetBox">
      <form id="postTweetForm">
        <div className="tweetBox__input">
          <Avatar />
          <input
            onChange={msgChangeHandler}
            placeholder="What's happening"
            id="message"
            type="text"
          />
           </div>
          <div className="fileupload">
          
          <input
            onChange={imageChangeHandler}
            type="file"
            name="myfile"
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
