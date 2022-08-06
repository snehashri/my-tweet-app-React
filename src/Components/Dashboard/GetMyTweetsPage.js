import React, { useState } from 'react';


import MyTweetList from '../MyTweetList';


function GetMyTweetsPage() {
    const [tweets, setMytweets] = useState([]);

    async function fetchMytweetsHandler() {
    fetch('https://localhost:44359/api/Tweet/GetAllTweetsofUser')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        const transformedMyTweets = data.data.map((tweetData,index) => {
          return { 
            key:index,    
            Email: tweetData.email,
            AddedDate: tweetData.addedDate,
            Message: tweetData.message,
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
        <MyTweetList Tweets={tweets} />
      </section>
      
      
    </React.Fragment>
  );
}

export default GetMyTweetsPage;