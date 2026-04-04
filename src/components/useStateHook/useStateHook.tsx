import React, { useState } from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div style={{ padding: '15px' }}>
            <h2>UseState Hook Demo</h2>

            <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                <h3>Counter: {count}</h3>
                <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px', padding: '8px 15px' }}>
                    Increment
                </button>
                <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px', padding: '8px 15px' }}>
                    Decrement
                </button>
                <button onClick={() => setCount(0)} style={{ padding: '8px 15px' }}>
                    Reset
                </button>
            </div>

            <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                <h3>Name Input</h3>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <p>Hello, {name || 'Guest'}!</p>
            </div>

            <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                <h3>Toggle Visibility</h3>
                <button 
                    onClick={() => setIsVisible(!isVisible)}
                    style={{ padding: '8px 15px' }}
                >
                    {isVisible ? 'Hide' : 'Show'} Message
                </button>
                {isVisible && (
                    <p style={{ marginTop: '10px', color: '#2196F3', fontWeight: 'bold' }}>
                        This message is now visible!
                    </p>
                )}
            </div>
        </div>
    );
};

export default UseStateHook;