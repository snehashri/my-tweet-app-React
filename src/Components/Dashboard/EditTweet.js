import React, { useState } from 'react';
import  { Button, ButtonToolbar } from 'react-bootstrap';
import EditTweetForm from '../Dashboard/EditTweetForm';


function EditTweet(props) {
    var token=localStorage.getItem('token');
    var tweetId=props.tweetId;
    const [addModalshow,setAddModalshow]=useState(false);

function submithandler()
{
    setAddModalshow(true);
}
function addModalClose()
{
    setAddModalshow(false);
}



return(
    <div>
    <ButtonToolbar>
        <Button  varient="primary" onClick={submithandler}>Edit          
        </Button>

        <EditTweetForm
        tweetId={props.tweetId}
        show={addModalshow}
        onHide={addModalClose}
        />
    </ButtonToolbar>
    </div>
 
);




   
}

export default EditTweet;