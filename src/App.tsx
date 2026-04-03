import React from 'react';
import logo from './logo.svg';
import './App.css';
import User1 from './components/user1';
import DataFetch from './components/DataFetch';

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

        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <DataFetch status="loading" />
        </div>

      </main>
    </div>
  );
}

export default App;
