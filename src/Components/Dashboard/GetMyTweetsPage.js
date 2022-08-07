import React, { useState } from 'react';


import MyTweetList from '../Dashboard/MyTweetList';


function GetMyTweetsPage() {
    const [tweets, setMytweets] = useState([]);
    var State=true;
    var token=localStorage.getItem('token');

    async function fetchMytweetsHandler() {
    fetch('https://localhost:44359/api/Tweet/GetAllTweetsofUser',{
      method: 'GET',     
      headers: {
        Authorization:`Bearer ${token}`,
    }} )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        const transformedMyTweets = data.Data.map((tweetData,index) => {
          return { 
            key:index, 
            tweetId:tweetData.Id,   
            Email: tweetData.Email,
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            DeleteState:true
          };
        });
        setMytweets(transformedMyTweets);
        console.log("tt",transformedMyTweets)
      });
  }
    
    
  
      
  return (
    <React.Fragment>
      
      <section>        
      <button onClick={fetchMytweetsHandler}>Get My tweets</button>      
      </section>
      <section>
        <MyTweetList tweet={tweets}  />
      </section>
      
      
    </React.Fragment>
  );
}

export default GetMyTweetsPage;