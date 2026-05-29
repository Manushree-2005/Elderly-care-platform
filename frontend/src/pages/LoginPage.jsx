import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-root">
      <div className="login-image-section" />
      <div className="login-form-section">
        <form className="login-form-container" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <span className="forgot" onClick={() => alert('Forgot password flow coming soon!')}>Forgot Password?</span>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
