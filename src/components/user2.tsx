import React from 'react';

type User2Props = {
  username?: string;
  email?: string;
  bio?: string;
};

const User2 = ({ username = 'Guest User', email = 'user@example.com', bio = 'No bio provided' }: User2Props) => {
  return (
    <div style={{ border: '1px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#f0f8f0' }}>
      <h2>User 2 Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

export default User2;
