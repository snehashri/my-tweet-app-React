import React, { useState } from 'react';



function PostTweetForm(props) {
  
  const [enteredmsg, setEnteredMessage] = useState('');
  var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJyaXlhQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjJlZTE3OTU4OTUzZjkzMjQyMjQzYWE1IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InJpeWEiLCJqdGkiOiI0YTAyYWE3Zi0yNDhjLTQ5ZGItYWJjOS01OTA5NzIyYjM1ZGUiLCJleHAiOjE2NTk4MjUzMzIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.3l3PKlabKP9i7klMxyv3pd4LQ-80qvGssxepvD5AHtM";
  
  const msgChangeHandler = (event) => {
    setEnteredMessage(event.target.value);   
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const UserTweetMsgData = {
        Message:enteredmsg
     
    };
    PostTweetHandler(UserTweetMsgData);
    console.log(UserTweetMsgData);
  };

  async function PostTweetHandler(tweetmsgdata) {
    const response = await fetch('https://localhost:44359/api/Tweet/PostTweet', {
      method: 'POST',
      body: JSON.stringify(tweetmsgdata),
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='message'>Tweet Message</label>
        <input type='text' id='message'  onChange={msgChangeHandler} />
      </div>  
      <button>Post</button>
      
    </form>
  );
}

export default PostTweetForm;