import React, { useState } from 'react';

function DeleteTweet(props) {
    var token=localStorage.getItem('token');
    var ID=props.tweetId;

function submithandler()
{
    deleteTweetHandler();
    
}


async function deleteTweetHandler() {
    
    const response = await fetch(`https://localhost:44359/api/Tweet/delete/${ID}`, {
      method: 'DELETE',
      headers: {
        Authorization:`Bearer ${token}`,
        
      }
    });
    const data = await response.json();
    console.log(data);
  }

return(
    <button style={props.state?{display:'block'}:{display:'none'}} onClick={submithandler}>Delete</button>
);




   
}

export default DeleteTweet;