import React, { useEffect, useState } from 'react'
import '../CSS/Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
//import db from './firebase'
import FlipMove from 'react-flip-move'
import PostTweetForm from './PostTweetForm'

function Feed() {
    var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJyaXlhQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjJlZTE3OTU4OTUzZjkzMjQyMjQzYWE1IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InJpeWEiLCJqdGkiOiI0YTAyYWE3Zi0yNDhjLTQ5ZGItYWJjOS01OTA5NzIyYjM1ZGUiLCJleHAiOjE2NTk4MjUzMzIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.3l3PKlabKP9i7klMxyv3pd4LQ-80qvGssxepvD5AHtM";
    const [posts, setPosts] = useState([
  {
        key : 1,
                displayName : "name",
                username : "username",
                verified :true,
                text : "text",
                image : "/path",
                avatar : "avtar"
  },
  {
    key : 2,
            displayName : "name",
            username : "username",
            verified :true,
            text : "text",
            image : "/path",
            avatar : "avtar"
},{
    key : 3,
            displayName : "name",
            username : "username",
            verified :true,
            text : "text",
            image : "/path",
            avatar : "avtar"
}
    ]);
    const [tweets, setMytweets] = useState([]);

    async function fetchMytweetsHandler() {
    fetch('https://localhost:44359/api/Tweet/GetAllTweetsofUser',{
    method: 'GET',     
      headers: {
        'Authorization':`Bearer ${token}`,
        
      }})
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
            {/* <PostTweetForm></PostTweetForm> */}

            <FlipMove>
                {tweets.map(post => (
            
                <Post 

                key = {post.text}
                Email = {post.Email}
                message = {post.message}
                AddedDate = {post.AddedDate}
                
            />
          
            ))}
           </FlipMove>
        </div>
    )
}
export default Feed
