import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  // hold registration data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Function input
  const Input = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submission
  const Submit = (e) => {
    e.preventDefault();

    console.log('Registration form submitted:', formData);

    // Clear fields after registration
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={Submit} className="max-w-sm mx-auto">
        <input type="text" name="username" value={formData.username} onChange={Input} placeholder="Username" required/>
        <input type="email" name="email" value={formData.email} onChange={Input} placeholder="Email" required/>
        <input type="password" name="password" value={formData.password} onChange={Input} placeholder="Password" required/>
        
        <select name="role" value={formData.role} onChange={Input}>
          <option value="">Select Role</option>
          <option value="end-user">End User</option>
          <option value="tech-support">Tech Support</option>
          <option value="admin">Admin</option>
        </select><br></br>
        <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
