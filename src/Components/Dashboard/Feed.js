import React, { useEffect, useState } from 'react'
import '../CSS/Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
//import db from './firebase'
import FlipMove from 'react-flip-move'
import PostTweetForm from './PostTweetForm'

function Feed() {
    var token=localStorage.getItem('token');
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
        Authorization:`Bearer ${token}`,
        
      }})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        const transformedMyTweets = data.Data.map((tweetData,index) => {
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
