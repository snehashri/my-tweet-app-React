
import React from 'react';
import { useNavigate } from "react-router-dom";
function Board(props) {
    const navigate=useNavigate();
  // get the user data from the session storage
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  
  
  
  // handle click event of logout button
  const handleLogout = () => {
    // remove the token and user from the session storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login',{replace: true});
  }
  if(token === 'null')
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