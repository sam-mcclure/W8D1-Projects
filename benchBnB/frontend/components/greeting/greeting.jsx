import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const loggedIn = () => (
    <nav>
      <p>Welcome, {currentUser.username}</p>
      <button onClick={() => logout()}>Log Out</button>
    </nav>
  );

  const loggedOut = () => (
    <nav>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </nav>
  );

  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;
