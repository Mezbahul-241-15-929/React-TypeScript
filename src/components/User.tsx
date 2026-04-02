import React from 'react'

type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
}

export const User = ({name, age, isRegistered}: UserProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Registered: {isRegistered ? 'Yes' : 'No'}</p>
    </div>
  )
}
