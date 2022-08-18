import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
function DeleteTweet(props) {
  var token = localStorage.getItem("token");
  var ID = props.tweetId;
  var state = props.state;
  function submithandler() {
    if (state == true) deleteTweetHandler();
    props.dynamicLoadDelete();
  }

  async function deleteTweetHandler() {
    const response = await fetch(
      `https://localhost:44359/api/Tweet/delete/${ID}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <IconButton onClick={submithandler}>
      {state == true && <DeleteIcon></DeleteIcon>}
    </IconButton>
  );
}
{
  /* <button
        style={props.state ? { display: "block" } : { display: "none" }}
        onClick={submithandler}
      >
        Delete
      </button> */
}
export default DeleteTweet;
