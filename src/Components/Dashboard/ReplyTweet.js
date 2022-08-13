import React, { useEffect, useState } from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Feed from "../Dashboard/Feed";
import ReplyComments from "./ReplyComments";
import ShowReply from "./ShowReply";

var likesTest = false;
function ReplyTweet(props) {
  var token = localStorage.getItem("token");
  var tweetId = props.tweetId;
  var likesList = props.Likes;
  const [replyList, setReplyList] = useState([]);
  var userId;
  //const [afterPost, setAfterPost] = useState(false);
  const [result, setResult] = useState(false);
  const [like, setLike] = useState(false);
  const [afterPost, setAfterPost] = useState(false);
  function submithandler() {
    //likeTweetHandler();
    setResult((s) => !s);

    //likesTest = !likesTest;
  }
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
            TweetReplies: tweetData.TweetReplies,
          };
        });

        setReplyList(transformedMyTweets);
        //console.log("tt", transformedMyTweets[0].Likes.length);
      });
  }

  useEffect(() => {
    console.log("Reply before -> ", replyList);
    fetchMytweetsHandler();
    console.log("Reply after -> ", replyList);
  }, [afterPost]);

  function afterPostHandle() {
    setAfterPost((s) => !s);
  }

  return (
    <div>
      <IconButton onClick={submithandler}>
        <CommentIcon></CommentIcon>
      </IconButton>
      {result && (
        <div className="column">
          <ReplyComments
            tweetId={tweetId}
            afterPost={afterPostHandle}
          ></ReplyComments>
          {console.log("above ShowReply", replyList)}
          <ShowReply
            tweetId={props.tweetId}
            TweetReplies={replyList}
          ></ShowReply>
        </div>
      )}
    </div>
  );
}

export default ReplyTweet;
