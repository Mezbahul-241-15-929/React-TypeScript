import React, { useState } from 'react';

const Events = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginInfo, setLoginInfo] = useState<{ name: string; password: string } | null>(null);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        if (!name.trim() || !password.trim()) {
            alert("Please fill in all fields!");
            return;
        }

        setLoginInfo({ name, password });
        alert(`Login Successful!\nName: ${name}\nPassword: ${password}`);
        
        // Clear the form
        setName("");
        setPassword("");
    };

    return (
        <div style={{ border: '2px solid #007bff', padding: '20px', margin: '10px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Login Form</h2>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
                    Name:
                </label>
                <input 
                    id="name"
                    type="text" 
                    value={name} 
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        borderRadius: '4px', 
                        border: '1px solid #ddd',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
                    Password:
                </label>
                <input 
                    id="password"
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        borderRadius: '4px', 
                        border: '1px solid #ddd',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            <button 
                onClick={handleLoginClick}
                style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: '4px', 
                    border: 'none', 
                    background: '#28a745', 
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#218838')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#28a745')}
            >
                Login
            </button>

            {loginInfo && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '4px', color: '#155724' }}>
                    <h3>Login Info:</h3>
                    <p><strong>Name:</strong> {loginInfo.name}</p>
                    <p><strong>Password:</strong> {'*'.repeat(loginInfo.password.length)}</p>
                </div>
            )}
        </div>
    );
};

export default Events;