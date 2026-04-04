import React from 'react';
import logo from './logo.svg';
import './App.css';
import User1 from './components/user1';
import DataFetch from './components/DataFetch';
import Button from './components/Children Props/Button';
import Post from './components/Children Props/Post';
import ButtonStyle from './components/typing style props/ButtonStyle';
import UseStateHook from './components/useStateHook/useStateHook';

const user1 = {
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
          <h2>Union</h2>
          <DataFetch status="error" />
        </div>

        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h2>children props</h2>
          <Button>Click Me</Button>
          <Post />
        </div>

        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h2>typing style props</h2>
          <ButtonStyle btnStyle={{ backgroundColor: 'blue', color: 'white' }} />
        </div>

         <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h2>UseState Hook</h2>
          <UseStateHook />
        </div>

      </main>
    </div>
  );
}

export default App;
