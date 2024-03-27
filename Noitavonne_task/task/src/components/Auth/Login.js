import React, { useState } from 'react';
import './Login.css'; // Importing CSS styles for Login component

const Login = () => {
  // useState hook to manage state for email and password
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  // Function to handle input changes and update the respective state
  const Input = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const Submit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Logging the submitted credentials
    console.log('Login form submitted:', credentials);

    // Clearing the input fields after submission
    setCredentials({ email: '', password: '' });
  };

  // JSX rendering the login form
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={Submit}>
        {/* Input field for email */}
        <input type="email" name="email" value={credentials.email} onChange={Input} placeholder="Email"/>
        
        {/* Input field for password */}
        <input type="password" name="password" value={credentials.password} onChange={Input} placeholder="Password"/>
        
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
