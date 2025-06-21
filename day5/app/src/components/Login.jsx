import React, { useState } from 'react';
import './style/Login.css'; // Make sure the path is correct

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      onLogin(); // call the parent to show AfterLogin
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="center-page">
      <div className="login-box">
        <img
          src="https://logospng.org/download/spotify/logo-spotify-icon-4096.png"
          alt="Logo"
          className="login-logo"
        />
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
