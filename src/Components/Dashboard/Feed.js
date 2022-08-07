import React, { useEffect, useState } from 'react'
import '../CSS/Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
//import db from './firebase'
import FlipMove from 'react-flip-move'
import PostTweetForm from './PostTweetForm'
import MyTweetList from './MyTweetList'

function Feed() {
    var token=localStorage.getItem('token');
    const [posts, setPosts] = useState([
  
    ]);
    const [tweets, setMytweets] = useState([]);

    async function fetchMytweetsHandler() {
    fetch('https://localhost:44359/api/Tweet/GetAllTweets',{
    method: 'GET',     
      headers: {
        Authorization:`Bearer ${token}`,
        
      }})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.Data);
        const transformedMyTweets = data.Data.map((tweetData,index) => {
          return { 
            key:index,    
            Email: tweetData.Email,
            AddedDate: tweetData.AddedDate,
            Message: tweetData.Message,
            DeleteState:false
          };
        });
        setMytweets(transformedMyTweets);
        console.log("tt",transformedMyTweets)
      });
  }

   useEffect(() => {
    fetchMytweetsHandler();
    }, [])

    //console.log(posts)

    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            {/* <TweetBox /> */}
            <PostTweetForm></PostTweetForm> 
            <MyTweetList tweet={tweets}></MyTweetList>

            
        </div>
    )
}
export default Feed
