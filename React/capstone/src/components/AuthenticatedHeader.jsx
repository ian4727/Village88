import React from 'react';

const AuthenticatedHeader = ({ firstName, handleSignOut }) => {
  return (
    <ul>
      <li><strong>Welcome, {firstName}!</strong></li>
      <li><a href="#">Settings</a></li>
      <li><button onClick={handleSignOut}>Sign out</button></li>
    </ul>
  );
};

export default AuthenticatedHeader;


