import React, { useState } from 'react';
import  { Button, ButtonToolbar } from 'react-bootstrap';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import EditTweetForm from '../Dashboard/EditTweetForm';


function EditTweet(props) {
    var token=localStorage.getItem('token');
    var tweetId=props.tweetId;
   var state=props.state;

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
        {state == true &&
        <Button  varient="primary" onClick={submithandler}>Edit          
        </Button>}

        <EditTweetForm
        state={state}
        tweetId={props.tweetId}
        show={addModalshow}
        onHide={addModalClose}
        dynamicLoadEdit={props.dynamicLoadEdit}
        />
    </ButtonToolbar>
    
    </div>
 
);




   
}

export default EditTweet;