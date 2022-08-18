import React, { useState } from 'react';
import  { Modal,Button,Row,Col,Form } from 'react-bootstrap';


function EditTweetForm(props) {
    var token=localStorage.getItem('token');
    var ID=props.tweetId;
    var state=props.state;

const[msg,setEnteredMsg]=useState("");

const msgChangeHandler = (event) => {
    setEnteredMsg(event.target.value);
  };


function handleSubmit(event)
{
    event.preventDefault();
    const editedTweetmsg = {
        Message:msg
       };
   if (state == true) EditTweetHandler(editedTweetmsg);
  alert(event.target.message.value);
    console.log(editedTweetmsg);
    
}


async function EditTweetHandler(editedTweetmsg) {
    
    const response = await fetch(`https://localhost:44359/api/Tweet/update/${ID}`, {
      method: 'PUT',
      body: JSON.stringify(editedTweetmsg),
      headers: {
        Authorization:`Bearer ${token}`,
        "Content-Type": "application/json",
    },
  
    });
    const data = await response.json();
    console.log(data);
   
  }

return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      Edit Tweet message
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='container'>
       <Row>
        <Col sm={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="message">
                    <Form.Label>Tweet message</Form.Label>
                    <Form.Control
                    type="text"
                    name="message"
                    required
                    placeholder="enter message"
                    onChange={msgChangeHandler}
                    />                  
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Button varient="primary" type="submit" >
                        Edit Tweet
                    </Button>
                </Form.Group>
            </Form>
        </Col>
       </Row>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button varient ="danger" onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);
   
}

export default EditTweetForm;