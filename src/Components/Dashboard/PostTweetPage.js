import React, { useState } from 'react';
import PostTweetForm from './PostTweetForm';



function PostTweetPage() {
    

      

    async function PostTweetHandler(tweetmsgdata) {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Tweet/PostTweet`, {
          method: 'POST',
          body: JSON.stringify(tweetmsgdata),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        
        console.log(data);
      }
  
     
  
      
  
  return (
    <React.Fragment>
      <section>
      
        <PostTweetForm onPostTweet={PostTweetHandler}></PostTweetForm>
       
      </section>
      
    </React.Fragment>
  );
}

export default PostTweetPage;