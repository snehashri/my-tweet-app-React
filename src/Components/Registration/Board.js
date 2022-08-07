
import React from 'react';
import { useNavigate } from "react-router-dom";
function Board(props) {
    const navigate=useNavigate();
  // get the user data from the session storage
  const user = sessionStorage.getItem('user');
  const token = sessionStorage.getItem('token');
  
  
  
  // handle click event of logout button
  const handleLogout = () => {
    // remove the token and user from the session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/login',{replace: true});
  }
  if(token === null)
  {
    return navigate('/login',{replace: true});
  }

  else{
  return (
    <div>
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
}

export default Board;