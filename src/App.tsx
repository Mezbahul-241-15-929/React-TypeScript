import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './components/User';

function App() {
  return (
    <div className="App text-center">
      <User name="John Doe" age={30} isRegistered={true} />
    </div>
  );
}

export default App;
