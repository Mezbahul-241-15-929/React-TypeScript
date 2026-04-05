import React, { useState } from 'react';

const Events = () => {
    const [userName, setUserName] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        alert(`User Name: ${userName}`);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
            <h2>New User</h2>
            <input 
                type="text" 
                value={userName} 
                onChange={handleInputChange}
                placeholder="Enter your name"
                style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #999' }}
            />
            <p><strong>User Name:</strong> {userName || 'No name entered'}</p>

            <button onClick={handleButtonClick} style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #999', background: '#28a745', color: '#fff' }}>
                Submit
            </button>
        </div>
    );
};

export default Events;