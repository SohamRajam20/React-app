import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  // State variables for username, password, and message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Predefined correct username for validation
  const correctUsername = 'student123';

  // useEffect to clear the message when username changes
  useEffect(() => {
    setMessage('');
  }, [username]);

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username. Please try again.');
    }
  };

  // Function to reset the form
  const handleReset = () => {
    setUsername('');
    setPassword('');
    setMessage('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {message && (
        <p style={{ marginTop: '20px', color: message === 'Login successful!' ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoginPage;
