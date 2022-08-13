import React from "react";

import Tweet from "./Tweet";
import Users from "./Users";
//import db from './firebase'
import FlipMove from "react-flip-move";

function UserList(props) {
  return (
    <FlipMove>
      {props.users.map((user, index) => (
        <Users key={index} Email={user.Email} FirstName={user.firstName} />
      ))}
    </FlipMove>
  );
}

export default UserList;
