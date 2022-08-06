import React from 'react';



function Tweet (props)  {
  return (
    <li >
      <h3>{props.Email}</h3>
      <h4>{props.Message}</h4>
      <h3>{props.AddedDate}</h3>
      
    </li>
  );
}

export default Tweet;