import React from "react";

import Tweet from "./Tweet";
import Users from "./Users";
//import db from './firebase'
import FlipMove from "react-flip-move";

function UserList(props) {
  return (
    <FlipMove>
      {console.log("search ->>>>>>>>>", props.users)}
      {props.users != null ? (
        props.users.map((user, index) => (
          <Users
           key={index}
            Email={user.Email}
            firstname={user.firstname}
            lastname={user.lastname}
            username={user.username}
            profileimg={user.profileimg}
          />
        ))
      ) : (
        <div>
          <h2>No Tweets Found</h2>
        </div>
      )}
    </FlipMove>
  );
}

export default UserList;
