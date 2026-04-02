import React from 'react';

type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
  lang: string[];
  user: {
    nationality: string;
    occupation: string;
    email: string;
  };
};

const User1 = ({ name, age, isRegistered, lang, user }: UserProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h2>User 1 Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Registered:</strong> {isRegistered ? 'Yes ✓' : 'No ✗'}</p>
      {/* <p><strong>Languages:</strong> {lang.join(", ")}</p> */}
      <p><strong>Speaks:</strong></p>
      <ul>
        {lang.map((language, idx) => (
          <li key={idx}>{language}</li>
        ))}
      </ul>
      <p><strong>Nationality:</strong> {user.nationality}</p>
      <p><strong>Occupation:</strong> {user.occupation}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default User1;
