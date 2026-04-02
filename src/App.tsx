import React from 'react';
import logo from './logo.svg';
import './App.css';
import User1 from './components/user1';

const user1={
  nationality: "Bangladeshi",
  occupation: "Software Engineer",
  email: "john.doe@example.com",

}

function App() {
  return (
    <div className="App text-center">

      <main style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {/* User1 Component with typed props */}
        <User1 
        name="John Doe" 
        age={30} 
        isRegistered={true}
        lang={["Bangla", "English"]} 
        user={user1}
        />


      </main>
    </div>
  );
}

export default App;
