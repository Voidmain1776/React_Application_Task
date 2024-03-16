import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    // storing email and password
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const Input = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();

    console.log('Login form submitted:', credentials);

    setCredentials({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={Submit}>
        <input type="email" name="email" value={credentials.email} onChange={Input} placeholder="Email"/>
        <input type="password" name="password" value={credentials.password} onChange={Input} placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
